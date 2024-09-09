import './footer.css';
import { Icon } from '@iconify/react';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <h4>Reach me out:</h4>
          <a href="https://www.linkedin.com/in/josephine-closan/" target="_blank" rel="noopener noreferrer">
            <span data-text="LinkedIn"><Icon icon="mdi:linkedin" className='mediaIcon' /></span></a>
          <a href="https://github.com/JoeClos" target="_blank" rel="noopener noreferrer">
            <span data-text="GitHub"><Icon icon="mdi:github" className='mediaIcon' /></span></a>
          <a href="mailto:josephine.closan@yahoo.com">
            <span data-text="Email"><Icon icon="ic:baseline-email" className='mediaIcon' /></span></a>
        </div>

        <div className="footer-nav">
          <ul className="footer-nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

      </div>
      <p>© {new Date().getFullYear()} Josephine Closan. All rights reserved.</p>

    </footer>
  );
};

export default Footer;
