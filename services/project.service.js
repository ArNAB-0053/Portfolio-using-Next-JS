import { envConfig } from "@/utils/envConfig";

const url = "https://cdn.jsdelivr.net/gh/ArNAB-0053/portfolio-content/JSON/projects.json";

/**
 * Service to fetch and validate project data from the remote JSON source.
 * @returns {Promise<Array>} - A promise that resolves to an array of project objects.
 */
export async function getProjects() {
  // Cache response for 12 hours (43200 seconds) using Next.js fetch cache configuration
  const response = await fetch(url, {
    next: { revalidate: parseInt(envConfig.projects.revalidateSeconds) },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch remote project data: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid response format: Expected an array of projects.");
  }

  console.log(`Fetched ${data.length} projects from remote source.`);

  // Validate and clean up each project item to match expectations
  return data.map((project, index) => {
    if (!project.project_heading || !project.project_desc || !project.github_link) {
      throw new Error(`Invalid project at index ${index}: Missing required fields.`);
    }

    return {
      id: project.id,
      project_heading: project.project_heading,
      project_desc: project.project_desc,
      project_img: project.project_img || "https://i.imgur.com/placeholder.png",
      github_link: project.github_link,
      deployed_link: project.deployed_link ?? '',
      tags: Array.isArray(project.tags) ? project.tags : [],
      project_tag: Array.isArray(project.project_tag) ? project.project_tag : ["web"],
      bg: project.bg || "transparent",
      fontSize: project.fontSize || "text-3xl",
    };
  });
}

/**
 * Service to fetch project details by ID from the remote JSON source.
 * @param {string} id - The ID of the project to retrieve.
 * @returns {object|null} The project object if found, otherwise null.
 */
export async function getProjectById(id) {
  const projects = await getProjects();

  return projects.find((project) => project.id === id) ?? null;
}