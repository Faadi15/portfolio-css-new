import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skills = ['HTML', 'CSS', 'TypeScript', 'Next.js', 'React', 'Custom CSS'];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <span key={skill} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
