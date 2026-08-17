import ProjectReadmePage from "@/Components/Project/readme/ProjectReadme_Page";
import { getProjectById } from "@/services/project.service";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectById(id);
  return {
    title: `Project Details | ${project?.project_heading || id}`,
    description: project?.project_desc,
  };
}

const Page = async ({ params }: PageProps): Promise<React.ReactElement> => {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) {
    notFound();
  }
  return <ProjectReadmePage project={project} />
};

export default Page;