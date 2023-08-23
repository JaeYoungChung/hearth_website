import React from 'react';
import './community.css';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import blog_image from '../../assets/blog_image.png'
import sns_image from '../../assets/sns_image.png'
import news_image from '../../assets/news_image.png'
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_twitter from '../../assets/icon_twitter.png'


const Community = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const cardImages = [
      blog_image, sns_image, news_image
    ];
  
    return (
        <div className="container">
            <div className="left">
                <h1>Big Text</h1>
                <h2>Bigger Text</h2>
                <p>Smaller Text</p>
                <div className="inputBox">
                    <input type="text" placeholder="Type here..."/>
                    <span className="register">Register</span>
                </div>
            </div>
            <div className="right">
                {cardImages.map((image, index) => (
                    <Card
                        key={index}
                        image={image}
                        selected={selectedCard === index}
                        onClick={() => setSelectedCard(index)}
                        index={index}
                    />
                ))}
            </div>
            <div className="footer">
                <hr />
                <div className="footerTexts">
                    <span>Text 1</span>
                    <span>Text 2</span>
                    <span>Text 3</span>
                </div>
            </div>
        </div>
    );
}

function Card({ image, selected, onClick, index }) {
    return (
        <div className={`card ${selected ? 'selected' : ''}`} onClick={onClick}>
            <img src={image} alt="" />
            <div className="card-content">
                <span className={selected ? "original-text moved" : "original-text"}>Original Text</span>
                {selected && <span className='add-text'>Additional Text</span>}
                {selected && index === 0 && <button>Visit BLOG</button>}
                {selected && index === 1 && (
                    <div className="iconRow">
                    <img src = {icon_instagram} className="icon"/>
                    <img src = {icon_facebook} className="icon"/>
                    <img src = {icon_twitter} className="icon"/>
                  </div>
                )}
            </div>
        </div>
    );
}

export default Community;