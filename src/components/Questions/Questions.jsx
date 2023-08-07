import React from 'react';
import './questions.css';

import { useNavigate, useParams } from 'react-router-dom';

const questions = [
    { id: 1, text: 'Question 1 text' },
    { id: 2, text: 'Question 2 text' },
    // More questions...
  ];

  const Questions = () => {
    const navigate = useNavigate();
    const { questionId } = useParams();
    
    const currentQuestion = questions.find(question => question.id === Number(questionId));
  
    const handleAnswerClick = () => {
      // navigate to the next question when an answer is clicked
      if (questionId === '10') {
        navigate('/results'); // go to results page
      } else {
        navigate(`/question/${Number(questionId) + 1}`);
      }
    };
  
    // if there's no question with the current ID, redirect to /test
    if (!currentQuestion) {
     navigate('/test');
    }
  
    return (
      <div className="question-container">
        <p>{currentQuestion.text}</p>
        <button onClick={handleAnswerClick}>Answer</button>
      </div>
    )
  }

export default Questions