import React from 'react';
import './community.css';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_x from '../../assets/icon_x.png'
import icon_threads from '../../assets/icon_threads.png'
import {db} from "../../firebase.js";
import { uid } from "uid";
import { ref, set } from "firebase/database";
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';


const images = [
    icon_instagram,
    icon_facebook,
    icon_x,
    icon_threads
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

    const navigate = useNavigate();

    const handlePolicyClick = () => {
      navigate('/privacypolicy');
    };
    const handleTermsClick = () => {
      navigate('/termsuse');
    };

    //email register
    const handleEmailChange = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput);
        setIsValidEmail(validateEmail(emailInput));    
      }; 

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

        // Send email using EmailJS
        const templateParams = {
          to_email: email,
        };

      emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE, templateParams, process.env.REACT_APP_PUBLIC_KEY)
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });
    
    })
    .catch(error => {
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
                  <p onClick={handlePolicyClick}>Privacy Policy</p>
                  <p>Vivos Voco Inc.</p>
                  <p onClick={handleTermsClick}>Terms Of Use</p> 
                  {/* <p>Cookie Policy</p> */}
              </div>
              {/* <div className='company-name'>
                <br/>
                <p>Vivos Voco Inc.</p>
              </div> */}
          </div>
        </div>
      );
}

export default Community;