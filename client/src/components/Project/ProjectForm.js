// frontend/src/components/Project/ProjectForm.js

import React, { useState } from 'react';

const ProjectForm = ({ onSubmit }) => {
  const [projectData, setProjectData] = useState({
    title: '',
    developer: '',
    description: '',
    hostedUrl: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(projectData);
    setProjectData({
      title: '',
      developer: '',
      description: '',
      hostedUrl: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:
        <input type="text" name="title" value={projectData.title} onChange={handleInputChange} />
      </label>
      <label>Developer:
        <input type="text" name="developer" value={projectData.developer} onChange={handleInputChange} />
      </label>
      <label>Description:
        <textarea name="description" value={projectData.description} onChange={handleInputChange}></textarea>
      </label>
      <label>Hosted URL:
        <input type="text" name="hostedUrl" value={projectData.hostedUrl} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit Project</button>
    </form>
  );
};

export default ProjectForm;
