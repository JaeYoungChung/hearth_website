import React from 'react';
import './about.css';
import { Route } from 'react-router-dom';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
 
const About = () => {
  const [t, i18n] = useTranslation("global");
    return (
    <div className="About">
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
          <p> &nbsp;&nbsp;Some may view emotion as the unwanted sibling of logic, sometimes heavily burdening us with fear and sorrow. However, emotion serves a distinct purpose of its own. Alongside with its ability to give pleasure, it has evolutionarily developed to act as an alarm, an instant signal to let us be aware of any potential danger or threat.
            <br></br><br></br>&nbsp;&nbsp;As the logical brain is important for solving complicated problems through meticulous thinking, the emotional brain is also crucial, since it discretely dictates our actions and thoughts behind the logical brain. Thus, the functionality of the brain, in other words Cognitive Force, should be understood as a result of the concordance of the two brains and their ability to cooperate effectively.</p>
        </div>
      </div>
    
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

          We see the potent increase of psychological problems as a result of this soaring
          discrepancy between these two brains, as we disregarded emotion over the sake
          of logic.<br></br><br></br>

          That is where HEARTH rises to the occasion, to help us refine the emotional brain <br></br>
          and ultimately coexist with the logical brain in harmony. </p>
        </div>
      </div>
 
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

export default About;