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
        <div className="long-text">
          <p>We learn how to grow and control our logical brain in a systematic way; <br></br>
          through mathematics, science, economics and so on. <br></br><br></br>

          But where do we learn to train our emotional brain? <br></br>
          Furthermore, where do we learn to integrate logic and emotion? <br></br><br></br>

          We see the potent increase of psychological problems as a result of this soaring<br></br>
          discrepancy between these two brains, as we disregarded emotion over the sake <br></br>
          of logic.<br></br><br></br>

          That is where HEARTH rises to the occasion, to help us refine the emotional brain <br></br>
          and ultimately coexist with the logical brain in harmony. </p>
        </div>
      </div>
    </div>
    ) 
}

export default About2;