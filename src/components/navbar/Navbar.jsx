import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom';

const Menu = () => (
  <>
    <p><Link to="/">HOME</Link></p>
    <p><Link to="/about">ABOUT</Link></p>
    <p><Link to="/apps">APPS</Link></p>
    <p><Link to="/contact">CONTACT</Link></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className = "gpt3__navbar">
      <div className = "gpt3__navbar-links_logo">
         <img src={logo} alt = "logo"></img>
         <p className="gpt3__logo-text">HEARTH</p>
      </div>
        <div className = "gpt3__navbar-links">      
            <div className="gpt3__navbar-links_container">
              <Menu/>
            </div>
        </div>
        <div className='gpt3__navbar-login'>
          <p>Log in</p>
          <button type = "button">Sign Up</button>
        </div>
        <div className = "gpt3__navbar-menu">
          {toggleMenu
          ? <RiCloseLine color = "#fff" size = {27} onClick = {() => setToggleMenu(false)}/>
          : <RiMenu3Line color = "#fff" size = {27} onClick = {() => setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
<Menu/>
<div className='gpt3__navbar-menu_container-links-login'>
          <p>Log in</p>
          <button type = "button">Sign Up</button>
        </div>
            </div>
          </div>
        )}
        </div>
        </div>
  )
}

export default Navbar;