import React from 'react';
import { UserInfoFieldProps } from './UserCard.types';

const UserInfoField: React.FunctionComponent<UserInfoFieldProps> = ({
  field,
  text
}) => {
  return (
    <p>
      <span className="Light">{field} </span>
      {text}
    </p>
  );
};

export default UserInfoField;
