import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/home_logo.png'
import england from '../../assets/england.png'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom'; // Import useLocation hook


const languageOptions = [ 
  {
    id: "en",
    name: "English",
    flagimg: england,
  },
  {
    id: "jp",
    name: "日本語",
    flagimg: england,
  },
  {
    id: "kr",
    name: "한국어",
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

  const location = useLocation(); // Use useLocation hook to get the current location object
  const shouldShowMenu = location.pathname !== '/blog' && location.pathname !== '/test';


  const Menu = () => (
    <>
      <p><Link to="header" spy={true} smooth={true} duration={300}>Home</Link></p>
      <p><Link to="about" spy={true} smooth={true} duration={300}>About</Link></p>
      <p><Link to="apps" spy={true} smooth={true} duration={300}>Apps</Link></p>
      <p><Link to="team" spy={true} smooth={true} duration={300}>Team</Link></p>
      <p><Link to="community" spy={true} smooth={true} duration={300}>Community</Link></p>
    
      {/* <p><NavLink to="/" exact activeClassName="selected">{t("navbar.home")}</NavLink></p>
      <p><NavLink to="/about" activeClassName="selected">{t("navbar.about")}</NavLink></p>
      <p><NavLink to="/apps" activeClassName="selected">{t("navbar.apps")}</NavLink></p>
      <p><NavLink to="/team" activeClassName="selected">{t("navbar.team")}</NavLink></p>
      <p><NavLink to="/community" activeClassName="selected">{t("navbar.community")}</NavLink></p> */}
    </>
  );

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
        <NavLink to='/'>
         <img src={logo} width={46} height={72} alt = "logo"></img>
        </NavLink>
      </div>
        {shouldShowMenu && (
          <div className = "navbar-links">      
              <div className="navbar-links_container">
                <Menu/>
              </div>
          </div>
        )}
        <div className='navbar-lang'>
        {/* Search dropdown language for later adjustments */}
        <select onChange={handleChangeLanguage}>
          <option value="en" className="english">English</option>
          <option value="ja" className="japanese">日本語</option>
          <option value="ko" className="korean">한국어</option>
        </select>
          <p onClick={handleBlogClick}>{t("navbar.blog")}</p>
          <button type="button" onClick={handleButtonClick}>{t("navbar.take_test")}</button>
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