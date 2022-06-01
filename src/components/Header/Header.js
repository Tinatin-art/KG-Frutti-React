import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return <header>
                <ul className="header__contacts">
                    <li>
                        <a href="tel:+996705160622" className='header__contacts-link phone'>+996705160622</a>
                    </li>
                    <li>
                        <a href="mailto:omurovatinatin@gmail.com" className='header__contacts-link mail'>omurovatinatin@gmail.com</a>
                    </li>
                    <li>
                        <Link to="/account" className="header__contacts-link acc">Account</Link>
                    </li>
                </ul>
                <div className="header__menu">
                    <div className="header__logo">
                        <span>F</span>
                        <h2 className="header__logo-name">Frutti</h2>
                    </div>
                    <ul className="menu">
                        <li className="menu__item"><Link to="/" className="menu__item-links">Home</Link></li>
                        <li className="menu__item"><Link to="/" className="menu__item-links">About me</Link></li>
                        <li className="menu__item"><Link to="/" className="menu__item-links">Contact</Link></li>
                    </ul>
                </div>
        </header>
}

export default Header;
