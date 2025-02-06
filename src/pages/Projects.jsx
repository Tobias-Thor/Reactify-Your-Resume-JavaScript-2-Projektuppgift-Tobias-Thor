import ProjectCard from "../components/ProjectCard"; // Importing a component
import "./../styles/Projects.css"; 

// An array of project objects, each containing details about a project
const projects = [
  { 
    id: 1, 
    name: "Solaris - utforska vårat solsystem", 
    description: "En examinationsuppgift i kursen JavaScript 1", 
    github: "https://github.com/Tobias-Thor/JS-1-Examination-Solaris-Inlamningsuppgift", 
    liveLink: "https://tobias-thor.github.io/JS-1-Examination-Solaris-Inlamningsuppgift/solaris.html", 
    projectImage: "./../images/solaris.png" 
  },
  { 
    id: 2, 
    name: "Taverna BBQ & Steakhouse", 
    description: "Ett grupparbete och examinationsuppgift i kursen Arbetsmetodik för utvecklare 2", 
    github: "https://github.com/Tobias-Thor/Arbetsmetodik-2-Examinationsgrupp-3", 
    /* liveLink: "#",  Add a live link if applicable */
    projectImage: "i/../images/bbq.png"
  },
  {
    id: 3,
    name: "Holidays 2024",
    description: "A holiday-themed website with planning features and a countdown timer.",
    github: "https://github.com/Tobias-Thor/Holidays-2024",
    liveLink: "https://tobias-thor.github.io/Holidays-2024/",
    projectImage: "./../images/holidays.png"
  },
  {
    id: 4,
    name: "Cosmic Cafe",
    description: "A website for a fictional cafe with cosmic design.",
    github: "https://github.com/Tobias-Thor/cosmic-cafe",
    liveLink: "https://tobias-thor.github.io/cosmic-cafe/cosmic-cafe.html",
    projectImage: "./../images/cosmic-cafe.png"
  },
  {
    id: 5,
    name: "Pärmar & Poesi Bokhandel",
    description: "Ett grupparbete och examinationsuppgift i kursen HTML & CSS.",
    github: "https://github.com/Tobias-Thor/Examinerande-projektuppgift-tobias",
    liveLink: "https://viktorwahlqvist.github.io/Examinerande-projektuppgift/", // Add a live link if applicable
    projectImage: "./../images/parmar-och-poesi.png"
  }
];

// Functional component that displays a list of projects
const Projects = () => {
  return (
    <section className="projects">
      <h1>Mina Projekt</h1>
      <section className="projects-list">
        {/* Mapping through the 'projects' array and rendering a ProjectCard for each project */}
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} // Unique key 
            // props...
            name={project.name} 
            description={project.description} 
            github={project.github} 
            liveLink={project.liveLink} 
            projectImage={project.projectImage} 
          />
        ))}
      </section>
    </section>
  );
};

export default Projects;
