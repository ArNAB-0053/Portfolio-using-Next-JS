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

interface UseGetReadmeOptions {
  repo: string;
  branch?: string;
}

interface UseGetRelatedProjectsOptions {
  projectId: string;
  limit?: number;
}