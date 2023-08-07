import React from 'react';
import './contact.css';
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_twitter from '../../assets/icon_twitter.png'

const Contact = () => {
  return (
    <div className="container">
    <div className="left-section">
        <div className="images-container">
            <img src={icon_instagram} alt="first"/>
            <img src={icon_facebook} alt="second"/>
            <img src={icon_twitter} alt="third"/>
        </div>
        <div className="big-text">Contact Us</div>
        <div className="two-texts-row">
            <p>Our Address</p>
            <p>Our Contacts</p>
        </div>
        <div className="opacity-texts-row">
            <p className="opacity-text">Asgard wherever you ared</p>
            <p className="opacity-text">odins@gmail.com</p>
        </div>
    </div>
    <div className="right-section">
        <div className="text-field-container">
            <p>Name</p>
            <input type="text" />
            <p>Email</p>
            <input type="text" />
            <p>Message</p>
            <input type="text" />
        </div>
        <button className="send-button">Send Message</button>
    </div>
</div>
  )
}

export default Contact 