import React from 'react';
import './about.css'; 
import { Route } from 'react-router-dom';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const About3 = () => {
  const [t, i18n] = useTranslation("global");
    return (
    <div className="About3">
      <div className="section text-center"> 
        <div className="centered-text">
            <p className='title'>HEARTH</p>
            <p className='subtitle'>is here to help us.</p><br></br>
            <p className='rest-text'>{t("about.rest-text-first")}
                <br></br><br></br>
                {t("about.rest-text-second")}
                <br></br><br></br>
                {t("about.rest-text-third")}
                <br></br><br></br>
                {t("about.rest-text-fourth")}</p>
        </div>
      </div>
    </div>
    ) 
}

export default About3;