import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Project Details</h1>
        <p className="text-lg">You are viewing details for project ID: <span className="font-mono">{id}</span></p>
        {/* Replace this with actual project details if stored in state or fetched via API */}
      </div>
    </div>
  );
};

export default ProjectDetails;
