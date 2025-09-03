import React from 'react';
import { Heart, Github } from 'lucide-react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Made with <Heart size={16} className="heart" /> by a Frontend Developer
          </p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link">
              <Github size={18} />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;