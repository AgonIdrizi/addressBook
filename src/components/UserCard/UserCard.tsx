import React from 'react';
import UserInfoField from './UserInfoField';
import { IUser } from '../../types/user.types';
import './UserCard.scss';

const UserCard: React.FC<IUser | any> = ({ user }) => {
  const onShowMoreHandler = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="UserCard">
      <div className="UserPicture">
        <img src={user.picture.thumbnail} alt="user-photo" />
      </div>
      <div className="UserInfo">
        <UserInfoField field="First name:" text={user.name.first} />
        <UserInfoField field="Last name:" text={user.name.last} />
        <UserInfoField field="Username:" text={user.login.username} />
        <UserInfoField field="Email:" text={user.email} />
      </div>
      <div className="ShowMore">
        <a
          onClick={(e) => onShowMoreHandler(e)}
          href="#"
          role="button"
          aria-label="Show modal"
        >
          Show more
        </a>
      </div>
    </div>
  );
};

export default UserCard;
