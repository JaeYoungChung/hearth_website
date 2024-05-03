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
        <div className="long-text">
          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Some may view emotion as the unwanted sibling of logic, sometimes heavily burdening us with fear and sorrow. However, emotion serves a distinct purpose of its own. Alongside with its ability to give pleasure, it has evolutionarily developed to act as an alarm, an instant signal to let us be aware of any potential danger or threat.
            <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As the logical brain is important for solving complicated problems through meticulous thinking, the emotional brain is also crucial, since it discretely dictates our actions and thoughts behind the logical brain. Thus, the functionality of the brain, in other words Cognitive Force, should be understood as a result of the concordance of the two brains and their ability to cooperate effectively.</p>
        </div>
      </div>
    </div>
    ) 
}

export default About1;