import React from 'react';

const ProjectCard = ({ name, description, github, liveLink, placeholderImage }) => {
  return (
    <section className="project-card">
      <img src={placeholderImage} alt={name} className="project-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <section className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
      </section>
    </section>
  );
};

export default ProjectCard;
