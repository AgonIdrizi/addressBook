import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import UserCard from '../../components/UserCard/UserCard';
import { useUsersApi } from '../../hooks/useUsersApi';
import { IUser } from '../../types/user.types';

import './Home.scss';

const Home: React.FunctionComponent = (): JSX.Element => {
  const [{ data, isLoading }] = useUsersApi(1, []);

  if (isLoading) {
    return <p>isLoading</p>;
  }

  return (
    <>
      <SearchBox />
      <section className="UsersCardContainer">
        {data &&
          data.map((user: IUser) => <UserCard key={user.phone} user={user} />)}
      </section>
    </>
  );
};

export default Home;
