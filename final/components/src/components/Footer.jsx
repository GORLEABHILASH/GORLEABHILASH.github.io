import footermenu from '../footermenu';
import {useState} from 'react';
import './Footer.css';
import Button from './Button';

function Footer({onButtonClick}) {
   
    const list = footermenu.map( item => {
        return (
        
        <li className="footer-nav__item" key={item.name}>
            
            <Button type="button" visual="link" card="no" onClick={onButtonClick} url={item.path}> {item.name}</Button>
        </li>
        );
        });
    return (
        <footer className = "footer">
        <nav className={`footer-nav`}>
          
            <ul className={`footer-nav__list`}>{ list }</ul>
            
        </nav> 
        </footer>
    );
}

export default Footer;



