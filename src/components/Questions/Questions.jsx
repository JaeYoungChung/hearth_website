import React from 'react';
import './questions.css';
import { useState } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate, useParams } from 'react-router-dom';


const Questions = () => {
    return (
      <div className="App">
        <Survey />
      </div>
    );
  }
  

function Survey() {
    const totalQuestions = 20;
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));
    const [selectedScores, setSelectedScores] = useState(Array(totalQuestions).fill(null)); // Initialize an array of null values

    const questions = [
      "I am curious about the unknown.",
      "I often find myself questioning conventional beliefs",      
      "I like yoda",
    ];
  
    const handleAnswer = (score) => {
        const newScores = [...selectedScores]; 
        newScores[currentQuestion - 1] = score; // Store the selected score for the current question
        setSelectedScores(newScores);
    
        // Move to the next question
        if (currentQuestion < totalQuestions) {
          setCurrentQuestion(currentQuestion + 1);
        }
      };
 
    return (
        <div className="wrapper">
          <div className="background-image-container"></div>
          <div className="survey-container">
            <p className="question-counter">Question {currentQuestion} of {totalQuestions}</p>
            <div className="background-text">HEARTH<br/>Test</div>
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
            {currentQuestion === totalQuestions && <span className="submit-button">Submit</span>}
          </div>
        </div>
      );
  }
  
  

export default Questions;