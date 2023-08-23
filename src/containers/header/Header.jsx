import React from 'react';
import './header.css';
import home_flame from '../../assets/home_flame.png'
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_twitter from '../../assets/icon_twitter.png'
import email from '../../assets/email.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/test');
  };

  return (
    <div className='header section__padding' id='home'>
      <div className='header-content'>
        <h1 className='gradient__text'>H E A R T H</h1>
        <p>Here to Help</p> 
        <div className='header-content__input'>
        <button type="button" onClick={handleButtonClick}>Take Test</button>
        </div>
        <div className='header section__padding' id='home'>
      <div className="icons">
        <img src = {icon_instagram} className="icon"/>
        <img src = {icon_facebook} className="icon"/>
        <img src = {icon_twitter} className="icon"/>
      </div>
      <div className='email'>
       <img src = {email} className="email_img"/>
      </div>
</div>
      </div>
    </div>
  )
}

export default Header