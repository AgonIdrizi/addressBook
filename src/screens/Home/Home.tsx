import React from 'react';
import Button, { TYPES } from '../../components/UI/Button/Button';
import './Home.scss';

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="Home">
      <Button onClick={() => console.log('onCLick')} buttonType={TYPES.PRIMARY}>
        Search
      </Button>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
