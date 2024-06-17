import React from 'react';
import './about.css';
import { Route } from 'react-router-dom';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const About2 = () => {
  const [t, i18n] = useTranslation("global");
    return (
    <div className="About2">  
      <div className="section inverted"> 
        <div className="squares-container">
          <div className="square square1"></div>
          <div className="square square2"></div>
          <div className="about-big-text">
            <p className="line4">{t("about.line4")}</p>
            <p className="line5">&</p>
            <p className="line6">{t("about.line6")}</p>
          </div>
        </div>
        <div className="long-text2">
          <p>{t("about.long-text2-first")}<br></br><br></br>

          {t("about.long-text2-second")}<br></br><br></br>

          {t("about.long-text2-third")}<br></br><br></br>

          {t("about.long-text2-fourth")}</p>
        </div>
        <div className="m-long-text2">
          <p>{t("about.long-text2-first")}<br></br><br></br>

          {t("about.long-text2-second")}<br></br><br></br>

          {t("about.long-text2-third")}<br></br><br></br>

          {t("about.long-text2-fourth")}</p>
        </div>
      </div>
    </div>
    ) 
}

export default About2;