import React from 'react';
import './questions.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getQuestions } from '../../data.js';

const Questions = () => {
    return (
      <div className="App">
        <Survey />
      </div>
    );
  }
  
function Survey() {
    const [t, i18n] = useTranslation("global");
    const questions = getQuestions(t);

    const navigate = useNavigate();

    const totalQuestions = 54;
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));
    const [selectedScores, setSelectedScores] = useState(Array(totalQuestions).fill(null)); // Initialize array
  
    const handleAnswer = (score) => {
        const adjustedScore = score - 3;    //(-2,-1,0,1,2)
        const newScores = [...selectedScores]; 
        newScores[currentQuestion - 1] = adjustedScore;
        setSelectedScores(newScores);
    
        // Move to the next question
        if (currentQuestion < totalQuestions) {
          setCurrentQuestion(currentQuestion + 1);
        }
      };
 
      const handleSubmit = () => {

        //Range -18 ~ 18
        const Independence =  selectedScores[0]+selectedScores[1]+selectedScores[2]
                              +selectedScores[18]+selectedScores[19]+selectedScores[20]
                              +selectedScores[36]+selectedScores[37]+selectedScores[38];

        const Cogitation =  selectedScores[3]+selectedScores[4]+selectedScores[5]
                              +selectedScores[21]+selectedScores[22]+selectedScores[23]
                              +selectedScores[39]+selectedScores[40]+selectedScores[41];

        const Adaptability =  selectedScores[6]+selectedScores[7]+selectedScores[8]
                              +selectedScores[24]+selectedScores[25]+selectedScores[26]
                              +selectedScores[42]+selectedScores[43]+selectedScores[44];

        const Creativity = selectedScores[9]+selectedScores[10]+selectedScores[11]
                            +selectedScores[27]+selectedScores[28]+selectedScores[29]
                            +selectedScores[45]+selectedScores[46]+selectedScores[47];

        const Volition =  selectedScores[12]+selectedScores[13]+selectedScores[14]
                            +selectedScores[30]+selectedScores[31]+selectedScores[32]
                            +selectedScores[48]+selectedScores[49]+selectedScores[50];   

        const Interpersonal =  selectedScores[15]+selectedScores[16]+selectedScores[17]
                              +selectedScores[33]+selectedScores[34]+selectedScores[35]
                              +selectedScores[51]+selectedScores[52]+selectedScores[53];
                       

        // Transcend (Volition):	 		Red			Red
        // Attune (Adaptability):	 		Cyan		0.5 Blue + 0.5 Green
        // Reverie (Creativity):	 		Yellow		0.5 Red + 0.5 Green
        // Envisage (Cogitation):		 	Blue			Blue
        // Helm (Independence):	 		Green		Green
        // Harmonize (Interpersonal):		Magenta		0.5 Red + 0.5 Blue

        //Range -36 ~ 36
        const RedValue = 0.5 * Creativity + 0.5 * Interpersonal + Volition;                        
        const GreenValue = 0.5 * Adaptability + 0.5 * Creativity + Independence;
        const BlueValue = 0.5 * Interpersonal + 0.5 * Adaptability + Cogitation;
       
        //Range 111 ~ 255
        const NewRedValue = 111 + 2 * (RedValue - (-36));
        const NewGreenValue = 111 + 2 * (GreenValue - (-36));
        const NewBlueValue = 111 + 2 * (BlueValue - (-36));
        const rgbAverage = (NewRedValue + NewGreenValue + NewBlueValue)/3;
        const adjustmentFactor = 0.5;
        const AdjustedRed = Math.floor((NewRedValue - rgbAverage) * adjustmentFactor + NewRedValue);
        const AdjustedGreen = Math.floor((NewGreenValue - rgbAverage) * adjustmentFactor + NewGreenValue);
        const AdjustedBlue = Math.floor((NewBlueValue - rgbAverage) * adjustmentFactor + NewBlueValue);

        sessionStorage.setItem('rgbValues', JSON.stringify({
          NewRedValue: Math.min(AdjustedRed, 255),
          NewGreenValue: Math.min(AdjustedGreen, 255),
          NewBlueValue: Math.min(AdjustedBlue, 255),
        }));

        //Range 0 ~ 36
        const s1 = Independence + 18;
        const s2 = Cogitation + 18;
        const s3 = Adaptability + 18;
        const s4 = Creativity + 18;
        const s5 = Volition + 18;
        const s6 = Interpersonal + 18;
        
        sessionStorage.setItem('hexagonScores', JSON.stringify({
          s1, s2, s3, s4, s5, s6,
        }));

        navigate('/firecolor');
      };
 
    return (
        <div className="wrapper">
          <div className="background-image-container"></div>
          <div className="survey-container">
            <p className="question-counter">Question {currentQuestion} of {totalQuestions}</p>
            <h2>{questions[currentQuestion - 1]}</h2>
            <div>
      {[1, 2, 3, 4, 5].map(score => (
        <button 
          key={score} 
          onClick={() => handleAnswer(score)}
          className={selectedScores[currentQuestion - 1] === score - 3 ? "selected" : ""}
          >
          {score}
        </button>
      ))}
    </div>
            {currentQuestion > 1 && (
              <span className="back-button" onClick={() => setCurrentQuestion(currentQuestion - 1)}>Back</span>
            )}
            {currentQuestion === totalQuestions && <span className="submit-button" onClick={handleSubmit}>Submit</span>}
          </div>
        </div>
      );
  }
  
  

export default Questions;