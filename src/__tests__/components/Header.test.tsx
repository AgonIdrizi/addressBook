import React from 'react';
import { render, screen, cleanup, act } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';

const history = createMemoryHistory();
history.push('/');

afterEach(cleanup);

const component = (
  <Router history={history}>
    <Header />
  </Router>
);

describe('<Header />', () => {
  it('renders settings nav link when in home page', () => {
    render(component);
    const settingNavLink = screen.getByText(/Settings/);

    expect(settingNavLink).toBeInTheDocument();
  });

  it('renders back-home nav link when in settings-page', async () => {
    history.push('/settings');
    render(component);

    const backHomeNavLink = screen.getByText(/Back Home/);

    expect(backHomeNavLink).toBeInTheDocument();
  });
});
