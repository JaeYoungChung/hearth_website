import React from 'react';
import './apps.css';
import helm_flame from '../../assets/helm_flame.png'
import envisage_flame from '../../assets/envisage_flame.png'
import attune_flame from '../../assets/attune_flame.png'
import reverie_flame from '../../assets/reverie_flame.png'
import transcend_flame from '../../assets/transcend_flame.png'
import harmonize_flame from '../../assets/harmonize_flame.png'
import app_helm from '../../assets/app_helm.png'
import app_envisage from '../../assets/app_envisage.png'
import app_attune from '../../assets/app_attune.png'
import app_reverie from '../../assets/app_reverie.png'
import app_transcend from '../../assets/app_transcend.png'
import app_harmonize from '../../assets/app_harmonize.png'
import download_appstore from '../../assets/download_appstore.svg';
import download_playstore from '../../assets/download_playstore.png';
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

 
function Apps() {
  const [t, i18n] = useTranslation("global");
  const [selected, setSelected] = useState(0);

  const appData = {
    0: { src:  app_helm, text:"H" },
    1: { src:  app_envisage, text:"E" },
    2: { src:  app_attune, text: "A" },
    3: { src:  app_reverie, text: "R" },
    4: { src:  app_transcend, text: "T" },
    5: { src:  app_harmonize, text: "H" },
  };
 
  const imageData = {
    0: { src:  helm_flame, color: "#0FF517", text: ["Helm", t("apps.independence"), "HELM is the Cognitive Force that allows one to lead a meaningful life and develop a character of depth. It is a path that must be cultivated in order to reach self-actualization and fulfill the calling given to each and every one, covering the full spectrum from the archetypal to the idiosyncratic. ", "Introspection, Integration, and Individuation", " are the three key components of this ", " Emerald Flame."] },
    1: { src:  envisage_flame, color: "#005CDE", text: ["Envisage", t('apps.cogitation'), "ENVISAGE is the Cognitive Force that engenders deep insight and permits one to intuitively fathom the true nature of things. It is the art of abstract thinking and theorization, which shines through in complex decision-making processes that necessitate both analytic and holistic cognition. ", "Reflection, Systemization, and Sagacity", " are the three key components of this ", " Cobalt Flame."]},
    2: { src:  attune_flame, color: "#00FFFF", text: ["Attune", t('apps.adaptability'), "ATTUNE is the Cognitive Force that modifies and maneuvers with great precision and pertinence, facilitating one to cleverly advance in the face of adversity. It is the tactical acumen andwits of a diplomat, which is essential for navigating through predicaments and role conflicts while maintaining balance and integrity. ", "Perceptivity, Plasticity, and Optimization", " are the three key components of this ", " Cyan Flame."] },
    3: { src:  reverie_flame, color: "#FFEF00", text: ["Reverie", t('apps.creativity'), "REVERIE is the Cognitive Force that endows novelty and vivacity, blessing one’s mind with beauty and freedom of thought. It is the gift of vivid imagination and innovative creativity, which through playful roaming or cathartic brooding, kindles major breakthroughs and paradigm shifts. ", "Curiosity, Originality, and Artistry", " are the three key components of this ", " Canary Flame."] },
    4: { src:  transcend_flame, color: "#DC143C", text: ["Transcend", t('apps.volition'), "TRANSCEND is the Cognitive Force that conquers and expands through courage and determination, enabling one to confront and march above one’s own fear and pain. It is the mindset of a warrior, which must be harnessed as a means to exceed preconceived limitations, and perform valiantly under pressure. ", "Passion, Resilience, and Ascendency", " are the three key components of this ", " Crimson Flame."] },
    5: { src:  harmonize_flame, color: "#FF00FF", text: ["Harmonize", t('apps.interpersonal_skills'), "HARMONIZE is the Cognitive Force that enriches one’s journey with true companions and mutual cooperative alliance. It is the ability to graciously synergize through genuine bonding, creating positive relationships with others regardless of their personality or background. ", "Sensibility, Eloquence, and Resonance", " are the three key components of this ", " Magenta Flame."] },
  };


function ButtonSection({ setSelected, selected }) {
  const buttons = Object.keys(appData).map(key => (
    <div className="a-button-container" key={key}>
      <button
        className={`a-square-button ${selected === parseInt(key) ? 'clicked' : ''}`}
        onClick={() => setSelected(parseInt(key))}
        style={{
          opacity: selected === parseInt(key) ? 1 : 0.5,
          backgroundImage: `url(${appData[key].src})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}
      />
      <p style={{ opacity: selected === parseInt(key) ? 1 : 0.5, fontSize: selected === parseInt(key) ? 17 : 15}}>
        {appData[key].text[0]}
      </p>
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
    <p className='a-text-small'>{text[2]}<em>{text[3]}</em>{text[4]}<span style={{ color }}>{text[5]}</span></p>
  </div>
  );  
}
  
  return (
  // <TransitionGroup>
  //   <CSSTransition
  //     key={selected} 
  //     timeout={500}
  //     classNames="fade"
  //   >
    <div id="apps" className="apps">
      <div className='a-left-section'>
        <ImageSection image={imageData[selected].src} />
        <div className='a-btn-section'>
          <ButtonSection setSelected={setSelected} selected={selected} />
        </div>
      </div>
      <div className="a-right-section">
            <TextSection color={imageData[selected].color} text={imageData[selected].text} />
          <div className="apps-icons">
            <img src = {download_appstore} className="ios-icon"/>
            <img src = {download_playstore} className="android-icon"/>
          </div>
      </div>
    </div>
  //   </CSSTransition>
  // </TransitionGroup>
  );
}   

export default Apps 