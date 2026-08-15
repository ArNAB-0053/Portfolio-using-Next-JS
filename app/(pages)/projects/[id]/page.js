import ProjectReadmePage from '@/Components/Project/ProjectReadme_Page'
import React from 'react'

export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Project Details | ${id}`,
  };
}

const Page = async ({ params }) => {
  const { id } = await params;

  return (
    <ProjectReadmePage projectId={id} />
  );
}

export default Page;