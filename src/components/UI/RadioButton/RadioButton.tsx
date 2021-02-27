import React from 'react';
import { RadioButtonProps } from './RadioButton.types';
import './RadioButton.scss';

const RadioButton: React.FunctionComponent<RadioButtonProps> = ({
  id,
  value,
  isSelected,
  label,
  onRadioButtonHandler
}) => {
  return (
    <div className="RadioButton">
      <input
        onChange={(e) => onRadioButtonHandler(e)}
        id={id}
        type="radio"
        name={id}
        checked={isSelected}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
