import React from 'react';
import './about.css';
import { Route } from 'react-router-dom';
import home_flame from '../../assets/home_flame.png'


const About = () => {
    return (
        <div className="aboutContainer">
        <div className="gradientOverlay">
            <div className="content">
                <h1 className="title">Why do we have emotions?</h1>
                <p className="description">
                Some may view emotion as the unwanted sibling of logic, sometimes heavily burdening us with sadness or anxiety. However, emotion serves a distinct purpose of its own. Alongside with its ability to give pleasure, it has evolutionarily developed to act as an alarm, an instant signal to let us be aware of any potential danger or threat. As the logical brain is important for solving complicated problems through meticulous thinking, the emotional brain is also crucial, since it discretely dictates our actions and thoughts behind the logical brain. Thus, the functionality of the brain, in other words cognitive skills, should be understood as a result of the concordance of the two brains and their ability to cooperate effectively.
                We learn how to grow and control our logical brain in a systematic way; through mathematics, science, economics and etc. 
                But where do we learn to train our emotional brain? Furthermore, where do we learn to integrate logic and emotion? 
                We see the potent increase of psychological problems as a result of this soaring discrepancy between these two brains, as we disregarded emotion over the sake of logic. 
                That is where HEARTH rises to the occasion, to help us refine the the emotional brain and ultimately coexist with the logical brain in harmony.
                HEARTH is here to help us.
                It is here to understand our emotions through self-analyzation, by finding out what each of our distinct cognitive skills are, from strength to weakness. 
                It is here to cultivate emotional depth by heightening the sense of self-efficacy by practicing those skills in a personalized way. 
                Here we focus on 6 intertwined yet individual set of cognitive skills, which as a sum is “HEARTH”: Harmonize, Envisage, Attune, Reverie, Transcend, and Helm. Focus on controlling and enhancing these 6 aspects and we will shine bright, by becoming the best version of ourselves.
                HEARTH, we are here to help us.”               
                </p>
            </div>
        </div>
    </div>
    )
}

export default About;