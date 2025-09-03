import React from 'react';
import { Code2, Palette, Zap } from 'lucide-react';
import '../styles/About.scss';

const About: React.FC = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle">
            Passionate frontend developer with a love for creating exceptional user experiences
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a dedicated frontend developer who enjoys turning complex problems into 
              simple, beautiful designs. With a strong foundation in modern web technologies, 
              I create responsive and interactive applications that provide seamless user experiences.
            </p>
            <p>
              My journey in web development started with curiosity about how websites work, 
              and has evolved into a passion for crafting pixel-perfect interfaces. I believe 
              in writing clean, maintainable code and staying up-to-date with the latest industry trends.
            </p>
          </div>
          
          <div className="highlights">
            <div className="highlight-card card">
              <div className="highlight-icon">
                <Code2 size={32} />
              </div>
              <h3>Clean Code</h3>
              <p>Writing maintainable, scalable code following best practices</p>
            </div>
            
            <div className="highlight-card card">
              <div className="highlight-icon">
                <Palette size={32} />
              </div>
              <h3>UI/UX Focus</h3>
              <p>Creating intuitive interfaces with attention to detail</p>
            </div>
            
            <div className="highlight-card card">
              <div className="highlight-icon">
                <Zap size={32} />
              </div>
              <h3>Performance</h3>
              <p>Optimizing applications for speed and efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;