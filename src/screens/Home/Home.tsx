import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = (): JSX.Element => {
  return (
    <div className="Home">
      <Link to="/settings">Settings</Link>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
