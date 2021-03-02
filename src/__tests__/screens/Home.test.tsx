import React from 'react';
import {
  screen,
  render,
  cleanup,
  fireEvent,
  act,
  waitFor
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import 'intersection-observer';
import { userMockData, usersMockData } from '../test-utils/mockData';
import { UsersProvider, UsersContext } from '../../contexts/usersContext';
import { UsersStateType } from '../../types/user.types';
import Home from '../../screens/Home/Home';
import Container from '../../components/Container/Container';

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

afterEach(cleanup);

const component = (
  <MemoryRouter>
    <UsersContext.Provider value={{ state, dispatch, fetchUsers }}>
      <Container>
        <Home />
      </Container>
    </UsersContext.Provider>
  </MemoryRouter>
);

describe('<Home />', () => {
  it('renders', () => {
    render(component);
    const usersCardContainer = document.querySelector('.UsersCardContainer');

    expect(usersCardContainer?.childElementCount).toEqual(10);
  });
  it('searches users based on first name + last name', async () => {
    render(component);

    const searchInput = document.querySelector('#search') as HTMLInputElement;

    userEvent.type(searchInput, 'Lind');
    await waitFor(() => {
      const filteredCards = document.querySelectorAll('.UserCard');
      expect(filteredCards?.length).toEqual(2);
    });
    userEvent.type(searchInput, 'yyyyyyy');
    await waitFor(() => {
      const filteredCards = document.querySelectorAll('.UserCard');
      expect(filteredCards.length).toEqual(0);
    });
  });
  it('opens modal on show more click', async () => {
    render(component);
    const aLink: HTMLElement | any = document.querySelector('.ShowMore');

    console.log(aLink);

    userEvent.click(aLink.firstElementChild);
    await waitFor(() => {
      const modalDiv = document.querySelector('.Modal') as HTMLElement;
      expect(modalDiv).toBeInTheDocument();
    });
  });
  it('renders intersectin-div at the bottom of user-cards', () => {});
});
