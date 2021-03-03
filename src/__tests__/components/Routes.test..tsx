import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import 'intersection-observer';
import Container from '../../components/Container/Container';
import Routes from '../../components/Routes/Routes';
import userEvent from '@testing-library/user-event';

describe('<Routes />', () => {
  it('changes route', () => {
    const history: any = createMemoryHistory();

    history.push = jest.fn();

    const { getByText } = render(
      <Router history={history}>
        <Container>
          <Routes />
        </Container>
      </Router>
    );
    expect(getByText(/Settings/i)).toBeInTheDocument();
    userEvent.click(getByText(/Settings/i));
    expect(history.push).toHaveBeenCalledWith('/settings');
  });
});
