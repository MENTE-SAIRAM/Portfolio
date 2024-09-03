import React from 'react';
import './About.css';
import img from '../assests/pooto.png'
function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Mente Sairam, a passionate web developer with experience in building
            modern and responsive web applications. I love creating solutions that are
            not only functional but also visually appealing.
          </p>
          <p>
            I specialize in front-end development using technologies like React, HTML, CSS,
            and JavaScript. I also have experience with back-end development, working with
            Node.js, Express.js, and MongoDB.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, reading about the latest
            trends in web development, and contributing to open-source projects.
          </p>
        </div>
        <div className="about-image">
          <img src={img} alt="Mente Sairam" />
        </div>
      </div>
    </div>
  );
}

export default About;
