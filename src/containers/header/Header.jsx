import React from 'react';
import {useState, useEffect} from 'react';
import './header.css';
import home_flame from '../../assets/home_flame.png'
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_x from '../../assets/icon_x.png'
import icon_threads from '../../assets/icon_threads.png'
import email from '../../assets/email.png'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/test');
  };
  
  const [isActive, setIsActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Toggle the state on image click
  const handleImageClick = () => {
    setIsActive(!isActive);
  };

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
 
  return (
    <div className='header' id='home'>
    {/* <div className={`header-background ${isLoaded ? 'loaded' : ''}`}></div> */}
      <motion.div 
        className='header-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1 
          className='home_title_text'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          H E A R T H
        </motion.h1>
        <motion.p 
          className='home_subtitle_text'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Here to Help
        </motion.p>
        <motion.div 
          className='header-content__input'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.button 
            type="button" 
            className='take-test-btn' 
            onClick={handleButtonClick}
            whileHover={{ scale: 1.05, backgroundColor: '#0056b3' }}
            animate={{ 
              boxShadow: ['0px 0px 0px rgba(255,255,255,0)', '0px 0px 20px rgba(255,255,255,0.5)', '0px 0px 0px rgba(255,255,255,0)']
            }}
            transition={{ 
              boxShadow: {
                duration: 2,
                repeat: 3,
                repeatType: "reverse"
              }
            }}
          >
            {t("header.take_test")}
          </motion.button>
        </motion.div>
      </motion.div> 
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

// return (
//   <div className='header' id='home'>
//     <div className={`header-background ${isLoaded ? 'loaded' : ''}`}></div>
//     <div className='header-content'>
//       <h1 className='home_title_text'>
//         H E A R T H
//       </h1>
//       <p className='home_subtitle_text'>
//         Here to Help
//       </p>
//       <div className='header-content__input'>
//         <button 
//           type="button" 
//           className='take-test-btn' 
//           onClick={handleButtonClick}
//         >
//           {t("header.take_test")}
//         </button>
//       </div>
//     </div> 
//     <div className='header-side' id='home'>
//       <div className="h-icons">
//         <img src={icon_instagram} className="h-icon" alt="Instagram"/>
//         <img src={icon_facebook} className="h-icon" alt="Facebook"/>
//         <img src={icon_x} className="h-icon" alt="X"/>
//         <img src={icon_threads} className="h-icon" alt="Threads"/>
//       </div>
//       <div className='h-email'>
//         {isActive && <span style={{ color: 'white', marginRight: '10px' }}>hearthisnear@gmail.com</span>}
//         <img
//           src={email} 
//           className="h-email_img" 
//           style={{ opacity: isActive ? 0.5 : 1 }} 
//           onClick={handleImageClick} 
//           alt="Email"
//         /> 
//       </div> 
//     </div>
//   </div>
// )
// }

export default Header