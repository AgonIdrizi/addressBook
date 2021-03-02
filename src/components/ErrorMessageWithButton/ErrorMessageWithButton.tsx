import React from 'react';
import Button, { TYPES } from '../UI/Button/Button';

interface IErrorMessageWithButtonProps {
  fn: () => Promise<void> | null;
  message: string;
}

const ErrorMessageWithButton: React.FunctionComponent<IErrorMessageWithButtonProps> = ({
  fn,
  message
}) => {
  return (
    <div>
      {message}{' '}
      <Button buttonType={TYPES.PRIMARY} onClick={() => fn()}>
        Retry
      </Button>
    </div>
  );
};

export default ErrorMessageWithButton;
