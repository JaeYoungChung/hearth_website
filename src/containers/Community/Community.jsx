import React from 'react';
import './community.css';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import blog_image from '../../assets/blog_image.png'
import sns_image from '../../assets/sns_image.png'
import news_image from '../../assets/news_image.png'
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_x from '../../assets/icon_x.png'
import {db} from "/Users/jeongjeyeong1/Documents/website/src/data/firebase.js";
import { uid } from "uid";
import { ref, set } from "firebase/database";
import { useTranslation } from 'react-i18next';

const images = [
    icon_instagram,
    icon_facebook,
    icon_x,
  ];

const Community = () => {
    const [t, i18n] = useTranslation("global");

    const [email, setEmail] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true); // New state for email validity

    const validateEmail = (email) => {
        // Regular expression for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput);
        setIsValidEmail(validateEmail(emailInput));    }; 

    const handleRegister = () => {
        if (!validateEmail(email)) {
            setIsValidEmail(false);
            return; // Stop the registration process if the email is not valid
        }
        const uuid = uid();
        // Save email to Firebase
        set(ref(db, "emails/" + uuid), {
            email,
            uuid,
        })
        .then(() => {
            setIsRegistered(true);
            setEmail(""); // Clear the email input field
            // Handle success (e.g., show notification)
        })
        .catch(error => {
            // Handle error
            console.error("Error saving email: ", error);
        });
    }; 

    return (
        <div className="community">
          <p className='c-line1'>Join the</p>
          <p className='c-line2'>Hearthside</p>
          <p className='c-line3'>and be a part of our journey to wellness & enlightenment</p>
           <div className="c-inputBox">
             <input
                type="text"
                placeholder={t("community.email")}
                value={email}
                onChange={handleEmailChange}
                id="c-inputID"
                className={!isValidEmail ? 'invalid' : ''} 
            />                
                <p className="register" onClick={!isRegistered ? handleRegister : null}>
                    {isRegistered ? t("community.registered") : t("community.register")}
                </p>
                </div>
                    {!isValidEmail && <p className="error-message">{t("community.error_message")}</p>}          
          <div className="c-image-row">
            {images.map((src, index) => (
              <img key={index} src={src} className="c-small-image" alt={`Small ${index + 1}`}/>
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



    // const [selectedCard, setSelectedCard] = useState(null);

    // const cardDetails = [
    //     { 
    //         image: blog_image, 
    //         originalText: t("community.original_text1"), 
    //         additionalText: t("community.additional_text1")
    //     }, 
    //     { 
    //         image: sns_image, 
    //         originalText: t("community.original_text2"), 
    //         additionalText: t("community.additional_text2")
    //     },
    //     { 
    //         image: news_image,
    //         originalText: t("community.original_text3"), 
    //         additionalText: t("community.additional_text3")
    //     }
    // ]; 


    // function Card({ image, selected, onClick, originalText, additionalText, index }) {
    //     return (
    //         <div className={`card ${selected ? 'selected' : ''}`} onClick={onClick}>
    //             <img src={image} alt="" />
    //             <div className="card-content">
    //             <p className={selected ? "original-text moved" : "original-text"}>{originalText}</p>
    //                 {selected && <p className='additional-text'>{additionalText.split('\n').map((str, index, array) => 
    //                  index === array.length - 1 ? str : <>
    //                 {str} <br />
    //                 </>
    //             )}</p>}
    //                 {selected && index === 0 && <button>{t("community.visit_blog")}</button>}
    //                 {selected && index === 1 && (
    //                       <div className="iconRow">
    //                     <img src = {icon_instagram} className="icon"/>
    //                     <img src = {icon_facebook} className="icon"/>
    //                     <img src = {icon_twitter} className="icon"/>
    //                   </div>
    //                 )}
    //                 {selected && index === 2 && (
    //                     <div className='blank-text'>
    //                         <p></p>
    //                     </div>
    //                 )}
    //             </div>
    //         </div>
    //     );
    // }
   
    // return (
    //     <div className="community">
    //         <div className="c-left-side">
    //             <p className='c-big-text'>{t("community.c-big-text")}</p>
    //             <p className='c-bigger-text'>{t("community.c-bigger-text")}</p>
    //             <p className='c-small-text'>{t("community.c-small-text")}</p>

    //             </div>
    //         <div className="c-right-side">
    //             {cardDetails.map((card, index) => (
    //                 <Card
    //                     key={index}
    //                     image={card.image}
    //                     selected={selectedCard === index}
    //                     onClick={() => setSelectedCard(index)}
    //                     originalText={card.originalText}
    //                     additionalText={card.additionalText}
    //                     index={index}
    //                 />
    //             ))}
    //         </div>

    //     </div> 
    // );
}

export default Community;