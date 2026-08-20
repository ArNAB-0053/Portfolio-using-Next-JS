import { envConfig } from "@/utils/envConfig";
import type { Project } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { queryKeyConfig } from "@/lib/queryKeys";
import { cache } from "react";

const url =
  "https://cdn.jsdelivr.net/gh/ArNAB-0053/portfolio-content/JSON/projects.json";
const DEFAULT_PROJECT_IMAGE = "https://i.imgur.com/placeholder.png";
const DEFAULT_REVALIDATE_SECONDS = 43_200;

/**
 * Type guard checking whether a value is an array of strings.
 *
 * @param value - The value to check.
 * @returns `true` if `value` is an array where every element is a string.
 */
const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) &&
  value.every((item): item is string => typeof item === "string");

/**
 * Validates and normalizes a single raw project object from the remote JSON
 * source into a well-formed `Project`, applying defaults for optional fields.
 *
 * @param project - The raw, unvalidated project data (expected to be an object).
 * @param index - The index of this project in the source array, used for error messages.
 * @throws {Error} If `project` is not an object, or is missing required fields
 * (`id`, `project_heading`, `project_desc`, `github_link`).
 * @returns A normalized `Project` with defaults applied for missing optional fields.
 */
const normalizeProject = (project: unknown, index: number): Project => {
  if (typeof project !== "object" || project === null) {
    throw new Error(`Invalid project at index ${index}: Expected an object.`);
  }

  const rawProject = project as RemoteProject;

  if (
    typeof rawProject.id !== "string" ||
    typeof rawProject.project_heading !== "string" ||
    typeof rawProject.project_desc !== "string" ||
    typeof rawProject.github_link !== "string"
  ) {
    throw new Error(
      `Invalid project at index ${index}: Missing required fields.`,
    );
  }

  return {
    id: rawProject.id,
    project_heading: rawProject.project_heading,
    project_desc: rawProject.project_desc,
    project_img: rawProject.project_img ?? DEFAULT_PROJECT_IMAGE,
    github_link: rawProject.github_link,
    deployed_link: rawProject.deployed_link ?? "",
    tags: isStringArray(rawProject.tags) ? rawProject.tags : [],
    project_tag: isStringArray(rawProject.project_tag)
      ? rawProject.project_tag
      : ["web"],
    bg: rawProject.bg ?? "transparent",
    fontSize: rawProject.fontSize ?? "text-3xl",
  };
};

/**
 * Fetches and normalizes the full list of projects from the remote JSON source
 * (jsDelivr-hosted GitHub content). Results are cached per-request via React's
 * `cache()`, and the underlying `fetch` revalidates on the configured interval
 * (defaults to 12 hours if `envConfig.projects.revalidateSeconds` is unset or invalid).
 *
 * @throws {Error} If the network request fails (non-OK response).
 * @throws {Error} If the response body is not a JSON array.
 * @throws {Error} If any individual project fails normalization (see {@link normalizeProject}).
 * @returns A promise resolving to the full array of normalized projects.
 */
export const getProjects = cache(async (): Promise<Project[]> => {
  const revalidateSeconds = Number.parseInt(
    envConfig.projects.revalidateSeconds ?? String(DEFAULT_REVALIDATE_SECONDS),
    10,
  );

  const response = await fetch(url, {
    next: {
      revalidate: Number.isNaN(revalidateSeconds)
        ? DEFAULT_REVALIDATE_SECONDS
        : revalidateSeconds,
      tags: ["revalidate"],
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch remote project data: ${response.status} ${response.statusText}`,
    );
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid response format: Expected an array of projects.");
  }

  console.log(`Fetched ${data.length} projects from remote source.`);

  return data.map(normalizeProject);
});

/**
 * TanStack Query hook for fetching the full list of projects on the client.
 * Wraps {@link getProjects} and caches the result under
 * `queryKeyConfig.projects.list()`.
 *
 * @returns The TanStack `useQuery` result for the project list.
 */
export function useGetProjects() {
  return useQuery({
    queryKey: queryKeyConfig.projects.list(),
    queryFn: getProjects,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });
}

/**
 * Fetches a single project by its `id`. Internally reuses {@link getProjects}
 * (which is itself request-deduped), then finds the matching project client-side.
 * Wrapped in React's `cache()` so repeated calls with the same `id` within a
 * single server request (e.g. `generateMetadata` + the page component) resolve
 * to a single memoized execution rather than re-fetching.
 *
 * @param id - The project's unique identifier.
 * @returns A promise resolving to the matching `Project`, or `null` if no project has that `id`.
 */
export const getProjectById = cache(
  async (id: string): Promise<Project | null> => {
    const projects = await getProjects();

    return projects.find((project) => project.id === id) ?? null;
  },
);

/**
 * TanStack Query hook for fetching a single project by `id` on the client.
 * Wraps {@link getProjectById} and caches the result under
 * `queryKeyConfig.projects.byId(id)`. Disabled (won't fire) until `id` is truthy.
 *
 * @param id - The project's unique identifier.
 * @returns The TanStack `useQuery` result for the requested project.
 */
export function useGetProjectById(id: string) {
  return useQuery({
    queryKey: queryKeyConfig.projects.byId(id),
    queryFn: () => getProjectById(id),
    enabled: Boolean(id),
  });
}

/**
 * Finds projects related to a given project, ranked by similarity.
 *
 * Similarity is scored by counting overlapping `project_tag` (category) and
 * `tags` (technology) values against the source project, weighting category
 * matches 3x higher than technology matches. Results are sorted by descending
 * score and truncated to `limit`. The source project itself is excluded.
 *
 * @param projectId - The `id` of the project to find related projects for.
 * @param limit - Maximum number of related projects to return. Defaults to `5`.
 * @returns A promise resolving to an array of related projects, best match first.
 * Returns an empty array if `projectId` doesn't match any known project.
 */
export async function getRelatedProjects(
  projectId: string,
  limit: number = 5,
): Promise<Project[]> {
  const projects = await getProjects();

  const currentProject = projects.find((project) => project.id === projectId);

  if (!currentProject) {
    return [];
  }

  const currentCategories = new Set(currentProject.project_tag || []);
  const currentTags = new Set(currentProject.tags || []);

  return projects
    .filter((project) => project.id !== projectId)
    .map((project) => {
      const categoryScore = (project.project_tag || []).filter((tag) =>
        currentCategories.has(tag),
      ).length;

      const technologyScore = (project.tags || []).filter((tag) =>
        currentTags.has(tag),
      ).length;

      return {
        project,
        score: categoryScore * 3 + technologyScore,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ project }) => project);
}

/**
 * TanStack Query hook for fetching projects related to a given project on the client.
 * Wraps {@link getRelatedProjects} and caches the result under
 * `queryKeyConfig.projects.related(projectId, limit)`. Disabled (won't fire)
 * until `projectId` is truthy.
 *
 * @param options - Options for the related-projects query.
 * @param options.projectId - The `id` of the project to find related projects for.
 * @param options.limit - Maximum number of related projects to return. Defaults to `5`.
 * @returns The TanStack `useQuery` result for the related projects list.
 */
export function useGetRelatedProjects({
  projectId,
  limit = 5,
}: UseGetRelatedProjectsOptions) {
  return useQuery({
    queryKey: queryKeyConfig.projects.related(projectId, limit),
    queryFn: () => getRelatedProjects(projectId, limit),
    enabled: Boolean(projectId),
  });
}
