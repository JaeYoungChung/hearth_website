import React from 'react';
import './team.css';
import { Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import white_logo from '../../assets/whitelogo.png'
import blue_logo from '../../assets/bluelogo.png'
import green_logo from '../../assets/greenlogo.png'
import red_logo from '../../assets/redlogo.png'
import yellow_logo from '../../assets/yellowlogo.png' 
import { useSwipeable } from 'react-swipeable';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const Team = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t, i18n } = useTranslation("global");

  const pages = [<Page1 t={t}/>, <Page2 t={t}/>, <Page3 t={t}/>, <Page4 t={t}/>, <Page5 t={t}/>];

  const handlePageChange = (newPage) => {
    if (newPage !== currentPage && !isTransitioning && newPage >= 0 && newPage < pages.length) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(newPage);
        setIsTransitioning(false);
      }, 300); // This should match the transition duration in CSS
    }
  };

  const handleSwipe = (direction) => {
    if (direction === 'Left' && currentPage < pages.length - 1) {
      handlePageChange(currentPage + 1);
    } else if (direction === 'Right' && currentPage > 0) {
      handlePageChange(currentPage - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('Left'),
    onSwipedRight: () => handleSwipe('Right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        handlePageChange(currentPage - 1);
      } else if (event.key === 'ArrowRight') {
        handlePageChange(currentPage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]); // Re-run effect when currentPage changes

  return (
    <div className="team" {...swipeHandlers}>
      <div className={`t-page ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        {pages[currentPage]}
      </div>
      <div className="t-page-indicators">
        {pages.map((_, index) => (
          <span 
            key={index} 
            className={`t-indicator ${index === currentPage ? 'active' : ''}`} 
            onClick={() => handlePageChange(index)}
          ></span>
        ))}
      </div>
    </div>
  );  
};

  const Page1 = ({ t }) => (
    <div className='t-page1' 
    style={{
      display: 'flex',
      height: '110vh',
      backgroundImage: `url(${white_logo})`,
      backgroundSize: '90%',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="t-text-content1" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left'}}>
        <p className="t-title1">Team</p>
        <p className="t-subtitle1">HEARTH</p><br/>
        <div className="t-paragraph1">
            <p>{t("team.line1")}{t("team.line2")}{t("team.line3")}{t("team.line4")}</p><br/>
            <em>{t("team.line5")}</em><br/><br></br>
            <p>{t("team.line6")}</p>
            <p>{t("team.line7")}{t("team.line8")}</p><br/>
            <p>{t("team.line9")}<em>{t("team.line10")}</em></p>
        </div>
      </div>
    </div>
  );
 
  const Page2 = ({ t }) => (
    <div className='t-page2' 
        style={{ display: 'flex',
                height: '110vh', 
                backgroundImage: `url(${yellow_logo})`,
                backgroundSize: '90%',
                backgroundRepeat: 'no-repeat',     
                }}>
      <div className="t-text-content2" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left', marginLeft: 'auto',}}>
        <p className="t-title2">K</p>
        <p className="t-subtitle2">Director</p><br/>
        <div className="t-paragraph2">
            <p>{t("team.p2_line1")}</p>
            <p>{t("team.p2_line2")}</p><br/>
            <p>{t("team.p2_line3")}</p>
            <p>{t("team.p2_line4")}</p>
            <p>{t("team.p2_line5")}</p>
        </div>
      </div>
    </div>
  );
    
  const Page3 = ({ t }) => (
    <div className='t-page2' 
        style={{ display: 'flex',
                height: '110vh', 
                backgroundImage: `url(${red_logo})`,
                backgroundSize: '90%',
                backgroundRepeat: 'no-repeat',     
                }}>
      <div className="t-text-content2" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left', marginLeft: 'auto',}}>
        <p className="t-title3">C</p>
        <p className="t-subtitle3">Visualizer</p><br/>
        <div className="t-paragraph2">
            <p>{t("team.p3_line1")}</p><br/>
            <p>{t("team.p3_line2")}</p>
            <p>{t("team.p3_line3")}</p>
            <p>{t("team.p3_line4")}</p>
        </div>
      </div>
    </div>
  );
  const Page4 = ({ t }) => (
    <div className='t-page2' 
        style={{ display: 'flex',
                height: '110vh', 
                backgroundImage: `url(${green_logo})`,
                backgroundSize: '90%',
                backgroundRepeat: 'no-repeat',     
                }}>
      <div className="t-text-content2" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left', marginLeft: 'auto',}}>
        <p className="t-title4">H</p>
        <p className="t-subtitle4">Producer</p><br/>
        <div className="t-paragraph2">
            <p>{t("team.p4_line1")}</p>
            <p>{t("team.p4_line2")}</p><br/>
            <p>{t("team.p4_line3")}</p>
            <p>{t("team.p4_line4")}</p>
            <p>{t("team.p4_line5")}</p>
        </div>
      </div>
    </div>
  ); 
  const Page5 = ({ t }) => (
    <div className='t-page2' 
        style={{ display: 'flex',
                height: '110vh', 
                backgroundImage: `url(${blue_logo})`,
                backgroundSize: '90%',
                backgroundRepeat: 'no-repeat',    
                }}>
      <div className="t-text-content2" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left', marginLeft: 'auto',}}>
        <p className="t-title5">J</p>
        <p className="t-subtitle5">Operator</p><br/>
        <div className="t-paragraph2">
            <p>{t("team.p5_line1")}</p>
            <p>{t("team.p5_line2")}</p>
            <p>{t("team.p5_line3")}</p><br/>
            <p>{t("team.p5_line4")}</p>
            <p>{t("team.p5_line5")}</p>
            <p>{t("team.p5_line6")}</p>
        </div>
      </div>
    </div>
  );  

export default Team;