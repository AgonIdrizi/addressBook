import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import UserCard from '../../components/UserCard/UserCard';

import './Home.scss';

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="Home">
      <SearchBox />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default Home;
