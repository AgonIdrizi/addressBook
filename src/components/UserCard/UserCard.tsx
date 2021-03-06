import React, { useState } from 'react';
import UserInfoField from '../UserInfoField/UserInfoField';
import { Modal } from '../UI/Modal/Modal';
import UserCardDialog from '../UserCardDialog/UserCardDialog';
import { IUser } from '../../types/user.types';
import './UserCard.scss';

interface IUserCardProps {
  user: IUser;
}

const UserCard: React.FunctionComponent<IUserCardProps> = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const onShowMoreHandler = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <div data-testid="user-card" className="UserCard">
        <div className="UserPicture">
          <img src={user.picture.thumbnail} alt="user-photo" />
        </div>
        <div className="UserInfoContainer">
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
            data-testid="show-more"
            aria-label="more"
          >
            Show more
          </a>
        </div>
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          modalContent={
            <UserCardDialog
              street={user.location.street.name}
              city={user.location.city}
              state={user.location.state}
              postcode={user.location.postcode}
              phone={user.phone}
              cell={user.cell}
            />
          }
          headerText="User Info"
        />
      )}
    </>
  );
};

export default UserCard;
