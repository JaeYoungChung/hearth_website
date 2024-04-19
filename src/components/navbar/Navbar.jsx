import React, {useState, useRef, useEffect} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/home_logo.png'
import england_flag from '../../assets/england.png';
import korea_flag from '../../assets/korea.png';
import japan_flag from '../../assets/japan.png';import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom'


const Navbar = () => {

  //language
  const [t, i18n] = useTranslation("global");
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  const getSelectedFlagImage = () => {
    switch (selectedLanguage) {
      case 'en':
        return england_flag;
      case 'ja':
        return japan_flag;
      case 'ko':
        return korea_flag;
      default:
        return england_flag;
    }
  }
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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

      <div className="navbar-menu">
        {isOpen ? (
          <RiCloseLine onClick={() => setIsOpen(false)} size={30} />
        ) : (
          <RiMenu3Line onClick={() => setIsOpen(true)} size={30}/>
        )}
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
        <div className="dropdown">
                  <div className="dropdown-toggle" onClick={toggleDropdown}>
                    <img src={getSelectedFlagImage()} alt="Selected Language" className="flag-image" />
                    <i className="dropdown-arrow"></i>
                  </div>
                  {isOpen && (
                    <ul className="dropdown-menu">
                      <li onClick={() => handleChangeLanguage('en')}>
                        <span>English</span>
                        <img src={england_flag} alt="English" className="flag-image" />
                      </li>
                      <li onClick={() => handleChangeLanguage('ja')}>
                        <span>日本語</span>
                        <img src={japan_flag} alt="Japanese" className="flag-image" />
                      </li>
                      <li onClick={() => handleChangeLanguage('ko')}>
                        <span>한국어</span>
                        <img src={korea_flag} alt="Korean" className="flag-image" />
                      </li>
                    </ul>
                  )}
                  </div>
          <p onClick={handleBlogClick}>{t("navbar.blog")}</p>
          <button type="button" className='nav-button' onClick={handleButtonClick}>{t("navbar.take_test")}</button>
        </div>
        </div>
  )
}

export default Navbar;