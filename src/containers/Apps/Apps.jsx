import React from 'react';
import './apps.css';
import helm_flame from '../../assets/helm_flame.png'
import envisage_flame from '../../assets/envisage_flame.png'
import attune_flame from '../../assets/attune_flame.png'
import reverie_flame from '../../assets/reverie_flame.png'
import transcend_flame from '../../assets/transcend_flame.png'
import harmonize_flame from '../../assets/harmonize_flame.png'
import icon_appstore from '../../assets/icon_appstore.png';
import icon_playstore from '../../assets/icon_playstore.png';
import { useState } from "react";


const imageData = {
  0: { src:  helm_flame, color: "rgb(69, 252, 80)", text: ["Helm", "Independence", "is integrating the inner self through meticulous introspection to attain an autonomous life where one can live to the fullest and take greater hold of their destiny"] },
  1: { src:  envisage_flame, color: "rgb(110, 175, 237)", text: ["Envisage", "Cogitation", "is the art of cogitation which consists of reflective thinking on oneself and systemizing decisions, gaining clarity in one's mission and vision through internalization"] },
  2: { src:  attune_flame, color: "rgb(234, 130, 196)", text: ["Attune", "Adaptability", "is accurately perceiving the constantly changing relationship between yourself and the world around you in order to effectively optimize your mode of adaptation in a versatile manner"] },
  3: { src:  reverie_flame, color: "rgb(250, 184, 52)", text: ["Reverie", "Creativity", "is being inquisitive and open-minded when one chances upon objects and ideas to envision and create value of originality"] },
  4: { src:  transcend_flame, color: "rgb(228, 25, 0)", text: ["Transcend", "Volition", "is awakening the inner drive, developing resilience from failure, and gaining self-control from short-term temptations so as to render oneself into achieving a desirable goal that needs iterative effort"] },
  5: { src:  harmonize_flame, color: "rgb(163, 86, 214)", text: ["Harmonize", "Interpersonal Skills", "is understanding others through empathy and tolerance whilst keeping one’s ground to synergize successfully with other people and become socially optimistic"] },
};
 
function Apps() {
  const [selected, setSelected] = useState(0);

  return (
    <div id="apps" className="apps">
      <ImageSection image={imageData[selected].src} />
      <div className="right-section">
        <TextSection color={imageData[selected].color} text={imageData[selected].text} />
        <ButtonSection setSelected={setSelected} selected={selected} />
        <div className="apps-icons">
          <img src = {icon_appstore} className="apps-icon"/>
          <img src = {icon_playstore} className="apps-icon"/>
        </div>
      </div>
    </div>
  );
}  

function ImageSection({ image }) {
  return <img className="full-screen-image" src={image} alt="background" />;
}

function TextSection({ color, text }) {
  return (
    <div className="text-section">
    <p className="text-big" style={{ color }}>{text[0]}</p>
    <p className="text-medium">{text[1]}</p>
    <hr />
    <p className='text-small'>{text[2]}</p>
  </div>
  ); 
}

function ButtonSection({ setSelected, selected }) {
  const buttons = Object.keys(imageData).map(key => (
    <div className="button-container" key={key}>
      <button
        className={`square-button ${selected === parseInt(key) ? imageData[key].color : "grey"}`}
        onClick={() => setSelected(parseInt(key))}
        style={{ opacity: selected === parseInt(key) ? 1 : 0.5 }}
      />
      <p style={{ opacity: selected === parseInt(key) ? 1 : 0.5 }}>{imageData[key].text[0]}</p>
    </div>
  ));

  return <div className="button-section">{buttons}</div>;
}
export default Apps 