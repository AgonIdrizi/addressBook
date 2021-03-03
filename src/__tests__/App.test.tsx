import React from 'react';
import fetchMock from 'jest-fetch-mock';
import {
  render,
  screen,
  waitFor,
  FindAllBy,
  findAllByTestId,
  fireEvent,
  act,
  customProviderStoreWithError,
  getAllByRole
} from './test-utils/test-utils';
import 'intersection-observer';
import userEvent from '@testing-library/user-event';
import { usersMockData } from './test-utils/mockData';
import Routes from '../components/Routes/Routes';
import { IHttpUsersResponse } from '../types/user.types';

describe('<App />', () => {
  it('renders', () => {
    render(<Routes />, { customStore: false });
    const usersCardContainer = document.querySelector(
      '.UsersCardContainer'
    ) as HTMLElement;
    const interSectingDiv = document.querySelector(
      '.IntersectingDiv'
    ) as HTMLElement;

    expect(usersCardContainer).toBeInTheDocument();
    expect(interSectingDiv).toBeInTheDocument();
  });

  it('renders cards when scrolling', async () => {
    fetchMock.mockResolvedValueOnce(usersMockData);
    render(<Routes />, { customStore: false });
    const usersCardContainer = document.querySelector(
      '.UsersCardContainer'
    ) as HTMLElement;
    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 400 } });
    });

    await waitFor(() => {
      expect(usersCardContainer.childElementCount).toEqual(50);
    });

    await waitFor(() => {
      act(() => {
        fireEvent.scroll(window, { target: { scrollY: 600 } });
      });
    });
    await waitFor(() => {
      expect(usersCardContainer.childElementCount).toEqual(50);
    });
  });
  it('shows error message when request fails', async () => {
    const { container } = render(<Routes />, {
      customStore: true,
      state: customProviderStoreWithError
    });

    await waitFor(() => {
      act(() => {
        fireEvent.scroll(window, { target: { scrollY: 600 } });
      });
    });

    await waitFor(() => {
      const errorDiv = document.querySelector('.ErrorMessage');
      expect(errorDiv).toBeInTheDocument();
    });
  });
  it('navigates to settings', async () => {
    const { container, getByText, getAllByRole } = render(<Routes />, {
      customStore: true,
      state: customProviderStoreWithError
    });

    await waitFor(() => {
      act(() => {
        expect(getByText(/Settings/i)).toBeInTheDocument();
        userEvent.click(getByText(/Settings/i));
      });
    });
    await waitFor(() => {
      act(() => {
        expect(getAllByRole('radio').length).toEqual(4);
      });
    });
  });
});
