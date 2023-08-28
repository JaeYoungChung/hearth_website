import React from 'react';
import './questions.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {questions} from '../../data.js'


const Questions = () => {
    return (
      <div className="App">
        <Survey />
      </div>
    );
  }
  
function Survey() {
    const navigate = useNavigate();

    const totalQuestions = 20;
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));
    const [selectedScores, setSelectedScores] = useState(Array(totalQuestions).fill(null)); // Initialize array
  
    const handleAnswer = (score) => {
        const adjustedScore = score - 3;
        const newScores = [...selectedScores]; 
        newScores[currentQuestion - 1] = adjustedScore;
        setSelectedScores(newScores);
    
        // Move to the next question
        if (currentQuestion < totalQuestions) {
          setCurrentQuestion(currentQuestion + 1);
        }
      };

      const handleSubmit = () => {
        const Value1 = selectedScores[0] + selectedScores[2] + 0.5 * selectedScores[8];
        const Value2 = 0.5 * selectedScores[8] + selectedScores[10] + 0.5 * selectedScores[11];
        const Value3 = 0.5 * selectedScores[11] + selectedScores[16];
      
        const NewValue1 = 27 + 2 * (Value1 - (-36));
        const NewValue2 = 27 + 2 * (Value2 - (-36));
        const NewValue3 = 27 + 2 * (Value3 - (-36));

        sessionStorage.setItem('surveyResults', JSON.stringify({
          NewValue1: NewValue1,
          NewValue2: NewValue2,
          NewValue3: NewValue3,
        }));

        const s1 = selectedScores[0] + selectedScores[1] + selectedScores[2] + 9;
        const s2 = selectedScores[3] + selectedScores[4] + selectedScores[5] + 9;
        const s3 = selectedScores[6] + selectedScores[7] + selectedScores[8] + 9;
        const s4 = selectedScores[9] + selectedScores[10] + selectedScores[11] + 9;
        const s5 = selectedScores[12] + selectedScores[13] + selectedScores[14] + 9;
        const s6 = selectedScores[15] + selectedScores[16] + selectedScores[17] + 9;
        
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
          className={selectedScores[currentQuestion - 1] === score ? "selected" : ""}
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