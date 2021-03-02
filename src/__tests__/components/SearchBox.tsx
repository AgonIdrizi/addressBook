import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBox from '../../components/SearchBox/SearchBox';

describe('<SearchBox />', () => {
  it('renders with the value inputed by user', () => {
    const { getByLabelText } = render(
      <SearchBox onSearchHandler={() => jest.fn()} />
    );
    const input = getByLabelText('search') as HTMLInputElement;

    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'John' } });

    expect(input.value).toBe('John');
  });
});
