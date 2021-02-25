import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from '../../components/UI/NavLink/NavLink';
import Button, { TYPES } from '../../components/UI/Button/Button';
import './Home.scss';

const Home = (): JSX.Element => {
  return (
    <div className="Home">
      <Link to="/settings">Settings</Link>
      <Button onClick={() => console.log('onCLick')} buttonType={TYPES.PRIMARY}>
        Search
      </Button>
      <NavLink linkTo="/settings">Settings</NavLink>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
