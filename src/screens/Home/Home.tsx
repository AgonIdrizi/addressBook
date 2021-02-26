import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';

import './Home.scss';

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="Home">
      <SearchBox />

      <h1>Home</h1>
    </div>
  );
};

export default Home;
