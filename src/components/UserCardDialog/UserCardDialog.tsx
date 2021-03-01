import React from 'react';
import UserInfoField from '../UserInfoField/UserInfoField';
import './UserCardDialog.scss';

interface IUserCardDialogProps {
  street: number;
  city: string;
  state: string;
  postcode: number;
  phone: string;
  cell: string;
}

const UserCardDialog: React.FunctionComponent<IUserCardDialogProps> = ({
  street,
  city,
  state,
  postcode,
  phone,
  cell
}) => {
  return (
    <div className="UserCardDialog">
      <UserInfoField field="Street:" text={street} />
      <UserInfoField field="City:" text={city} />
      <UserInfoField field="State:" text={state} />
      <UserInfoField field="Postcode:" text={postcode} />
      <UserInfoField field="Phone:" text={phone} />
      <UserInfoField field="cell:" text={cell} />
    </div>
  );
};

export default UserCardDialog;
