import React from 'react';
import './UserCard.scss';

const UserCard: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="UserCard">
      <div className="UserPicture">
        <img
          src="https://randomuser.me/api/portraits/med/men/75.jpg"
          alt="user-photo"
        />
      </div>
      <div className="UserInfo">
        <p>
          <span className="Light">First name: </span> Agon
        </p>
        <p>
          <span className="Light">Last name: </span> Idrizi
        </p>
        <p>
          <span className="Light">Username: </span> Aggon88
        </p>
        <p>
          <span className="Light">Email: </span> agon@agon.com
        </p>
      </div>
      <div className="ShowMore">
        <a href="#">Show more</a>
      </div>
    </div>
  );
};

export default UserCard;
