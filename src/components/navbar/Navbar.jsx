import React, {useState, useRef, useEffect} from 'react';
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
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleClick = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 1, delay: 0 });

  const Menu = () => (
    <>
      <li className='nav-item'>
        <p>
          <a
            href="#home"
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => handleClick('home')}
          >
            Home
          </a>
        </p>
      </li>
      <li className='nav-item'>
        <p>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleClick('about')}
          >
            About
          </a>
        </p>
      </li>
      <li className='nav-item'>
        <p>
          <a
            href="#apps"
            className={activeSection === 'apps' ? 'active' : ''}
            onClick={() => handleClick('apps')}
          >
            Apps
          </a>
        </p>
      </li>
      <li className='nav-item'>
        <p>
          <a
            href="#team"
            className={activeSection === 'team' ? 'active' : ''}
            onClick={() => handleClick('team')}
          >
            Team
          </a>
        </p>
      </li>
      <li className='nav-item'>
        <p>
          <a
            href="#community"
            className={activeSection === 'community' ? 'active' : ''}
            onClick={() => handleClick('community')}
          >
            Community
          </a>
        </p>
      </li>
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
          <button type="button" className='nav-button' onClick={handleButtonClick}>{t("navbar.take_test")}</button>
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