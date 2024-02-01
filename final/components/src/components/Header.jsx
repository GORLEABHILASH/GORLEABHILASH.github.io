import GlobalNav from './GlobalNav';
import './Header.css';
import Home from './Home'
import About from './About'
import MainArea from './MainArea'; 
import { useState } from 'react';

import Button  from './Button';

function Header({ go,onButtonClick}) {

   
    return (
      
    <header className="header">
       
       <a href="#main" className="skip-to-content-link">Skip to main content</a>
       <Button type="button" visual="link" card="no" onClick={onButtonClick} url="http://abhilashportfolio.s3-website-us-east-1.amazonaws.com/">  <h1 className="header__title">
         Abhilash
        </h1></Button>
       

      
    <GlobalNav go={go}  className="header__nav"  />
       
    </header>
   
     
    
    );
}

export default Header;