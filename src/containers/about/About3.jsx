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
            <p className='rest-text'>It is here to understand our emotions through self-analyzation, by finding out what each of our distinct cognitive abilities are, from strength to weakness. 
              It is here to cultivate emotional depth, and enhance its interconnectivity with logic by practicing our cognitive functions in a personalized, yet collective way. 
              Here we focus on 6 intertwined yet individual set of Cognitive Force, which as a sum is
                <br></br><br></br>
                “HEARTH”: Helm, Envisage, Attune, Reverie, Transcend, and Harmonize.
                <br></br><br></br>
                Focus on controlling and enhancing these 6 aspects and we will shine bright, by becoming the best version of ourselves.
                <br></br><br></br>
                HEARTH, we are here to help us.</p>
        </div>
      </div>
    </div>
    ) 
}

export default About3;