import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useLocalStorageState } from '../../hooks/useLocalStorage';

const UseLocalStorageExample = () => {
  const [value, setValue] = useLocalStorageState('test', 'd');

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="newValue">New value</label>
      <input onChange={(e) => onHandleChange(e)} type="text" id="newValue" />

      <button type="submit">Submit</button>
    </div>
  );
};

afterEach(cleanup);

beforeEach(() => [
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null)
    },
    writable: true
  })
]);

describe('useLocalStorageState', () => {
  it('calls it with each input value', () => {
    window.localStorage.setItem('test', 'John');
    render(<UseLocalStorageExample />);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(2);
    const input = screen.getByLabelText('New value');

    userEvent.type(input, 'Moon');

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(6);
  });
});
