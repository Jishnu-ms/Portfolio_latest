import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImg from './assets/profile.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content reveal">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Jishnu</span>
          </h1>
          <h2 className="hero-subtitle">Flutter & React Developer</h2>
          <p className="hero-tagline">
            I build beautiful, scalable apps with Flutter, React and AI.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
          
          <div className="hero-socials">
            <a href="https://github.com/Jishnu-ms" className="social-icon" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/jishnums830/" className="social-icon" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="#contact" className="social-icon"><FaEnvelope /></a>
          </div>
        </div>
        
        <div className="hero-image-container reveal">
          <div className="image-wrapper">
            <div className="glow-backdrop"></div>
            <div className="gradient-border">
              <img 
                src={profileImg} 
                alt="Jishnu" 
                className="hero-profile-image" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
