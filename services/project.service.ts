import { envConfig } from "@/utils/envConfig";
import type { Project } from "@/types";

const url =
  "https://cdn.jsdelivr.net/gh/ArNAB-0053/portfolio-content/JSON/projects.json";
const DEFAULT_PROJECT_IMAGE = "https://i.imgur.com/placeholder.png";
const DEFAULT_REVALIDATE_SECONDS = 43_200;

type RemoteProject = Partial<Project> & {
  id?: string;
  project_heading?: string;
  project_desc?: string;
  project_img?: string;
  github_link?: string;
  deployed_link?: string;
  tags?: unknown;
  project_tag?: unknown;
  bg?: string;
  fontSize?: string;
};

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item): item is string => typeof item === "string");

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
    throw new Error(`Invalid project at index ${index}: Missing required fields.`);
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

export async function getProjects(): Promise<Project[]> {
  const revalidateSeconds = Number.parseInt(
    envConfig.projects.revalidateSeconds ?? String(DEFAULT_REVALIDATE_SECONDS),
    10,
  );

  const response = await fetch(url, {
    next: { revalidate: Number.isNaN(revalidateSeconds) ? DEFAULT_REVALIDATE_SECONDS : revalidateSeconds },
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
}

export async function getProjectById(id: string): Promise<Project | null> {
  const projects = await getProjects();

  return projects.find((project) => project.id === id) ?? null;
}

export async function getRelatedProjects(projectId: string, limit: number = 5): Promise<Project[]> {
  const projects = await getProjects();

  const currentProject = projects.find(
    (project) => project.id === projectId
  );

  if (!currentProject) {
    return [];
  }

  const currentCategories = new Set(currentProject.project_tag || []);
  const currentTags = new Set(currentProject.tags || []);

  return projects
    .filter((project) => project.id !== projectId)
    .map((project) => {
      const categoryScore = (project.project_tag || []).filter(
        (tag) => currentCategories.has(tag)
      ).length;

      const technologyScore = (project.tags || []).filter(
        (tag) => currentTags.has(tag)
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