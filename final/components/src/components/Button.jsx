// Button.js
import React, { useState } from 'react';
import './Button.css';

const Button = ({ type = 'button', visual = 'button', card ='no', onClick, url, children }) => {
 

  const handleButtonClick = () => {
    // Open the specified URL when the button is clicked
    if (url) {
      window.open(url, '_blank');
    }

    // Call the original onClick handler if provided
    if (onClick) {
      onClick();
    }
  };



  return (
    <button
      type={type}
      onClick={handleButtonClick}
      className={`custom-button ${visual} ${type} ${card}`}
     
    >
      {children}
    </button>
  );
};

export default Button;
