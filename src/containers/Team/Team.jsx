import React from 'react';
import './team.css';
import { Route } from 'react-router-dom';
import { useState } from "react";
import white_logo from '../../assets/whitelogo.png'
import blue_logo from '../../assets/bluelogo.png'
import green_logo from '../../assets/greenlogo.png'
import red_logo from '../../assets/redlogo.png'
import yellow_logo from '../../assets/yellowlogo.png' 
import { useSwipeable } from 'react-swipeable';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const Team = () => {
    const [currentPage, setCurrentPage] = useState(0);
  
    const pages = [<Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />];

    const handleSwipe = (direction) => {
      if (direction === 'Left' && currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
      } else if (direction === 'Right' && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => handleSwipe('Left'),
      onSwipedRight: () => handleSwipe('Right'),
      preventDefaultTouchmoveEvent: true,
      trackMouse: true,
    });

    return (
      <div className="team" {...swipeHandlers}>
      {pages[currentPage]}
        <div className="t-page-indicators">
          {pages.map((_, index) => (
            <span key={index} className={`t-indicator ${index === currentPage ? 'active' : ''}`} onClick={() => setCurrentPage(index)}></span>
          ))}
        </div>
      </div>
    );  
  };
  
  const Page1 = () => (
    <div className='t-page1' 
        style={{ display: 'flex',
                paddingLeft: 100,
                height: '110vh', 
                backgroundImage: `url(${white_logo})`,
                backgroundSize: 'contain',      
                }}>
      <div className="t-text-content1" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left'}}>
        <p className="t-title1">Team</p>
        <p className="t-subtitle1">HEARTH</p><br/>
        <div className="t-paragraph1">
            <p>Team HEARTH was created to accomplish the mission of elevating mental wellness of humanity via offering a personalized help structure.</p>
            <p>As we recognize that health encompasses not only the body, but also the mind and soul,</p>
            <p>we are here to ensure the holistic development of the triad by uplifting the latter.</p>
            <p>Our vision is to help everyone in need through fostering depth, strength, and beauty by the means of creative and sustainable methods.</p><br/>
            <em>“There will always be rocks in the road ahead of us. They will be stumbling blocks or stepping stones; it all depends on how you use them.”</em><br/><br></br>
            <p>As you navigate through life, Team HEARTH wishes to accompany your journey and assist you along the way</p>
            <p>by providing philosophical and psychological insights. As we are here to help you, you can also help others by taking part in our mission.</p>
            <p>Join us in our community, participate in diverse programs, and help build a healthy community that will enlighten yourself and the world.</p><br/>
            <p>For any inquiry, feel free to contact us on <em>hearthisnear@gmail.com.</em></p>
        </div>
      </div>
    </div>
  );

  const Page2 = () => (
    <div className='t-page2' 
        style={{ display: 'flex',
                paddingLeft: 100,
                height: '110vh', 
                backgroundImage: `url(${yellow_logo})`,
                backgroundSize: 'contain',      
                }}>
      <div className="t-text-content2" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left', marginLeft: 'auto',}}>
        <p className="t-title2">K</p>
        <p className="t-subtitle2">Director</p><br/>
        <div className="t-paragraph2">
            <p>Director, building and refining the overarching structure</p>
            <p>of HEARTH, establishing a clear vision.</p><br/>
            <p>As a M.D. who is deeply engrossed in philosophy and psychology,</p>
            <p>Endeavors to foster a holistic healing process </p>
            <p>and take part in the ennoblement of humanity.</p>
        </div>
      </div>
    </div>
  );
    
  const Page3 = () => (
    <div className='t-page2' 
        style={{ display: 'flex',
                paddingLeft: 100,
                height: '110vh', 
                backgroundImage: `url(${red_logo})`,
                backgroundSize: 'contain',      
                }}>
      <div className="t-text-content2" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left', marginLeft: 'auto',}}>
        <p className="t-title3">C</p>
        <p className="t-subtitle3">Visualizer</p><br/>
        <div className="t-paragraph2">
            <p>Visualizer, directing the artistic and creative elements of projects.</p><br/>
            <p>Designer of User Interface and Experience,</p>
            <p>Driven to develop concepts and ideas into visual narratives,</p>
            <p>Crafting digital interactions into user-centric journeys.</p>
        </div>
      </div>
    </div>
  );
  const Page4 = () => (
    <div className='t-page2' 
        style={{ display: 'flex',
                paddingLeft: 100,
                height: '110vh', 
                backgroundImage: `url(${green_logo})`,
                backgroundSize: 'contain',      
                }}>
      <div className="t-text-content2" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left', marginLeft: 'auto',}}>
        <p className="t-title4">H</p>
        <p className="t-subtitle4">Producer</p><br/>
        <div className="t-paragraph2">
            <p>Program creator and assessor, producing new materials</p>
            <p>and improving content quality through philosophical contemplations. </p><br/>
            <p>Having background in both Psychology and Mechanical Engineering,</p>
            <p>Seeks to understand the underlying mechanics of human psychology,</p>
            <p>and uncover the path to a more fulfilled life.</p>
        </div>
      </div>
    </div>
  );
  const Page5 = () => (
    <div className='t-page2' 
        style={{ display: 'flex',
                paddingLeft: 100,
                height: '110vh', 
                backgroundImage: `url(${blue_logo})`,
                backgroundSize: 'contain',      
                }}>
      <div className="t-text-content2" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left', marginLeft: 'auto',}}>
        <p className="t-title5">J</p>
        <p className="t-subtitle5">Operator</p><br/>
        <div className="t-paragraph2">
            <p>Operator, maintaining a panoramic view of projects</p>
            <p>and orchestrating the workflow to keep all facets</p>
            <p>of the operation on track.</p><br/>
            <p>With a background in Computer Science,</p>
            <p>Transforms the team’s concepts into tangible realities</p>
            <p>While balancing our mission to be both innovative and resonant.</p>
        </div>
      </div>
    </div>
  );  

export default Team;