import React from 'react';
import './App.css';

const App = () => {
  const interests = [
    "I was born in Milwaukee, Wisconsin in 2005. In 2023, I moved to Durham, North Carolina to attend Duke University", 
    "In my free time I enjoy playing piano, kicking soccer balls, and watching the NBA", 
    "I'm super excited to learn and grow, and am open to any opportunities where I can develop my skills. Feel free to connect with me on LinkedIn, or contact me!"
  ];
  
  return (
    <div>
      <h1 className="left-align">Hi! I am Kevin, a freshman at Duke University studying Computer Science and Statistics.</h1>
      <img src="/src/images/kevinliuPhoto.png" alt="face photo" className="profile-image"/>

      <h2 className="left-align">Get to know me!</h2>
      <ul className="interests-list">
        {interests.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Projects</h2>
      <h3>Here is what I have been up to!</h3>

      <div className="project">
        <h3>Milwaukee STEM Program</h3>
        <p>Milwaukee, WI | Founder & Leader | May 2020 - Present</p>
        <ul>
          <li>Established STEM program to foster exploratory education for 100+ participants in lower-income areas of Milwaukee.</li>
          <li>Organized 3 distinct interactive programs including 3D Printing, Aeronautics, & Astronomy.</li>
          <li>Created and oversaw a mentorship program connecting young STEM students with teachers and professors.</li>
        </ul>
      </div>

      <div className="project">
        <h3>High-Energy Particle Collision Program</h3>
        <p>Durham, NC | Research & Development Manager | Jan 2024 - Present</p>
        <ul>
          <li>Spearheaded weekly meetings of over 20 members to discuss particle research information and various findings.</li>
          <li>Researched Electroweak interactions and learned about ATLAS and Electron scattering experiments.</li>
          <li>Completed external research with fellow program members to go beyond the scope of the research program.</li>
        </ul>
      </div>

      <div className="project">
        <h3>University of Helsinki Online FullStackOpen Coding Bootcamp</h3>
        <p>New Berlin, WI | Student | Nov 2023 - Jan 2024</p>
        <ul>
          <li>Studied and reviewed the basics and features of React, Javascript, HTML, and CSS to create full stack application projects.</li>
          <li>Built applications such as a weather app, phonebook, and notes app, and deployed them to the internet.</li>
        </ul>
        
      </div>
    </div>
  );
};

export default App;
