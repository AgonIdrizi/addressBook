import React, { FC } from 'react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { render as rtlRender } from '@testing-library/react';
import { userMockData, usersMockData } from './mockData';
import { UsersProvider, UsersContext } from '../../contexts/usersContext';
import { UsersStateType } from '../../types/user.types';
import Container from '../../components/Container/Container';
import Routes from '../../components/Routes/Routes';

const state: UsersStateType = {
  data: usersMockData.results,
  isError: false,
  isLoading: false,
  page: 1,
  maxPage: 20,
  more: true,
  nationality: ''
};
const dispatch = jest.fn();
const fetchUsers = jest.fn();

function render(ui: React.ReactElement, { customStore = false, ...options } = {}) {
  
  const ProvidersWithCustomStore: React.FunctionComponent = ({ children }) => (
    <MemoryRouter>
      <UsersContext.Provider value={{ state, dispatch, fetchUsers }}>
        <Container>{children}</Container>
      </UsersContext.Provider>
    </MemoryRouter>
  );
  const AllProviders :React.FunctionComponent = ({children}) => (
    <BrowserRouter>
      <UsersProvider>
        <Container>
          <Routes />
        </Container>
      </UsersProvider>
    </BrowserRouter>
  )
  return rtlRender(ui, { wrapper: customStore ? ProvidersWithCustomStore: AllProviders, ...options });
}

export * from '@testing-library/react';

export { render };
