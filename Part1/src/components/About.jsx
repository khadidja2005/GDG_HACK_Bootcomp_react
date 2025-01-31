import React from 'react';
import './About.css';

const AboutCom = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'CEO',
      description: 'Alice is the visionary behind our company, with over 20 years of experience in the industry.',
    },
    {
      id: 2,
      name: 'Bob Smith',
      role: 'CTO',
      description: 'Bob leads our tech team, ensuring we stay ahead of the curve with cutting-edge technology.',
    },
    {
      id: 3,
      name: 'Charlie Davis',
      role: 'CFO',
      description: 'Charlie manages our finances, keeping us financially healthy and compliant.',
    },
  ];

  return (
    <div className="about-container">
      <h1>About</h1>
      <p>Welcome to the About page. Learn more about our company and team below:</p>
      <h2>Our Mission</h2>
      <p>Our mission is to provide high-quality products and services that improve the lives of our customers.</p>
      <h2>Our Team</h2>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutCom;
