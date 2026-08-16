import { getRelatedProjects } from '@/services/project.service';
import { Project } from '@/types';
import React, { useEffect, useState } from 'react'
import ProjectSlider from './ProjectSlider';

const RelatedProjects = ({ projectId }: { projectId: string }) => {
  const [relatedProjects, setRelatedProjects] = useState<Project[] | null>(null);
  useEffect(() => {
    // Fetch related projects from an API or database
    const fetchRelatedProjects = async () => {
      await getRelatedProjects(projectId)
        .then((projects) => {
          setRelatedProjects(projects);
        })
        .catch((error) => {
          console.error('Error fetching related projects:', error);
        });
    };

    fetchRelatedProjects();
  }, [projectId]);

  return (
    <div className='relative'>
      <ProjectSlider
        activeTab="All"
        projects={relatedProjects || []}
        loading={relatedProjects === null}
        error={relatedProjects === null ? 'Loading...' : null}
      />
    </div>
  )
}

export default RelatedProjects
