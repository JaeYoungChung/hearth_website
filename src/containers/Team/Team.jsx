import React from 'react';
import './team.css';
import { Route } from 'react-router-dom';
import { useState } from "react";
import white_logo from '../../assets/whitelogo.png'
import blue_logo from '../../assets/bluelogo.png'
import green_logo from '../../assets/greenlogo.png'
import red_logo from '../../assets/redlogo.png'
import yellow_logo from '../../assets/yellowlogo.png' 


const Team = () => {
    const [currentPage, setCurrentPage] = useState(0);
  
    const pages = [<Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />];
  
    return (
      <div className="team">
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
                backgroundPosition:'1000px 90px',
                backgroundSize: 'contain',      
                }}>
      <div className="t-text-content1" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left'}}>
        <p className="t-title1">Team</p>
        <p className="t-subtitle1">HEARTH</p><br/>
        <div className="t-paragraph1">
            <p>Team HEARTH was created to accomplish the mission of elevating mental wellness of humanity via offering a personalized help,</p>
            <p>As we recognize that health encompasses not only the body, but also the mind and soul,</p>
            <p>We are here to ensure the holistic development of the triad by uplifting the latter.,</p>
            <p>Our vision is to help everyone in need through fostering depth, strength, and beauty by the means of creative and sustainable methods, </p><br/>
            <em>“There will always be rocks in the road ahead of us. They will be stumbling blocks or stepping stones; it all depends on how you use them.”,</em><br/><br></br>
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
                backgroundPosition:'100px 90px',
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
                backgroundPosition:'100px 90px',
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
                backgroundPosition:'100px 90px',
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
                backgroundPosition:'100px 90px',
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






// const Team = () => {

//     function Page({ side, backgroundImg, title,subtitle, paragraphs}) {

        
//           const restPagesTextStyle = {
//             paddingTop: '100px',
//             paddingLeft: '20px',
//           };

//         const firstBackgroundStyle = {
//           backgroundImage: `url(${backgroundImg})`,

//         };

//         const restBackgroundStyle = {
//             backgroundImage: `url(${backgroundImg})`,
//             backgroundPosition: '1000px 90px' ,
//             backgroundSize: 'contain',
//           };
        
//         const isFirstPage = currentPage === 0;
//         const textStyle = isFirstPage ? firstPageTextStyle : restPagesTextStyle;

      
//         return (
//           <div style={{ display: 'flex', height: '100vh',}}>
//             {side === 'left' && <div style={firstBackgroundStyle} className="t-background-img"></div>}
//             <div className="t-text-content" style={textStyle}>
//               <h1 className="t-title">{title}</h1>
//               <h1 className="t-subtitle">{subtitle}</h1>
//               {paragraphs.map((p, index) => (
//                 <p key={index} className="t-paragraph">{p}</p>
//               ))}
//             </div>
//             {side === 'right' && <div style={restBackgroundStyle} className="t-background-img"></div>}
//           </div>
//         );
//       }
//       return (
//         <div className="team">
//           <Page {...pages[currentPage]} />
//           <div className="t-page-indicators">
//             {pages.map((_, index) => (
//               <span key={index} className={`t-indicator ${index === currentPage ? 'active' : ''}`} onClick={() => setCurrentPage(index)}></span>
//             ))}
//           </div>
//         </div>
//       );


//        { side: 'right', title: 'Team', subtitle: 'Hearth', paragraphs: ['Team HEARTH was created to accomplish the mission of elevating mental wellness of humanity via offering a personalized help structure.\nAs we recognize that health encompasses not only the body, but also the mind and soul,\nWe are here to ensure the holistic development of the triad by uplifting the latter.\nOur vision is to help everyone in need through fostering depth, strength, and beauty by the means of creative and sustainable methods.', 'Paragraph 2'], backgroundImg: white_logo},

    // const [selected, setSelected] = useState(0);
    // const tabData = [
    //     {
    //         color: 'rgb(219, 94, 160)',
    //         paragraphs: ['Red Para 1', 'Red Para 2', 'Red Para 3'],
    //         footerText: '#e0e0e0'
    //     },
    //     {
    //         color: 'rgb(94, 132, 219)',
    //         paragraphs: ['Blue Para 1', 'Blue Para 2', 'Blue Para 3'],
    //         footerText: '#e0e0e1'
    //     },
    //     {
    //         color: 'rgb(94, 219, 205)',
    //         paragraphs: ['Green Para 1', 'Green Para 2', 'Green Para 3'],
    //         footerText: '#e0e0e2'
    //     },
    //     {
    //         color: 'rgb(152, 94, 219)',
    //         paragraphs: ['Yellow Para 1', 'Yellow Para 2', 'Yellow Para 3'],
    //         footerText: '#e0e0e3'
    //     }
    // ];
    
    // return (
    //     <div className="team">
    //         <div className="team-left">
    //             <h1>Team Cycology</h1>
    //             <p className='first-para'>Team Cycology is founded by four members who are devoted to providing a personalized method for a “Well-being for all”. 
    //                 We fully recognize the interconnection between the Body-Mind-Soul, and believe that genuine happiness and content stems from a healthy development of the triad. Our aim is to help everyone who are in need, regardless of age, gender or culture, via creative methods in a sustainable manner. </p>
    //             <p className='second-para'>Friedrich Nietzsche once said, “There will always be rocks in the road ahead of us. They will be stumbling blocks or stepping stones; it all depends on how you use them.”. 
    //             </p>
    //             <p className='third-para'>As you navigate through life, which is your life and your life only, Team Cycology wish to always be there to assist and consult you to wisdom on philosophical & psychological grounds. As we would like to help you, you can also help us, by participating in our programs and building a healthy community. You can join us via submitting your E-mail down below, and please feel free to contact us on cycologically@gmail.com.</p>
    //         </div>
    //         <div className="team-right" style={{ backgroundColor: `${tabData[selected].color.slice(0, -1)}, 0.3)` }}>
    //         <div className="team-tabs">
    //         {tabData.map((tab, index) => (
    //     <div
    //         key={index}
    //         className={`circle ${selected === index ? 'selected' : ''}`}
    //         onClick={() => setSelected(index)}
    //         style={{ backgroundColor: 'white' }}
    //     > 
    //         Profile {index + 1}
    //     </div> 
    //             ))}
    //         </div>
    //         {tabData[selected].paragraphs.map((para, index) => (
    //              <p className='para-texts' key={index}>{para}</p>
    //         ))}
    //             <div className="team-footer">
    //             <div className="team-square" style={{ backgroundColor: tabData[selected].color }}></div>
    //             <p className='team-footer-text' style={{ color: tabData[selected].color }}>{tabData[selected].footerText}</p>
    //         </div>
    //         </div>
    //     </div>
    // );


export default Team;