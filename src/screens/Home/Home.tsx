import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import UserCard from '../../components/UserCard/UserCard';
import { useUsersContext } from '../../contexts/usersContext';
import { useUsersApi } from '../../hooks/useUsersApi';
import { IUser } from '../../types/user.types';

import './Home.scss';

const Home: React.FunctionComponent = (): JSX.Element => {
  const [{ isLoading, data, isError }, setPage] = useUsersContext();

  return (
    <>
      <SearchBox />
      <button onClick={() => setPage((old: number) => old + 1)}>
        {' '}
        Fetch more
      </button>
      <section className="UsersCardContainer">
        {data &&
          data.map((user: IUser, idx: number) => (
            <UserCard key={user.email + idx} user={user} />
          ))}
      </section>
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default Home;
