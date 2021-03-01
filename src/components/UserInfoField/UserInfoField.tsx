import React from 'react';
import { UserInfoFieldProps } from '../UserCard/UserCard.types';
import './UserInfoField.scss';

const UserInfoField: React.FunctionComponent<UserInfoFieldProps> = ({
  field,
  text
}) => {
  return (
    <p className="UserInfoField">
      <span className="Light">{field} </span>
      {text}
    </p>
  );
};

export default UserInfoField;
