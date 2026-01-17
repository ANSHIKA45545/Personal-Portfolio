import React from "react";

const experiences = [
  {
    id: 1,
    title: "Full Stack Trainee",
    company: "Larsen & Toubro",
    period: "August 2024 - November 2024",
    description: "Completed full-stack web development training using MERN Stack, React, Node.js & MongoDB.",
  },
  {
    id: 2,
    title: "Internship",
    company: "HexSoftwares",
    period: "May 2025 - June 2025",
    description: "Worked on developing web applications and building REST APIs for internal tools.",
  },
  {
    id: 3,
    title: "Java Full Stack Developer",
    company: "Infosys SpringBoard",
    period: "November 2025 - Present",
    description: "Built a full-stack e-commerce platform for eco-friendly products. Used Java for backend  and React for frontend. Implemented user authentication, product catalog, and shopping cart features for a seamless shopping experience.",
  },
];


export const ExperienceTracker = () => {
  return (
    <section className="experience-tracker">
      <h2>My Journey</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-item ${index % 2 === 0 ? "right" : "left"}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-period">{exp.period}</span>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
