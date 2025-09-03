import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Hero.scss';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Frontend Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              Hi, I'm <span className="gradient-text">Alex Johnson</span>
            </h1>
            <h2 className="hero-subtitle slide-up">
              {displayText}<span className="cursor">|</span>
            </h2>
            <p className="hero-description slide-up">
              Passionate about creating beautiful, responsive web applications with modern technologies. 
              Ready to bring creative designs to life with clean, efficient code.
            </p>
            
            <div className="hero-actions slide-up">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
                <Mail size={18} />
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
            </div>
            
            <div className="social-links slide-up">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:alex@example.com">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={scrollToAbout}>
          <ChevronDown size={24} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;