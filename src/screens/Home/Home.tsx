import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import UserCard from '../../components/UserCard/UserCard';

import './Home.scss';

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <SearchBox />
      <section className="UsersCardContainer">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </section>
    </>
  );
};

export default Home;
