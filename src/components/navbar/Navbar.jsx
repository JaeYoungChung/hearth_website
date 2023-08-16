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
    <div className = "navbar">
      <div className = "navbar-links_logo">
         <img src={logo} alt = "logo"></img>
         <p className="logo-text">HEARTH</p>
      </div>
        <div className = "navbar-links">      
            <div className="navbar-links_container">
              <Menu/>
            </div>
        </div>
        <div className='navbar-login'>
          <p>Log in</p>
          <button type = "button">Sign Up</button>
        </div>
        <div className = "navbar-menu">
          {toggleMenu
          ? <RiCloseLine color = "#fff" size = {27} onClick = {() => setToggleMenu(false)}/>
          : <RiMenu3Line color = "#fff" size = {27} onClick = {() => setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
<Menu/>
<div className='navbar-menu_container-links-login'>
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