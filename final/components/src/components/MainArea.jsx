import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function MainArea({ go,page}) {
   
  return (
    <div className="main-area">
     
        <>
          {page === 'Home' && <Home onButtonClick={(e) => go(e, 'About')} />}
          {page === 'About' && <About />}
          {page === 'Services' && <Services />}
          {page === 'Contact' && <Contact/>}

        </>
  
    </div>
  );
}

export default MainArea;
