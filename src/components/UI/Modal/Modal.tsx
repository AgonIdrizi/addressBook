import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';
import './Modal.scss';

interface IModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<boolean>;
  modalContent: JSX.Element;
  headerText: string;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  showModal,
  setShowModal,
  headerText,
  modalContent
}) => {
  useEffect(() => {
    showModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const modal = (
    <React.Fragment>
      <div className="Backdrop" onClick={() => setShowModal(false)} />
      <FocusLock>
        <div
          aria-modal
          aria-labelledby={headerText}
          className="Wrapper"
          tabIndex={-1}
          role="dialog"
        >
          <div className="Modal">
            <div className="Header">
              <div className="HeaderText">{headerText}</div>
              <button
                className="CloseButton"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
            </div>
            <div className="Content">{modalContent}</div>
          </div>
        </div>
      </FocusLock>
    </React.Fragment>
  );

  return showModal ? ReactDOM.createPortal(modal, document.body) : null;
};

export { Modal };
