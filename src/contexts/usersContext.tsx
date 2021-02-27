import React, { useContext } from 'react';
import { useUsersApi } from '../hooks/useUsersApi';

interface UsersContextInterface {
  users: [];
}

const UsersContext = React.createContext<any | null>(null);
UsersContext.displayName = 'UsersContext';

const UsersProvider: React.FunctionComponent = (
  props: React.PropsWithChildren<{}>
) => {
  const [state, setPage] = useUsersApi(1, []);
  return <UsersContext.Provider value={[state, setPage]} {...props} />;
};

function useUsersContext() {
  const context = React.useContext(UsersContext);
  if (context === undefined)
    throw new Error('useUsersContext must be inside a Provider with a value');
  return context;
}

export { UsersProvider, useUsersContext };
