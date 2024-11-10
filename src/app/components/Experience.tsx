import React from 'react';
import '../styles/Experience.css';

interface Experience {
  title: string;
  company: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: 'Front-End Developer',
    company: 'Tech Solutions',
    description: 'Developed interactive components using Next.js and custom CSS to enhance user experience.',
  },
  {
    title: 'Web Developer',
    company: 'Creative Agency',
    description: 'Collaborated on various web projects using React and custom styling for brand-specific design solutions.',
  },
  // Add more experiences as needed
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.title} className="experience-item">
            <h3 className="experience-position">{exp.title} at {exp.company}</h3>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
