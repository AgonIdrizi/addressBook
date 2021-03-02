import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Settings from '../../screens/Settings/Settings';

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

describe('<Settings />', () => {
  it('renders all radio inputs with defaults ', () => {
    render(<Settings />);

    const arrayOfRadioInputs = screen.getAllByRole(
      'radio'
    ) as HTMLInputElement[];

    const checkedItem = arrayOfRadioInputs.filter((el) => el.checked);

    expect(checkedItem.length).toEqual(0);
  });

  it('selects radio input when clicked', () => {
    render(<Settings />);

    const arrayOfRadioInputs = screen.getAllByRole(
      'radio'
    ) as HTMLInputElement[];

    const checkedItem = arrayOfRadioInputs.filter((el) => el.checked);

    expect(checkedItem.length).toEqual(0);
    fireEvent.click(arrayOfRadioInputs[0]);

    expect(arrayOfRadioInputs[0].checked).toEqual(true);
  });

  it('should select radio base on value in localStorage', () => {
    window.localStorage.setItem('nationality', 'CH');
    render(<Settings />);

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(2);

    const arrayOfRadioInputs = screen.getAllByRole(
      'radio'
    ) as HTMLInputElement[];

    fireEvent.click(arrayOfRadioInputs[0]);

    const checkedItem = arrayOfRadioInputs.filter((el) => el.checked);

    expect(checkedItem.length).toEqual(1);
    expect(checkedItem[0].value).toEqual('CH');
  });
});
