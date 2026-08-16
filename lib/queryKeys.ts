export const queryKeyConfig = {
  projects: {
    all: ["projects"] as const,
    list: () => [...queryKeyConfig.projects.all, "list"] as const,
    byId: (id: string) => ["projects", id] as const,
    readme: (repo: string, branch = "main") =>
      [...queryKeyConfig.projects.all, "readme", repo, branch] as const,
    related: (projectId: string, limit = 5) =>
      [...queryKeyConfig.projects.all, "related", projectId, limit] as const,
  },
} as const;
