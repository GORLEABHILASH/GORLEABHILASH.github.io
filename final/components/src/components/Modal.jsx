import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSave, initialValue }) => {
  const [username, setUsername] = useState(initialValue);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(username);
    onClose();
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="modal-backdrop" onClick={handleBackdropClick}></div>
          <dialog className="modal" open>
            <form className="modal__form" onSubmit={handleSubmit}>
              <label htmlFor="username" className="modal__label">
                Confirm Name:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                className="modal__input"
              />
              <div className='modal__button'>
                <button type="submit" className="modal__button modal__button--save">
                  Save
                </button>
                <button type="button" onClick={onClose} className="modal__button modal__button--cancel">
                  Cancel
                </button>
              </div>
            </form>
          </dialog>
        </>
      )}
    </>
  );
};

export default Modal;
