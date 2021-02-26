import React from 'react';
import UserInfoField from './UserInfoField';
import './UserCard.scss';

const UserCard: React.FunctionComponent = (): JSX.Element => {
  const onShowMoreHandler = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="UserCard">
      <div className="UserPicture">
        <img
          src="https://randomuser.me/api/portraits/med/men/75.jpg"
          alt="user-photo"
        />
      </div>
      <div className="UserInfo">
        <UserInfoField field="First name:" text="Agon" />
        <UserInfoField field="Last name:" text="Idrizi" />
        <UserInfoField field="Username:" text="Aggon88" />
        <UserInfoField field="Email:" text="agon@agon.com" />
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
