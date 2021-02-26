import React from 'react';
import { RadioButtonProps } from './RadioButton.types';
import './RadioButton.scss';

const RadioButton: React.FunctionComponent<RadioButtonProps> = ({
  id,
  value,
  onRadioButtonHandler
}) => {
  return (
    <div className="RadioButton">
      <input
        onChange={(e) => onRadioButtonHandler(e)}
        id={id}
        type="radio"
        name="radio"
        value={value}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default RadioButton;
