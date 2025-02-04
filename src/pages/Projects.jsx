import "./../styles/Projects.css"; // Import external styles
import ProjectCard from "../components/ProjectCard"; // Import the new component

const projects = [
  { 
    id: 1, 
    name: "React Portfolio", 
    description: "My personal website built with React.", 
    github: "https://github.com/Tobias-Thor/JS-1-Examination-Solaris-Inlamningsuppgift", 
    liveLink: "https://tobias-thor.github.io/JS-1-Examination-Solaris-Inlamningsuppgift/solaris.html", 
    placeholderImage: "path/to/your-placeholder-image.jpg" 
  },
  { 
    id: 2, 
    name: "Redux Dashboard", 
    description: "A dashboard using Redux for state management.", 
    github: "https://github.com/Tobias-Thor/Arbetsmetodik-2-Examinationsgrupp-3", 
    liveLink: "#", // Add a live link if applicable
    placeholderImage: "path/to/your-placeholder-image.jpg"
  },
  {
    id: 3,
    name: "Holidays 2024",
    description: "A holiday-themed website with booking features.",
    github: "https://github.com/Tobias-Thor/Holidays-2024",
    liveLink: "https://tobias-thor.github.io/Holidays-2024/",
    placeholderImage: "path/to/your-placeholder-image.jpg"
  },
  {
    id: 4,
    name: "Cosmic Cafe",
    description: "A website for a fictional cafe with cosmic design.",
    github: "https://github.com/Tobias-Thor/cosmic-cafe",
    liveLink: "https://tobias-thor.github.io/cosmic-cafe/cosmic-cafe.html",
    placeholderImage: "path/to/your-placeholder-image.jpg"
  },
  {
    id: 5,
    name: "Examinerande projektuppgift",
    description: "A project for my final exam.",
    github: "https://github.com/Tobias-Thor/Examinerande-projektuppgift-tobias",
    liveLink: "#", // Add a live link if applicable
    placeholderImage: "path/to/your-placeholder-image.jpg"
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h1>Mina Projekt</h1>
      <section className="projects-list">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            name={project.name} 
            description={project.description} 
            github={project.github} 
            liveLink={project.liveLink} 
            placeholderImage={project.placeholderImage} 
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
