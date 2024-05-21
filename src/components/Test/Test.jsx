import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../../assets/test_logo.png'
import white_logo from '../../assets/whitelogo.png'
import england_flag from '../../assets/england.png';
import korea_flag from '../../assets/korea.png';
import japan_flag from '../../assets/japan.png';
import './test.css';
import { useTranslation } from 'react-i18next';
import navbar_menu from '../../assets/navbar_menu.png'
import close_btn from '../../assets/close_btn.png'
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_x from '../../assets/icon_x.png'
import email from '../../assets/email.png'

const Test = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadedOut, setFadedOut] = useState(false);
  const [brighter, setBrighter] = useState(false);
  const [brightness, setBrightness] = useState(1.0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    //language
    const [t, i18n] = useTranslation("global");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');
  
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
        case 'ja':
          return '日本語';
        case 'ko':
          return '한국어';
        default:
          return 'ENG';
      }
    }
    
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
 
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/test');
  };

  const handleBlogClick = () => {
    navigate('/blog');
  };

  const handleButtonClick2 = () => {
    setShowContent(true);
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    sessionStorage.setItem('selectedLetter', letter);
  };

  const handleNextClick = () => {
    setShowAnimation(true);
    setAnimationStage(1);
    setTimeout(() => {
      setAnimationStage(2);
    }, 1000);
    setTimeout(() => {
      setAnimationStage(3);
    }, 3000);
    setTimeout(() => {
      setAnimationStage(4);
    }, 4000);
  };

  const handleTextButtonClick = () => {
    setBrighter(true);
    setFadeOut(true);
    setTimeout(()=> {
      setFadedOut(true);
    }, 1500);
    setTimeout(() => {
      navigate('/questions');
    }, 3000);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
 <div className='test-page'>
      <div className = "t-navbar">
          <div className = "t-navbar-links_logo">
            <NavLink to='/'>
            <img src={logo} height={80} alt = "logo"></img>
            </NavLink>
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
          <NavLink to='/'><p className='mobile-blog-click'>HOME</p></NavLink>
            <p className='mobile-blog-click' onClick={handleBlogClick}>{t("navbar.blog")}</p>
            <button type="button" className='m-nav-button' onClick={handleButtonClick}>{t("navbar.take_test")}</button>
            <div className="m-navbar-icons">
              <img src = {icon_instagram} className="m-navbar-icon"/>
              <img src = {icon_facebook} className="m-navbar-icon"/>
              <img src = {icon_x} className="m-navbar-icon"/>
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
                  <div className="q-dropdown-toggle" onClick={toggleDropdown}>
                    <p >Language: {getSelectedFlagText()}</p>
                    <i className="dropdown-arrow"></i>
                  </div>
                  {isOpen && (
                    <ul className="dropdown-menu">
                      <li onClick={() => handleChangeLanguage('en')}>
                        <span>English</span>
                      </li>
                      <li onClick={() => handleChangeLanguage('ja')}>
                        <span>日本語</span>
                      </li>
                      <li onClick={() => handleChangeLanguage('ko')}>
                        <span>한국어</span>
                      </li>
                    </ul>
                  )}
            </div>
          </div>
        </div>
      )}
          <div className='t-navbar-lang'>
          <div className="q-dropdown">
                  <div className="q-dropdown-toggle" onClick={toggleDropdown}>
                    <img src={getSelectedFlagImage()} alt="Selected Language" className="flag-image" />
                    <i className="q-dropdown-arrow"></i>
                  </div>
                  {isOpen && (
                    <ul className="q-dropdown-menu">
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
            <p className='blog-click' onClick={handleBlogClick}>{t("navbar.blog")}</p>
            <button type="button" className='nav-button' onClick={handleButtonClick}>{t("navbar.take_test")}</button>
          </div>
        </div>

    <div className={"centered-container"}>
      {!showContent ? (
        <>
          <img src={logo} alt='logo' />
          <p>HEARTH</p>
          <div className='second-text'>T E S T</div>
          <button type="button" className='test-button' onClick={handleButtonClick2}>{t("test.start")}</button>
        </>
      ) : (
        <div className='fade-in'>
          {!showAnimation ? (
            <>
              <div className='centered-content' >
                <img src={logo} alt='logo' className={fadeOut ? 'fade-image' : ''}/>
                <div className='text-overlay'>Who are you?</div>
                <input type="text" className='test-input' value={selectedLetter} readOnly />
              </div>
              <div className="alphabet-container">
                <div className='alphabet-row'>
                  {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter) => (
                    <button
                      key={letter}
                      onClick={() => handleLetterClick(letter)}
                      className={selectedLetter === letter ? 'active' : ''}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </div>
              {selectedLetter && (
                <div className='next-button' onClick={handleNextClick}>
                  Next <span className='arrow-icon'>&gt;</span>
                </div>
              )}
            </>
          ) : (            
              <div className='t-animation-container'>
                  <img src={white_logo} alt='whitelogo' className={`fade-image-in ${brighter ? 'brighter' : 'show'} ${fadedOut ? 'fadedOut' : ''}`}></img>
                  <div className={`t-animation-content ${fadeOut ? 'fade-out' : ''}`}>
                    {animationStage >= 1 && (
                    <div className={`t-animation-text ${animationStage >= 2 ? 'move-up' : ''} ${fadeOut ? 'fade-out' : ''}`}>
                      Hello, {selectedLetter}
                    </div>
                    )}
                    {animationStage >= 2 && (
                    <div className={`t-animation-text ${animationStage >= 3 ? 'move-up' : ''} ${fadeOut ? 'fade-out' : ''}`}>
                      Welcome to the HEARTH Test.
                    </div>
                    )}
                    {animationStage >= 3 && (
                    <div className={`t-animation-paragraph ${fadeOut ? 'fade-out' : ''}`}>This test is designed to measure your <span className='italic'>Cognitive Force,</span> the flame that burns within you.<br></br><br className='break-line'></br>
                      Before taking the test, bring yourself to a calm state of mind to effectively assess and rediscover your true colors. <br className='break-line'></br><br className='break-line'></br>
                      Choose from five scales according to the degree of your personal affiliation to each sentence. </div>
                    )}
                    {animationStage === 4 && (
                    <button className='start-test-btn' onClick={handleTextButtonClick}>Proceed to Test</button>
                    )}
                  </div> 
              </div>
          )}
        </div>
      )}
    </div>
</div>
  )
} 

export default Test