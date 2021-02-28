import React from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import UserCard from '../../components/UserCard/UserCard';
import { useUsersContext } from '../../contexts/usersContext';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { IUser } from '../../types/user.types';
import './Home.scss';

const Home: React.FunctionComponent = (): JSX.Element => {
  const { state, fetchUsers } = useUsersContext();
  const [setElement] = useInfiniteScroll(fetchUsers);

  console.log('Home renders');
  return (
    <>
      <SearchBox />
      <button onClick={() => {}}> Fetch more</button>
      <section>
        <div className="UsersCardContainer">
          {state.data &&
            state.data.map((user: IUser, idx: number) => (
              <UserCard key={user.email + idx} user={user} />
            ))}
        </div>
        {state.isLoading && <li>Loading...</li>}

        {!state.isLoading && state.more && (
          //@ts-ignore
          <div ref={setElement} style={{ background: 'transparent' }}></div>
        )}
      </section>

      {/*isLoading && <p>Loading...</p>*/}
    </>
  );
};

export default Home;
