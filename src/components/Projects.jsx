import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import chatImg from './assets/projects/chat.png';
import letmegoImg from './assets/projects/letmego.png';
import constructionImg from './assets/projects/construction.png';
import stockImg from './assets/projects/stock.png';
import './Projects.css';

const projectsData = [
  {
    title: 'ChatX',
    description: 'A real-time chat application facilitating instant messaging, secure user authentication, and responsive design for a seamless communication experience.',
    tech: ['React', 'Firebase', 'WebSockets'],
    github: 'https://github.com/Jishnu-ms/ChatX',
    live: 'https://chatx-1.vercel.app/',
    image: chatImg
  },
  {
    title: 'Letmego',
    description: 'A dedicated mobile application built with Flutter that helps users report blocked parkings directly to the respective vehicle owners for quick resolution.',
    tech: ['Flutter', 'Dart', 'Cross-Platform'],
    github: '#',
    live: 'https://www.letmegoo.com/',
    image: letmegoImg
  },
  {
    title: 'Construction Cost Estimator',
    description: 'An AI-powered web tool that predicts construction costs based on project parameters using a Deep Neural Network.',
    tech: ['FastAPI', 'PyTorch', 'Flutter', 'DNN'],
    github: 'https://github.com/Jishnu-ms/BuildXinfo',
    live: 'https://build-xinfo.vercel.app/',
    image: constructionImg
  },
  {
    title: 'Stock Management System',
    description: 'A robust inventory management solution for tracking stock levels, generating reports, and predicting reorder points.',
    tech: ['React', 'Vercel', 'FireBase'],
    github: 'https://github.com/Jishnu-ms/Inventory-management',
    live: 'https://inventory-management-delta-lac.vercel.app',
    image: stockImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title reveal">Featured Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card glass-effect reveal">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item, i) => (
                    <span key={i} className="tech-tag">{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} className="project-link" target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
