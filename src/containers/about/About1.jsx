import React from 'react';
import './about.css';
import { Route } from 'react-router-dom';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const About1 = () => {
  const [t, i18n] = useTranslation("global");
    return (
    <div className="About1">
      <div className="section">
        <div className="squares-container">
          <div className="square square1"></div>
          <div className="square square2"></div>
          <div className="about-big-text">
            <p className="line1">{t("about.line1")}</p>
            <p className="line2">{t("about.line2")}</p>
            <p className="line3">{t("about.line3")}&nbsp;?</p>
          </div>
        </div>
        <div className="long-text1">
          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("about.long-text1-first")}
            <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("about.long-text1-second")}</p>
        </div>
        <div className="m-long-text1">
          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("about.long-text1-first")}
            <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("about.long-text1-second")}</p>
        </div>
      </div>
    </div>
    ) 
}
 
export default About1;