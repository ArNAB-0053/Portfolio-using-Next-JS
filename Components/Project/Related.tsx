import React from 'react';
import ProjectSlider from './ProjectSlider';
import { useGetRelatedProjects } from '@/services/project.service';

const RelatedProjects = ({ projectId }: { projectId: string }) => {
  const { data: relatedProjects = [], isLoading, error } = useGetRelatedProjects({ projectId });
  const errorMessage = error instanceof Error ? error.message : null;

  return (
    <div className='relative'>
      <ProjectSlider
        activeTab="All"
        projects={relatedProjects}
        loading={isLoading}
        error={errorMessage}
      />
    </div>
  )
}

export default RelatedProjects
