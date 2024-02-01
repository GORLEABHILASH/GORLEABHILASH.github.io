import menu from '../menu';
import { useState } from 'react';
import './GlobalNav.css';
import Button from './Button';
import './Button.css';

function GlobalNav({ className,go}) {
  const [navSubmenuOpen, setNavSubmenuOpen] = useState(false);

  const toggleNavSubmenu = () => {
    // Toggle the state value when the button is clicked
    setNavSubmenuOpen(!navSubmenuOpen);
  };
 

  return (
    <nav className={`global-nav ${className}`}>
       <button className="nav-menu__button" type="button" aria-label="Open Menu" onClick={toggleNavSubmenu}  >  <i className="gg-menu"></i>
    </button>
    <div>
      <ul className={`global-nav__list ${navSubmenuOpen ? 'open' : ''}`}>
        <li className='global-nav__item'>
        <a className='global-nav__link' href="" onClick={(e) => go(e, "Home")}>
            Home
          </a>
        </li>
        <li className='global-nav__item'>
          <a className='global-nav__link' href="" onClick={(e) => go(e, "About")}>
            About
          </a>
        </li>
        <li className='global-nav__item'>
          <a className='global-nav__link' href="" onClick={(e) => go(e, "Services")}>
            Services
          </a>
        </li>

        <li className='global-nav__item'>
          <a className='global-nav__link' href="" onClick={(e) => go(e, "Contact")}>
            Contact
          </a>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default GlobalNav;
