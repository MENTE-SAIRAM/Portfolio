import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Real Estate Website - DreamNest',
      description: 'A real estate platform developed using React and Firebase for image storage.',
      link: 'https://github.com/MENTE-SAIRAM/Real_Estate_Application'
    },
    {
      title: 'Movie Ticket Booking Website',
      description: 'A full-stack application for booking movie tickets with seat selection and payment integration.',
      link: 'https://github.com/MENTE-SAIRAM/Bookshow'
    },
    {
      title: 'Military Mangement System',
      description: 'Designed and implemented a scalable  military mangement system using Object-Oriented Programming principles.',
      link: 'https://github.com/MENTE-SAIRAM/OOPs_Project'
    },
    {
      title: ' Internet Firewall Action Classification and Prediction',
      description: 'Engineered a machine learning model to classify and predict Internet firewall statuses across multiple categories.',
      link: 'https://github.com/MENTE-SAIRAM/Internet-firewall-Action-Classification-and-Prediction'
    },
    {
      title: 'Personal Portfolio',
      description: 'A responsive portfolio website showcasing my projects and skills.',
      link: 'https://github.com/MENTE-SAIRAM/Portfolio'
    },
    {
      title: 'Restaurant Finder App',
      description: 'A React app that allows users to search for restaurants based on location and cuisine.',
      link: 'https://github.com/MENTE-SAIRAM/Restaurant-Finder-App'
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
