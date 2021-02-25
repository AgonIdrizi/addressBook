import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.scss';

export const TYPES = {
  PRIMARY: 'primary'
};

const Button: React.FunctionComponent<ButtonProps> = ({
  buttonType,
  onClick,
  children
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`button ${buttonType ? buttonType : 'primary'}`}
    >
      {children}
    </button>
  );
};

export default Button;
