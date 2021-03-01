import React, { useReducer } from 'react';
import { usersReducer } from '../reducers/usersReducer';
import { UsersActionType } from '../reducers/usersReducer.types';
import { IHttpUsersResponse, UsersStateType } from '../types/user.types';
import { client } from '../utils/api-client';

const nationality = JSON.parse(
  window.localStorage.getItem('nationality') as string
);

const initialState: UsersStateType = {
  data: [],
  isError: false,
  isLoading: false,
  page: 1,
  maxPage: 20,
  more: true,
  nationality: nationality
};

type UsersContextType = {
  state: UsersStateType;
  dispatch: React.Dispatch<UsersActionType>;
  fetchUsers: () => Promise<void> | null;
};

const UsersContext = React.createContext<UsersContextType>({
  state: initialState,
  dispatch: () => null,
  fetchUsers: () => null
});
UsersContext.displayName = 'UsersContext';

const UsersProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const fetchUsers = async (): Promise<void> => {
    const natParam =
      state.nationality == null ? '' : `&nat=${state.nationality}`;

    dispatch({ type: 'FETCH_INIT' });
    try {
      const { info, results }: IHttpUsersResponse = await client(
        `?page=${state.page}${natParam}&results=50`
      );
      if (info.page == state.maxPage) {
        return dispatch({ type: 'REACHED_END', value: results });
      }
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

function useUsersContext(): UsersContextType {
  const context = React.useContext(UsersContext);
  if (context === undefined)
    throw new Error('useUsersContext must be inside a Provider with a value');

  return context;
}

export { UsersProvider, useUsersContext };
