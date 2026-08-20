import { useQuery } from "@tanstack/react-query";
import { queryKeyConfig } from "@/lib/queryKeys";

/**
 * Fetches a project's raw README content directly from GitHub via the
 * `raw.githubusercontent.com` CDN. Assumes all repos live under the
 * `ArNAB-0053` GitHub account. Revalidates every 12 hours.
 *
 * @param repo - The repository name (e.g. `"portfolio-content"`).
 * @param branch - The branch to fetch the README from. Defaults to `"main"`.
 * @throws {Error} If `repo` is empty or falsy.
 * @throws {Error} If the network request fails (non-OK response) — e.g. the
 * repo, branch, or `README.md` doesn't exist.
 * @returns A promise resolving to the raw README content as plain text (markdown source).
 */
export async function getReadme(
  repo: string,
  branch = "main",
): Promise<string> {
  if (!repo) {
    throw new Error("Repository name is required.");
  }

  const url = `https://cdn.jsdelivr.net/gh/ArNAB-0053/${repo}@${branch}/README.md`;

  const response = await fetch(url, {
    next: {
      revalidate: 43_200, // 12 hours
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch README: ${response.status} ${response.statusText}`,
    );
  }

  return response.text();
}

/**
 * Alias for {@link getReadme}, kept for naming clarity at call sites that
 * specifically deal with project READMEs (e.g. the project detail page).
 * Behaves identically to `getReadme` — no separate implementation.
 */
export const getProjectReadme = getReadme;

/**
 * TanStack Query hook for fetching a project's README on the client.
 * Wraps {@link getReadme} and caches the result under
 * `queryKeyConfig.projects.readme(repo, branch)`. Disabled (won't fire)
 * until `repo` is truthy.
 *
 * @param options - Options for the README query.
 * @param options.repo - The repository name to fetch the README for.
 * @param options.branch - The branch to fetch the README from. Defaults to `"main"`.
 * @returns The TanStack `useQuery` result for the README content.
 */
export function useGetReadme({ repo, branch = "main" }: UseGetReadmeOptions) {
  return useQuery({
    queryKey: queryKeyConfig.projects.readme(repo, branch),
    queryFn: () => getReadme(repo, branch),
    enabled: Boolean(repo),
  });
}