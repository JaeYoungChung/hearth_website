import React from 'react';
import './team.css';
import { Route } from 'react-router-dom';
import { useState } from "react";
import team_logo from '../../assets/team_logo.png'


const Team = () => {

    function Page({ side, backgroundImg, title, paragraphs}) {
        const firstBackgroundStyle = {
          backgroundImage: `url(${backgroundImg})`,
          backgroundPosition:'left 100px',
          backgroundSize: 'cover',
        };

        const restBackgroundStyle = {
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: '150px 100px' ,
            backgroundSize: 'cover',
          };
      
        return (
          <div style={{ display: 'flex', height: '100vh' }}>
            {side === 'left' && <div style={firstBackgroundStyle} className="t-background-img"></div>}
            <div className="t-text-content">
              <h1 className="t-title">{title}</h1>
              {paragraphs.map((p, index) => (
                <p key={index} className="t-paragraph">{p}</p>
              ))}
            </div>
            {side === 'right' && <div style={restBackgroundStyle} className="t-background-img"></div>}
          </div>
        );
      }

      const [currentPage, setCurrentPage] = useState(0);
      const pages = [
        { side: 'right', title: 'Page 1', paragraphs: ['Paragraph 1', 'Paragraph 2'], backgroundImg: team_logo},
        { side: 'left', title: 'Page 2', paragraphs: ['Paragraph 1', 'Paragraph 2'], backgroundImg: team_logo},
        { side: 'left', title: 'Page 3', paragraphs: ['Paragraph 1', 'Paragraph 2'], backgroundImg: team_logo},
        { side: 'left', title: 'Page 4', paragraphs: ['Paragraph 1', 'Paragraph 2'], backgroundImg: team_logo},
      ];
    
      return (
        <div className="team">
          <Page {...pages[currentPage]} />
          <div className="t-page-indicators">
            {pages.map((_, index) => (
              <span key={index} className={`t-indicator ${index === currentPage ? 'active' : ''}`} onClick={() => setCurrentPage(index)}></span>
            ))}
          </div>
        </div>
      );



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
}


export default Team;