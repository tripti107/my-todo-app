import React, { useState, useEffect, useRef } from 'react';
import '../styles/Skills.scss';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'tools' | 'other';
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 75, category: 'frontend' },
    { name: 'HTML5', level: 95, category: 'frontend' },
    { name: 'CSS3/SCSS', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'Git', level: 80, category: 'tools' },
    { name: 'Figma', level: 70, category: 'tools' },
    { name: 'Responsive Design', level: 90, category: 'other' },
    { name: 'Performance Optimization', level: 75, category: 'other' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const toolSkills = skills.filter(skill => skill.category === 'tools');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  return (
    <section id="skills" className="skills section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">Frontend Development</h3>
            <div className="skill-list">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3 className="category-title">Tools & Others</h3>
            <div className="skill-list">
              {[...toolSkills, ...otherSkills].map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-fill"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        animationDelay: `${(index + frontendSkills.length) * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;