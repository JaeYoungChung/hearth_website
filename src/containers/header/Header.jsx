import React from 'react';
import {useState} from 'react';
import './header.css';
import home_flame from '../../assets/home_flame.png'
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_x from '../../assets/icon_x.png'
import icon_threads from '../../assets/icon_threads.png'
import email from '../../assets/email.png'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/test');
  };
 
  const [isActive, setIsActive] = useState(false);

  // Toggle the state on image click
  const handleImageClick = () => {
    setIsActive(!isActive);
  };

  return (  
    <div className='header' id='home'>
      <div className='header-content'>
        <h1 className='home_title_text'>H E A R T H</h1>
        <p className='home_subtitle_text'>Here to Help</p>
        <div className='header-content__input'>
          <button type="button" className='take-test-btn' onClick={handleButtonClick}>{t("header.take_test")}
          </button>
        </div>
      </div>  
      <div className='header-side' id='home'>
          <div className="h-icons">
            <img src = {icon_instagram} className="h-icon"/>
            <img src = {icon_facebook} className="h-icon"/>
            <img src = {icon_x} className="h-icon"/>
            <img src = {icon_threads} className="h-icon"/>
          </div>
          <div className='h-email'>
            {isActive && <span style={{ color: 'white', marginRight: '10px' }}>hearthisnear@gmail.com</span>}
            <img
              src={email} 
              className="h-email_img" 
              style={{ opacity: isActive ? 0.5 : 1 }} 
              onClick={handleImageClick} 
            /> 
          </div> 
        </div>
    </div>
  )
}

export default Header