import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/home_logo.png'
import england from '../../assets/england.png'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Menu = () => (
  <>
    <p><NavLink to="/" exact activeClassName="selected">HOME</NavLink></p>
    <p><NavLink to="/about" activeClassName="selected">ABOUT</NavLink></p>
    <p><NavLink to="/apps" activeClassName="selected">APPS</NavLink></p>
    <p><NavLink to="/team" activeClassName="selected">TEAM</NavLink></p>
    <p><NavLink to="/community" activeClassName="selected">COMMUNITY</NavLink></p>
  </>
);

const languageOptions = [ 
  {
    id: "en",
    name: "English",
    flagimg: england,
  },
  {
    id: "jp",
    name: "Japanese",
    flagimg: england,
  },
  {
    id: "kr",
    name: "Korean",
    flagimg: england,
  },
];
const defaultLangFlag = <img src={languageOptions[0].flagimg} height="30" width="30" alt="nope" />;


const Navbar = () => {

  //translation
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/test');
  };
  const handleBlogClick = () => {
    navigate('/blog');
  };
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className = "navbar">
      <div className = "navbar-links_logo">
         <img src={logo} width={46} height={72} alt = "logo"></img>
      </div>
        <div className = "navbar-links">      
            <div className="navbar-links_container">
              <Menu/>
            </div>
        </div>
        <div className='navbar-lang'>
        {/* Search dropdown language for later adjustments */}
        <select onChange={handleChangeLanguage}>
          <option value="en" className="english">English</option>
          <option value="ja" className="japanese">Japanese</option>
          <option value="ko" className="korean">Korean</option>
        </select>

          <p onClick={handleBlogClick}>BLOG</p>
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