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

    const cardDetails = [
        { 
            image: blog_image, 
            originalText: "BLOG posts", 
            additionalText: "weekly essays on\npsychology and philosophy" 
        },
        { 
            image: sns_image, 
            originalText: "SNS posts", 
            additionalText: "weekly posts on\nmotivational quotes" 
        },
        { 
            image: news_image,
            originalText: "Newsletters \n & Channels", 
            additionalText: "weekly notifications on\nOur Blog and SNS posts" 
        }
    ]; 
   
    return (
        <div className="community">
            <div className="c-left-side">
                <p className='c-big-text'>Join our</p>
                <p className='c-bigger-text'>Community</p>
                <p className='c-small-text'>and gain access to HEARTH's free contents</p>
                <div className="c-inputBox">
                    <input type="text" placeholder="email"/>
                    <p className="register">Register</p>
                </div>
            </div>
            <div className="c-right-side">
                {cardDetails.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        selected={selectedCard === index}
                        onClick={() => setSelectedCard(index)}
                        originalText={card.originalText}
                        additionalText={card.additionalText}
                        index={index}
                    />
                ))}
            </div>
            <div className="c-footer">
                <hr />
                <div className="c-footerTexts">
                    <p>Privacy Policy</p>
                    <p>Copyrights</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    );
}

function Card({ image, selected, onClick, originalText, additionalText, index }) {
    return (
        <div className={`card ${selected ? 'selected' : ''}`} onClick={onClick}>
            <img src={image} alt="" />
            <div className="card-content">
            <p className={selected ? "original-text moved" : "original-text"}>{originalText}</p>
                {selected && <p className='additional-text'>{additionalText.split('\n').map((str, index, array) => 
                 index === array.length - 1 ? str : <>
                {str} <br />
                </>
            )}</p>}
                {selected && index === 0 && <button>Visit BLOG</button>}
                {selected && index === 1 && (
                      <div className="iconRow">
                    <img src = {icon_instagram} className="icon"/>
                    <img src = {icon_facebook} className="icon"/>
                    <img src = {icon_twitter} className="icon"/>
                  </div>
                )}
                {selected && index === 2 && (
                    <div className='blank-text'>
                        <p></p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Community;