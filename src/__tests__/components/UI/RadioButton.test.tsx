import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import RadioButton from '../../../components/UI/RadioButton/RadioButton';

afterEach(cleanup);

describe('<RadioButton />', () => {
  it('renders based on props, changes value onChange', () => {
    render(
      <RadioButton
        id="r1"
        label="Radio1"
        value="ES"
        isSelected
        onRadioButtonHandler={jest.fn()}
      />
    );
    const radioInput = screen.getByRole('radio') as HTMLInputElement;

    expect(radioInput.checked).toBe(true);
  });

  it('changes value based on user input', () => {
    render(
      <RadioButton
        id="r1"
        label="Radio1"
        value="ES"
        isSelected
        onRadioButtonHandler={jest.fn()}
      />
    );
    const radioInput = screen.getByRole('radio') as HTMLInputElement;
    fireEvent.change(radioInput, { target: { value: 'second' } });
    expect(radioInput.value).toBe('second');
  });
});
