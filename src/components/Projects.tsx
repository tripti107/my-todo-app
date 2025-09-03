import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import '../styles/Projects.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce website with shopping cart functionality',
      longDescription: 'A fully responsive e-commerce platform built with React and TypeScript. Features include product catalog, shopping cart, user authentication, and payment integration. The design focuses on user experience with smooth animations and intuitive navigation.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['React', 'TypeScript', 'SCSS', 'Context API'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather app with location-based forecasts',
      longDescription: 'An interactive weather dashboard that provides real-time weather information and 7-day forecasts. Built with React hooks for state management and responsive design for all devices. Integrates with weather APIs for accurate data.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      technologies: ['React', 'JavaScript', 'CSS3', 'Weather API'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      longDescription: 'A comprehensive task management application with features like project organization, team collaboration, and real-time updates. Built with modern React patterns and optimized for performance.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and technical capabilities
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={18} />
                    Code
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>
            
            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            
            <div className="modal-info">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.longDescription}</p>
              
              <div className="modal-tech">
                {selectedProject.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="modal-links">
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <Github size={18} />
                  View Code
                </a>
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;