import React from 'react';
import './questions.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getQuestions } from '../../data.js';
import logo from '../../assets/test_logo.png'


const Questions = () => {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleButtonClick = () => {
    navigate('/questions');
  };

  const handleBlogClick = () => {
    navigate('/blog');
  };

    return (
      <div className= "questions-page">
      <div className = "q-navbar">
      <div className = "q-navbar-links_logo">
        <NavLink to='/'>
        <img src={logo} height={80} alt = "logo"></img>
        </NavLink>
      </div>
      <div className='q-navbar-lang'>
        {/* Search dropdown language for later adjustments */}
        <select onChange={handleChangeLanguage}>
          <option value="en" className="english">English</option>
          <option value="ja" className="japanese">日本語</option>
          <option value="ko" className="korean">한국어</option>
        </select>
        <p className='blog-click' onClick={handleBlogClick}>{t("navbar.blog")}</p>
        <button type="button" className='nav-button' onClick={handleButtonClick}>{t("navbar.take_test")}</button>
      </div> 
    </div>
      <div className="survey-container">
        <Survey />
      </div>
    </div>
    );
  }
  
function Survey() {
    const [t, i18n] = useTranslation("global");
    const questions = getQuestions(t);

    const navigate = useNavigate();

    const totalQuestions = 4;
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));
    const [selectedScores, setSelectedScores] = useState(Array(totalQuestions).fill(null)); // Initialize array
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loadingDots, setLoadingDots] = useState('');

    useEffect(() => {
      if (isSubmitted) {
        const timer = setInterval(() => {
          setLoadingDots(prevDots => (prevDots.length < 3 ? prevDots + '.' : ''));
        }, 1000);
  
        setTimeout(() => {
          clearInterval(timer);
          navigate('/firecopy');
        }, 5000);
  
        return () => {
          clearInterval(timer);
        };
      }
    }, [isSubmitted]);
 
    const handleAnswer = (score) => {
      const adjustedScore = score - 3; //(-2,-1,0,1,2)
      const newScores = [...selectedScores];
      newScores[currentQuestion - 1] = adjustedScore;
      setSelectedScores(newScores);
  
      // Move to the next question with fading transition if the question is not answered
      if (currentQuestion < totalQuestions && selectedScores[currentQuestion - 1] === null) {
        setIsTransitioning(true);
        document.querySelector('.survey-container').classList.add('fade-out');
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          document.querySelector('.survey-container').classList.remove('fade-out');
          document.querySelector('.survey-container').classList.add('fade-in');
          setTimeout(() => {
            document.querySelector('.survey-container').classList.remove('fade-in');
            setIsTransitioning(false);
          }, 500);
        }, 500);
      }
    };

    const handleNext = () => {
      if (currentQuestion < totalQuestions) {
        setIsTransitioning(true);
        document.querySelector('.survey-container').classList.add('fade-out');
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          document.querySelector('.survey-container').classList.remove('fade-out');
          document.querySelector('.survey-container').classList.add('fade-in');
          setTimeout(() => {
            document.querySelector('.survey-container').classList.remove('fade-in');
            setIsTransitioning(false);
          }, 500);
        }, 500);
      }
    };

    function mid3(a, b, c) {
      let x = a - b;
      let y = b - c;
      let z = a - c;
    
      if (x * y > 0) return b;
      else if (x * z > 0) return c;
      else return a;
    }
 
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
        
        //Range 0 ~ 144
        const NewRedValue = 2 * RedValue + 72;
        const NewGreenValue = 2 * GreenValue + 72;
        const NewBlueValue = 2 * BlueValue + 72;
 
        const FirstPlace = Math.max(NewRedValue,NewGreenValue,NewBlueValue);
        const SecondPlace = mid3(NewRedValue,NewGreenValue,NewBlueValue);
        const ThirdPlace = Math.min(NewRedValue,NewGreenValue,NewBlueValue);

        let AdjustedRed, AdjustedGreen, AdjustedBlue;

        // Check which color corresponds to each place and add the respective values
        if (FirstPlace === NewRedValue) {
          AdjustedRed = NewRedValue + 80;
          if (SecondPlace === NewGreenValue) {
            AdjustedGreen = NewGreenValue + 40;
            AdjustedBlue = NewBlueValue;
          } else {
            AdjustedGreen = NewGreenValue;
            AdjustedBlue = NewBlueValue + 40;
          }
        } else if (FirstPlace === NewGreenValue) {
          AdjustedGreen = NewGreenValue + 80;
          if (SecondPlace === NewRedValue) {
            AdjustedRed = NewRedValue + 40;
            AdjustedBlue = NewBlueValue;
          } else {
            AdjustedRed = NewRedValue;
            AdjustedBlue = NewBlueValue + 40;
          }
        } else {
          AdjustedBlue = NewBlueValue + 80;
          if (SecondPlace === NewRedValue) {
            AdjustedRed = NewRedValue + 40;
            AdjustedGreen = NewGreenValue;
          } else {
            AdjustedRed = NewRedValue;
            AdjustedGreen = NewGreenValue + 40;
          }
        }

        sessionStorage.setItem('rgbValues', JSON.stringify({
          NewRedValue: AdjustedRed,
          NewGreenValue: AdjustedGreen,
          NewBlueValue: AdjustedBlue,
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

        setIsSubmitted(true);
        document.querySelector('.question-container').classList.add('fade-out');
        setTimeout(() => {
          document.querySelector('.background-image-container').classList.add('show');
        }, 500);
      };
 
    return (
      <div className="q-wrapper">
        <div
          className="background-image-container"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: `contain`,
            opacity: isSubmitted ? 1 : 0.5,
            transition: 'opacity 3s ease-in-out',
          }}
        ></div>      
      {!isSubmitted ? (
        <div className='question-container'>
          <div className="survey-container">
            <p className="question-counter">Question {currentQuestion} of {totalQuestions}</p>
            <h2>{questions[currentQuestion - 1]}</h2>
            <div className="response-container">
              <span className="disagree-text">Disagree</span>
              <div className="q-circle-container">
                {[1, 2, 3, 4, 5].map(score => (
                  <div
                    key={score}
                    onClick={() => handleAnswer(score)}
                    className={`q-circle ${selectedScores[currentQuestion - 1] === score - 3 ? "selected" : ""}`}
                  />
                ))}
              </div>
              <span className="agree-text">Agree</span>
            </div>
            {currentQuestion > 1 && (
              <span className="q-back-button" onClick={() => setCurrentQuestion(currentQuestion - 1)}>Back</span>
            )}
            {selectedScores[currentQuestion - 1] !== null && currentQuestion < totalQuestions && !isTransitioning && (
              <span className="q-next-button" onClick={handleNext}>Next</span>
            )}
            {currentQuestion === totalQuestions && (
              <span className="q-submit-button" onClick={handleSubmit}>Submit</span>
            )}
          </div>
        </div>
      ) : (
        <div className="submitted-container">
          <p className='loading-result'>Loading Result{loadingDots}</p>
        </div>
      )}
    </div>
  );
};

export default Questions;