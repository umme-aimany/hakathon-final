// frontend/src/components/Project/Project.js

import React from 'react';

const Project = ({ title, developer, description, hostedUrl }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p><strong>Developer:</strong> {developer}</p>
      <p>{description}</p>
      <p><strong>Hosted URL:</strong> <a href={hostedUrl} target="_blank" rel="noopener noreferrer">{hostedUrl}</a></p>
    </div>
  );
};

export default Project;
