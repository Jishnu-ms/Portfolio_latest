import { FaGraduationCap, FaCode, FaBriefcase } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        
        <div className="about-content">
          <div className="about-text-column reveal">
            <p className="about-description">
              Hello! I'm <strong className="gradient-text">Jishnu</strong>, a passionate software developer specializing in <strong className="primary-color">Flutter</strong> and <strong className="primary-color">React</strong>. I enjoy building dynamic, efficient, and beautifully designed applications that solve real-world problems.
            </p>
            <p className="about-description">
              My journey involves a strong foundation in modern web and mobile frameworks, complemented by an interest in integrating AI solutions into everyday applications. I previously worked as a <strong className="primary-color">Software Engineering Intern</strong> at Richinnovations, where I developed multiple scalable Flutter apps, with my main project being Letmego.
            </p>
            
            <a href="#contact" className="btn btn-primary mt-4">Let's Talk</a>
          </div>
          
          <div className="about-cards-column reveal">
            <div className="about-card glass-effect">
              <div className="card-icon"><FaCode /></div>
              <h3>Development</h3>
              <p>Specialized in building scalable frontends and cross-platform mobile apps.</p>
            </div>
            
            <div className="about-card glass-effect">
              <div className="card-icon"><FaGraduationCap /></div>
              <h3>Education</h3>
              <p>Strong academic background focused on Computer Science and software engineering principles.</p>
            </div>
            
            <div className="about-card glass-effect">
              <div className="card-icon"><FaBriefcase /></div>
              <h3>Experience</h3>
              <p>Previously interned at Richinnovations, applying my technical stack to build scalable production apps like Letmego.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
