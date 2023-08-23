import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Menu = () => (
  <>
    <p><NavLink to="/" exact activeClassName="selected">HOME</NavLink></p>
    <p><NavLink to="/about" activeClassName="selected">ABOUT</NavLink></p>
    <p><NavLink to="/apps" activeClassName="selected">APPS</NavLink></p>
    <p><NavLink to="/team" activeClassName="selected">TEAM</NavLink></p>
    <p><NavLink to="/community" activeClassName="selected">COMMUNITY</NavLink></p>
  </>
);

const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/test');
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className = "navbar">
      <div className = "navbar-links_logo">
         <img src={logo} alt = "logo"></img>
      </div>
        <div className = "navbar-links">      
            <div className="navbar-links_container">
              <Menu/>
            </div>
        </div>
        <div className='navbar-login'>
          <select>
            <option value="english">English <span class="flag english"></span></option>
            <option value="japanese">Japanese <span class="flag japanese"></span></option>
            <option value="korean">Korean <span class="flag korean"></span></option>
          </select>
          <p>BLOG</p>
          <button type="button" onClick={handleButtonClick}>TAKE TEST</button>
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
            </div>
          </div>
        )}
        </div>
        </div>
  )
}

export default Navbar;