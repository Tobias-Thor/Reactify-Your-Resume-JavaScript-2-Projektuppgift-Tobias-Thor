import React from 'react';
import "./../styles/ProjectCard.css"; 

// This is a functional component that accepts props to display project details.
const ProjectCard = ({ name, description, github, liveLink, projectImage }) => {
  return (
    <section className="project-card">
      <img src={projectImage} alt={name} className="project-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <section className="project-links">
      <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      {/* Live demo link is only displayed if a live link is provided */}
      {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
      </section>
    </section>
  );
};

export default ProjectCard;
