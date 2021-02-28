import React, { useContext, useReducer } from 'react';
import { usersReducer } from '../reducers/usersReducer';
import { IHttpUsersResponse, IUser, UsersStateType } from '../types/user.types';
import { client } from '../utils/api-client';

const initialState: UsersStateType = {
  data: [],
  isError: false,
  isLoading: false,
  page: 1,
  maxPage: 20,
  more: true
};

type UsersContextType = {
  state: UsersStateType;
  dispatch: React.Dispatch<any>;
  fetchUsers: () => Promise<void> | null;
};

const UsersContext = React.createContext<UsersContextType>({
  state: initialState,
  dispatch: () => {},
  fetchUsers: () => Promise.resolve()
});
UsersContext.displayName = 'UsersContext';

const UsersProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const fetchUsers = async (): Promise<void> => {
    dispatch({ type: 'FETCH_INIT' });
    try {
      const { info, results }: IHttpUsersResponse = await client(`?page=${1}&results=50`);
      console.log(results);
      dispatch({ type: 'FETCH_SUCCESS', value: results });
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE' });
    }
  };

  return (
    <UsersContext.Provider value={{ state, dispatch, fetchUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

function useUsersContext() {
  const context = React.useContext(UsersContext);
  if (context === undefined)
    throw new Error('useUsersContext must be inside a Provider with a value');

  return context;
}

export { UsersProvider, useUsersContext };
