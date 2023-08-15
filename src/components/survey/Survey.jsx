// import React, { useState } from 'react';
// import './survey.css';


// const Survey = () => {
//   const questions = [
//     {
//       text: "Question 1?",
//       bgImage: "path_to_image_1.jpg",
//     },
//     // ... Add all questions here
//   ];
  
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));

//   const handleAnswer = (score) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = score;
//     setAnswers(newAnswers);
    
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     }
//   }

//   const goBack = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   }

//   return (
//     <div>
//       <Questions 
//         question={questions[currentQuestion]} 
//         onAnswer={handleAnswer} 
//       />
//       <NavButtons onBack={goBack} isLast={currentQuestion === questions.length - 1} />
//     </div>
//   );
// }

// export default Survey;