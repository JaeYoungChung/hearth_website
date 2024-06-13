import React, {useState, useRef, useEffect} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/home_logo.png'
import navbar_menu from '../../assets/navbar_menu.png'
import close_btn from '../../assets/close_btn.png'
import england_flag from '../../assets/england.png';
import korea_flag from '../../assets/korea.png';
import japan_flag from '../../assets/japan.png';
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_x from '../../assets/icon_x.png'
import icon_threads from '../../assets/icon_threads.png'
import email from '../../assets/email.png'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom'


const Navbar = () => {

  //language
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const getSelectedFlagText = () => {
    switch (selectedLanguage) {
      case 'en':
        return 'ENG';
      // case 'ja':
      //   return '日本語';
      case 'ko':
        return '한국어';
      default:
        return 'ENG';
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
    closeMobileMenu();
  };

  const Menu = () => (
    <>
      <li className='home-nav-item'>
        <p>
          <a
            href="#home"
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => handleClick('home')}
          >
            {t("navbar.home")}
          </a>
        </p>
      </li>
      <li className='home-nav-item'>
        <p>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleClick('about')}
          >
            {t("navbar.about")}
          </a>
        </p>
      </li>
      <li className='home-nav-item'>
        <p>
          <a
            href="#apps"
            className={activeSection === 'apps' ? 'active' : ''}
            onClick={() => handleClick('apps')}
          >
            {t("navbar.apps")}
          </a>
        </p>
      </li>
      <li className='home-nav-item'>
        <p>
          <a
            href="#team"
            className={activeSection === 'team' ? 'active' : ''}
            onClick={() => handleClick('team')}
          >
            {t("navbar.team")}
          </a>
        </p>
      </li>
      <li className='home-nav-item'>
        <p>
          <a
            href="#community"
            className={activeSection === 'community' ? 'active' : ''}
            onClick={() => handleClick('community')}
          >
            {t("navbar.community")}
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
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const handleCopyToClipboard = () => {
    const textToCopy = 'hearthisnear@gmail.com';

    // Copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopiedToClipboard(true);

        // Clear the message after 2 seconds
        setTimeout(() => {
          setCopiedToClipboard(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  };
 
  return (
    <div className = "navbar">
      <div className = "navbar-links_logo">
      <a href="#home">
        <img src={logo} width={46} height={72} alt="logo" />
      </a>
      </div>
      <div className="navbar-menu" onClick={toggleMobileMenu}>
        <img src={navbar_menu} width={30} alt = "logo"></img>
      </div>
      {isMobileMenuOpen && (
        <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'fade-in' : 'fade-out'}`}>
          <div className="navbar-mobile-menu_header">
            <div className="navbar-mobile-menu_close" onClick={toggleMobileMenu}>
              <img src={close_btn} alt = "close"></img>
            </div>
          </div>
          <div className="navbar-mobile-menu_content">
            <Menu/>
            <p className='home-mobile-blog-click' onClick={handleBlogClick}>{t("navbar.blog")}</p>
            <button type="button" className='h-m-nav-button' onClick={handleButtonClick}>{t("navbar.take_test")}</button>
            <div className="m-navbar-icons">
              <img src = {icon_instagram} className="m-navbar-icon"/>
              <img src = {icon_facebook} className="m-navbar-icon"/>
              <img src = {icon_x} className="m-navbar-icon"/>
              <img src = {icon_threads} className="m-navbar-icon"/>
              <img src={email}
                style={{ width: '40px', cursor: 'pointer' }}
                className="m-navbar-icon"
                onClick={handleCopyToClipboard}
                alt="Copy to Clipboard"
              />
              {copiedToClipboard && (
                <div style={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'green', color: 'white', padding: '5px 10px', borderRadius: '4px' }}>
                  Copied to Clipboard!
                </div>
              )}            
            </div>
            <div className="dropdown">
                  <div className="dropdown-toggle" onClick={toggleDropdown}>
                    <p >Language: {getSelectedFlagText()}</p>
                    <i className="dropdown-arrow"></i>
                  </div>
                  {isOpen && (
                   <ul className="dropdown-menu">
                      <li onClick={() => handleChangeLanguage('en')}>
                        <span>ENG</span>
                      </li>
                      {/* <li onClick={() => handleChangeLanguage('ja')}>
                        <span>日本語</span>
                      </li> */}
                      <li onClick={() => handleChangeLanguage('ko')}>
                        <span>한국어</span>
                      </li>
                    </ul>
                  )}
            </div>
          </div>
        </div>
      )}

      {shouldShowMenu && (
          <div className = "navbar-links">      
              <div className="navbar-links_container">
                <Menu/>
              </div>
          </div>
        )}

        <div className='navbar-lang'>
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
                      {/* <li onClick={() => handleChangeLanguage('ja')}>
                        <span>日本語</span>
                        <img src={japan_flag} alt="Japanese" className="flag-image" />
                      </li> */}
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