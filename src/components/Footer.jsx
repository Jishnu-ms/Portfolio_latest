import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2 className="gradient-text">Jishnu.</h2>
            <p>Building intuitive and scalable digital experiences.</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/Jishnu-ms" className="footer-social-link" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/jishnums830/" className="footer-social-link" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="#" className="footer-social-link"><FaTwitter /></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Jishnu. All rights reserved.
          </p>
          <p className="built-with">
            Built with <span className="react-color">React</span> & <FaHeart className="heart-icon" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
