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
  const [fade, setFade] = useState(true);

  const appData = {
    0: { src:  app_helm, text:"H" },
    1: { src:  app_envisage, text:"E" },
    2: { src:  app_attune, text: "A" },
    3: { src:  app_reverie, text: "R" },
    4: { src:  app_transcend, text: "T" },
    5: { src:  app_harmonize, text: "H" },
  };
  
  const imageData = {
    0: { src:  helm_flame, color: "#0FF517", text: ["Helm", t("apps.independence"), t("apps.helm_intro"), t("apps.helm_components"), t("apps.helm_are"), t("apps.helm_flame")] },
    1: { src:  envisage_flame, color: "#005CDE", text: ["Envisage", t('apps.cogitation'), t("apps.envisage_intro"), t("apps.envisage_components"), t("apps.envisage_are"), t("apps.envisage_flame")]},
    2: { src:  attune_flame, color: "#00FFFF", text: ["Attune", t('apps.adaptability'),  t("apps.attune_intro"), t("apps.attune_components"), t("apps.attune_are"), t("apps.attune_flame")] },
    3: { src:  reverie_flame, color: "#FFEF00", text: ["Reverie", t('apps.creativity'),  t("apps.reverie_intro"), t("apps.reverie_components"), t("apps.reverie_are"), t("apps.reverie_flame")] },
    4: { src:  transcend_flame, color: "#DC143C", text: ["Transcend", t('apps.volition'),  t("apps.transcend_intro"), t("apps.transcend_components"), t("apps.transcend_are"), t("apps.transcend_flame")] },
    5: { src:  harmonize_flame, color: "#FF00FF", text: ["Harmonize", t('apps.cooperability'),  t("apps.harmonize_intro"), t("apps.harmonize_components"), t("apps.harmonize_are"), t("apps.harmonize_flame")] },
  };

  function ButtonSection({ setSelected, selected, setFade }) {
    const handleClick = (key) => {
      setFade(false);
      setTimeout(() => {
        setSelected(parseInt(key));
        setFade(true);
      }, 300);
    };
    const buttons = Object.keys(appData).map(key => (
      <div className="a-button-container" key={key}>
        <button
          className={`a-square-button ${selected === parseInt(key) ? 'clicked' : ''}`}
          onClick={() => handleClick(key)}
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

  function ImageSection({ image, fade }) {
    return <img className={`a-full-screen-image ${fade ? 'fade-in' : 'fade-out'}`} src={image} loading="eager" alt="background" />;
  }
  
  function TextSection({ color, text, fade }) {
    return (
    <div className={`a-text-section ${fade ? 'fade-in' : 'fade-out'}`}>
      <p className="a-text-big" style={{ color }}>{text[0]}</p>
      <p className="a-text-medium">{text[1]}</p>
      <hr />
      <p className='a-text-small'>{text[2]}<em>{text[3]}</em>{text[4]}<span style={{ color }}>{text[5]}</span></p>
    </div>
    );  
  }

  return (
    <div id="apps" className="apps">
      <div className='a-left-section'>
        <ImageSection image={imageData[selected].src} fade={fade} />
      </div>
      <div className="a-right-section">
        <TextSection color={imageData[selected].color} text={imageData[selected].text} fade={fade} />
      </div>
      <div className="a-right-bottom-section">
        <div className="apps-icons">
          <img src={download_appstore} className="ios-icon"/>
          <img src={download_playstore} className="android-icon"/>    
        </div>
        <div className='a-btn-section'>
          <ButtonSection setSelected={setSelected} selected={selected} setFade={setFade} />
        </div>
      </div>
    </div>
  );
} 

export default Apps 