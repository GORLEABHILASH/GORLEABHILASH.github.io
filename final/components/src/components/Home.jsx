import React from 'react';
import './Home.css';


import Modal from './Modal';
import Button from './Button';

function Home({ onButtonClick }) {
 
  return (
    <div className="bgimage" id="home">
      
            <div className="hero-text">
                <h2 className="hero_title">Hi, it's me Abhilsah</h2>
                <p className="hero_desc">I am a Software Developer in Boston</p>
            </div>
       
    </div>
  );
}

export default Home;
