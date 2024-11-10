import React from 'react';
import '../styles/Projects.css';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
}

const projects: Project[] = [
  {
    name: 'Next.js Blog Site',
    description: 'A fast, responsive blog site with custom theming.',
    techStack: ['Next.js', 'React', 'Custom CSS'],
    githubLink: 'https://github.com/Faadi15',
  },
  // Add more projects here
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.name} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <a href={project.githubLink} target="_blank" className="project-link">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
