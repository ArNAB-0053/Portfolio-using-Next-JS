import ProjectReadmePage from "@/Components/Project/ProjectReadme_Page";
import { getProjectById } from "@/services/project.service";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const project = await getProjectById(id);

  return {
    title: `Project Details | ${project?.project_heading || id}`,
    description: project?.project_desc,
  };
}

const Page = async ({ params }) => {
  const { id } = await params;

  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectReadmePage project={project} />
    </>
  );
};

export default Page;
