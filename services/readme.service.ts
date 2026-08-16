/**
 * Fetches a project's README directly from GitHub.
 */
export async function getProjectReadme(
  repo: string,
  branch = "main",
): Promise<string> {
  if (!repo) {
    throw new Error("Repository name is required.");
  }

  const url = `https://raw.githubusercontent.com/ArNAB-0053/${repo}/${branch}/README.md`;

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
