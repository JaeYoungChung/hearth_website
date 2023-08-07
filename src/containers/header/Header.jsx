import React from 'react';
import './header.css';
import home_flame from '../../assets/home_flame.png'
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_twitter from '../../assets/icon_twitter.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/test');
  };

  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>H E A R T H</h1>
        <p>Here to Help</p> 
        <div className='gpt3__header-content__input'>
        <button type="button" onClick={handleButtonClick}>Take Test</button>
        </div>
        <div className = "gpt3__header-image">
         <img src = {home_flame} alt="home_flame"/>
        </div>
        <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__icons">
        <img src = {icon_instagram} className="gpt3__icon"/>
        <img src = {icon_facebook} className="gpt3__icon"/>
        <img src = {icon_twitter} className="gpt3__icon"/>
      </div>
</div>
      </div>
    </div>
  )
}

export default Header