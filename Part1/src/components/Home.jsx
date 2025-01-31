import React from 'react';
import './Home.css';

const HomeCom = () => {
  const features = [
    {
      id: 1,
      title: 'Responsive Design',
      description: 'Our site is fully responsive and looks great on all devices.',
    },
    {
      id: 2,
      title: 'User-Friendly Interface',
      description: 'We provide a clean and intuitive interface for a great user experience.',
    },
    {
      id: 3,
      title: 'Fast Performance',
      description: 'Our platform is optimized for fast loading times and smooth performance.',
    },
  ];

  return (
    <div className="home-container">
      <h1>Home</h1>
      <p>Welcome to the Home page. Here are some of the features we offer:</p>
      <ul>
        {features.map((feature) => (
          <li key={feature.id}>
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeCom;
