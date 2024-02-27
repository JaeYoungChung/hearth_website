import React from 'react';
import './apps.css';
import helm_flame from '../../assets/helm_flame.png'
import envisage_flame from '../../assets/envisage_flame.png'
import attune_flame from '../../assets/attune_flame.png'
import reverie_flame from '../../assets/reverie_flame.png'
import transcend_flame from '../../assets/transcend_flame.png'
import harmonize_flame from '../../assets/harmonize_flame.png'
import download_appstore from '../../assets/download_appstore.svg';
import download_playstore from '../../assets/download_playstore.png';
import { useState } from "react";
import { useTranslation } from 'react-i18next'; 

 
function Apps() {
  const [t, i18n] = useTranslation("global");
  const [selected, setSelected] = useState(0);

  const imageData = {
    0: { src:  helm_flame, color: "rgb(69, 252, 80)", text: ["Helm", t("apps.independence"), "is integrating the inner self through meticulous introspection to attain an autonomous life where one can live to the fullest and take greater hold of their destiny"] },
    1: { src:  envisage_flame, color: "rgb(110, 175, 237)", text: ["Envisage", t('apps.cogitation'), "is the art of cogitation which consists of reflective thinking on oneself and systemizing decisions, gaining clarity in one's mission and vision through internalization"] },
    2: { src:  attune_flame, color: "rgb(234, 130, 196)", text: ["Attune", t('apps.adaptability'), "is accurately perceiving the constantly changing relationship between yourself and the world around you in order to effectively optimize your mode of adaptation in a versatile manner"] },
    3: { src:  reverie_flame, color: "rgb(250, 184, 52)", text: ["Reverie", t('apps.creativity'), "is being inquisitive and open-minded when one chances upon objects and ideas to envision and create value of originality"] },
    4: { src:  transcend_flame, color: "rgb(228, 25, 0)", text: ["Transcend", t('apps.volition'), "is awakening the inner drive, developing resilience from failure, and gaining self-control from short-term temptations so as to render oneself into achieving a desirable goal that needs iterative effort"] },
    5: { src:  harmonize_flame, color: "rgb(163, 86, 214)", text: ["Harmonize", t('apps.interpersonal_skills'), "is understanding others through empathy and tolerance whilst keeping one’s ground to synergize successfully with other people and become socially optimistic"] },
  };


function ButtonSection({ setSelected, selected }) {
  const buttons = Object.keys(imageData).map(key => (
    <div className="a-button-container" key={key}>
      <button
        className={`a-square-button ${selected === parseInt(key) ? imageData[key].color : "grey"}`}
        onClick={() => setSelected(parseInt(key))}
        style={{ opacity: selected === parseInt(key) ? 1 : 0.5 }}
      />
      <p style={{ opacity: selected === parseInt(key) ? 1 : 0.5 }}>{imageData[key].text[0]}</p>
    </div>
  ));

  return <div className="a-button-section">{buttons}</div>;
}

function ImageSection({ image }) {
  return <img className="a-full-screen-image" src={image} alt="background" />;
}

function TextSection({ color, text }) {
  return (
  <div className="a-text-section">
    <p className="a-text-big" style={{ color }}>{text[0]}</p>
    <p className="a-text-medium">{text[1]}</p>
    <hr />
    <p className='a-text-small'>{text[2]}</p>
  </div>
  ); 
}

  return (
    <div id="apps" className="apps">
      <div className='apps-left-section'>
        <ImageSection image={imageData[selected].src} />
        <ButtonSection setSelected={setSelected} selected={selected} />
      </div>
      <div className="a-right-section">
        <TextSection color={imageData[selected].color} text={imageData[selected].text} />
          <div className="apps-icons">
            <img src = {download_appstore} className="ios-icon"/>
            <img src = {download_playstore} className="android-icon"/>
          </div>
      </div>
      
    </div>
  );
}   

export default Apps 