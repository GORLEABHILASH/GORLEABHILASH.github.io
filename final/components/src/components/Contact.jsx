import React, { useState } from 'react';
import './Contact.css';
import Modal from './Modal';

function Contact() {
  const [formData, setFormData] = useState({
    username: '', 
    email: '',
    confirmEmail: '',
    wantsSpam: false,
    sameUniversity: false,
    University: 'Northeastern University',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    confirmEmail: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (!formData.confirmEmail) {
      newErrors.confirmEmail = 'Confirm Email is required';
    } else if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = 'Email and Confirm Email should match';
    }

    setErrors(newErrors);

   
    if (Object.keys(newErrors).length === 0) {
      openModal();
    }
  };

  const handleSaveUsername = (newUsername) => {
    setFormData({
      ...formData,
      username: newUsername,
    });
  };

  return (
    <main  id="main" className="main">
      <div className='main__title'> <h2>Contact Me</h2></div>

      <form className="registar-form" action="/register" method="post" onSubmit={handleSubmit}>
        <label className="registar-form__message">* indicates required field</label>

        <span className="registar-form__error--name">{errors.username}</span>
        <label htmlFor="registar-form__input--name" className="registar-form__label registar-form__label--name">
          Name:<span className="registar-form__required">*</span>
        </label>
        <input
          type="text"
          className="registar-form__input registar-form__input--name"
          id="registar-form__input--name"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />

        <span className="registar-form__error--email">{errors.email}</span>
        <label htmlFor="registar-form__input--email" className="registar-form__label registar-form__label--email">
          Email:<span className="registar-form__required">*</span>
        </label>
        <input
          type="text"
          className="registar-form__input registar-form__input--email"
          id="registar-form__input--email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <span className="registar-form__error--confirm-email">{errors.confirmEmail}</span>
        <label
          htmlFor="registar-form__input--confirm-email"
          className="registar-form__label registar-form__label--confirm-email"
        >
          Confirm Email:<span className="registar-form__required">*</span>
        </label>
        <input
          type="text"
          className="registar-form__input registar-form__input--confirm-email"
          id="registar-form__input--confirm-email"
          name="confirmEmail"
          value={formData.confirmEmail}
          onChange={handleInputChange}
        />



        <input
          type="checkbox"
          className="registar-form__checkbox"
          id="registar-form__checkbox--billing-address"
          name="sameUniversity"
          checked={formData.sameUniversity}
          onChange={handleInputChange}
        />
        <label htmlFor="registar-form__checkbox--billing-address" className="registar-form__label--checkbox">
          Are you from Northeastern University?
        </label>

        {formData.sameUniversity && (
          <>
            <span className="registar-form__error--billing-address"></span>
            <label
              htmlFor="registar-form__input--billing-address"
              className="registar-form__label registar-form__label--billing-address"
            >
              University:
            </label>
            <input
              type="text"
              className="registar-form__input registar-form__input--billing-address"
              id="registar-form__input--billing-address"
              name="University"
              value={formData.University}
              onChange={handleInputChange}
              readOnly
            />
          </>
        )}

        <button type="submit" className="registar-form__button">
          Contact Me
        </button>
      </form>

      <Modal isOpen={isModalOpen} onClose={closeModal} onSave={handleSaveUsername} initialValue={formData.username} />
    </main>
  );
}

export default Contact;
