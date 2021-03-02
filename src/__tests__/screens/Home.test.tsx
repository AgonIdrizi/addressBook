import React from 'react';
import {
  screen,
  render,
  cleanup,
  fireEvent,
  act,
  waitFor
} from '../test-utils/test-utils';
import userEvent from '@testing-library/user-event';
import 'intersection-observer';
import Home from '../../screens/Home/Home';

afterEach(cleanup);

describe('<Home />', () => {
  it('renders', () => {
    render(<Home />, {customStore:true});
    const usersCardContainer = document.querySelector('.UsersCardContainer');

    expect(usersCardContainer?.childElementCount).toEqual(10);
  });
  it('searches users based on first name + last name', async () => {
    render(<Home />, {customStore:true});

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
    render(<Home />, {customStore:true});
    
    const aLink: HTMLElement | any = document.querySelector('.ShowMore');

    userEvent.click(aLink.firstElementChild);
    await waitFor(() => {
      const modalDiv = document.querySelector('.Modal') as HTMLElement;
      expect(modalDiv).toBeInTheDocument();
    });
  });
  it('renders intersecting-div', () => {
    render(<Home/>)
    const intersectingDiv = document.querySelector('.IntersectingDiv') as HTMLElement;
    expect(intersectingDiv).toBeInTheDocument();
  });
});
