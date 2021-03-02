import React, { useState } from 'react';
import ErrorMessageWithButton from '../../components/ErrorMessageWithButton/ErrorMessageWithButton';
import SearchBox from '../../components/SearchBox/SearchBox';
import Spinner from '../../components/UI/Spinner/Spinner';
import UserCard from '../../components/UserCard/UserCard';

import { useUsersContext } from '../../contexts/usersContext';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { IUser } from '../../types/user.types';
import './Home.scss';

const Home: React.FunctionComponent = (): JSX.Element => {
  const { state, fetchUsers } = useUsersContext();
  const [isFiltering, setIsFiltering] = useState(false);
  const [setElement] = useInfiniteScroll(fetchUsers);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);

  const onSearchHandler = (value: string) => {
    if (value.length === 0) return setIsFiltering(false);
    if (value.length === 1) setIsFiltering(true);

    let newFilteredUsers = [];
    newFilteredUsers = state.data.filter((user) => {
      return (user.name.first + user.name.last).toLowerCase().includes(value);
    });
    setFilteredUsers(newFilteredUsers);
  };

  return (
    <>
      <SearchBox onSearchHandler={onSearchHandler} />
      <section aria-label="user cards">
        <div className="UsersCardContainer">
          {state.data &&
            !isFiltering &&
            state.data.map((user: IUser, idx: number) => (
              <UserCard key={user.email + idx} user={user} />
            ))}
          {isFiltering &&
            filteredUsers.map((user: IUser, idx: number) => (
              <UserCard key={user.email + idx} user={user} />
            ))}
        </div>

        {state.isLoading && <Spinner />}

        {state.isError && (
          <ErrorMessageWithButton
            fn={fetchUsers}
            message="There was an error, please try again by clicking"
          />
        )}

        {/*show the interesecting div, only when we are not filtering, not loading, not error, and we have more pages to fetch*/}
        {!isFiltering && !state.isLoading && !state.isError && state.more && (
          <div ref={setElement} className="IntersectingDiv" />
        )}
        {!state.more && <div>End of users catalog</div>}
      </section>
    </>
  );
};

export default Home;
