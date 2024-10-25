import React from 'react';
import {useState, useEffect, memo} from 'react';
import './header.css';
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_x from '../../assets/icon_x.png'
import icon_threads from '../../assets/icon_threads.png'
import email from '../../assets/email.png'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Header = memo(() => {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  // Preload images
  useEffect(() => {
    const images = [icon_instagram, icon_facebook, icon_x, icon_threads, email];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Optimize animations
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      backgroundColor: 'white', 
      color: 'black' 
    },
    glow: {
      boxShadow: [
        '0px 0px 0px rgba(255,255,255,0)',
        '0px 0px 20px rgba(255,255,255,0.5)',
        '0px 0px 0px rgba(255,255,255,0)'
      ]
    }
  };

  return (
    <div className='header' id='home'>
      <div className='header-content'>
        {/* Priority LCP element */}
        <h1 className='home_title_text'>
          H E A R T H
        </h1>
        
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.4
                }
              }
            }}
          >
            {/* Other animated elements */}
            <motion.p 
              className='home_subtitle_text'
              variants={fadeInUpVariants}
              transition={{ duration: 1.5 }}
            >
              Here to Help
            </motion.p>

            <motion.div 
              className='header-content__input'
              variants={fadeInUpVariants}
              transition={{ duration: 1.5 }}
            >
              <motion.button 
                type="button" 
                className='take-test-btn' 
                onClick={() => navigate('/test')}
                variants={buttonVariants}
                whileHover="hover"
                animate="glow"
                transition={{ 
                  duration: 0.2,
                  glow: {
                    duration: 3,
                    repeat: 3,
                    repeatType: "reverse"
                  }
                }}
              >
                {t("header.take_test")}
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='header-side'>
        <nav className="h-icons">
          {[
            { href: 'https://www.instagram.com/hearth.ig/profilecard/?igsh=MXczeGlka2hkODg0NA==', src: icon_instagram, alt: 'instagram' },
            { href: 'https://www.facebook.com/profile.php?id=61563995550443&mibextid=LQQJ4d', src: icon_facebook, alt: 'facebook' },
            { href: 'https://x.com/hearthishere', src: icon_x, alt: 'twitter' },
            { href: 'https://www.threads.net/@hearth.ig', src: icon_threads, alt: 'threads' }
          ].map(({ href, src, alt }) => (
            <a key={alt} href={href}>
              <img src={src} className="h-icon" alt={alt} loading="lazy" />
            </a>
          ))}
        </nav>
        
        <div className='h-email'>
          <AnimatePresence>
            {isActive && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                style={{ color: 'white', marginRight: '10px' }}
              >
                hearthisnear@gmail.com
              </motion.span>
            )}
          </AnimatePresence>
          <img
            src={email}
            className="h-email_img"
            alt="email"
            onClick={() => setIsActive(!isActive)}
            style={{ opacity: isActive ? 0.5 : 1 }}
          />
        </div>
      </div>
    </div>
  );
});

export default Header;