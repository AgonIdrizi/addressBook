import React, { useContext } from 'react';

interface UsersContextInterface {
  users: [];
}

const UsersContext = React.createContext<UsersContextInterface | null>(null);
UsersContext.displayName = 'UsersContext';

const UsersProvider: React.FunctionComponent = (
  props: React.PropsWithChildren<{}>
) => {
  return <UsersContext.Provider value={{ users: [] }} {...props} />;
};

function useUsers() {
  const context = React.useContext(UsersContext);
  if (context === undefined)
    throw new Error('useUsers must be inside a Provider with a value');
  return context;
}
