import React from 'react';
import './questions.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getQuestions } from '../../data.js';
import {db} from "../../firebase.js";
import { uid } from "uid";
import { ref, set, push } from "firebase/database";
import logo from '../../assets/test_logo.png'
import england_flag from '../../assets/england.png';
import korea_flag from '../../assets/korea.png';
import japan_flag from '../../assets/japan.png';
import navbar_menu from '../../assets/navbar_menu.png'
import close_btn from '../../assets/close_btn.png'
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_x from '../../assets/icon_x.png'
import icon_threads from '../../assets/icon_threads.png'
import email from '../../assets/email.png'

const Questions = () => {
  const navigate = useNavigate();
 
  //language
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    setIsOpen(false);
  };
 
  const getSelectedFlagImage = () => {
    switch (selectedLanguage) {
      case 'en':
        return england_flag;
      case 'ja':
        return japan_flag;
      case 'ko':
        return korea_flag;
      default:
        return england_flag;
    }
  }

  const getSelectedFlagText = () => {
    switch (selectedLanguage) {
      case 'en':
        return 'ENG';
      case 'ja':
        return '日本語';
      case 'ko':
        return '한국어';
      default:
        return 'ENG';
    }
  }
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    navigate('/test');
  };

  const handleBlogClick = () => {
    navigate('/blog');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const handleCopyToClipboard = () => {
    const textToCopy = 'hearthisnear@gmail.com';

    // Copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopiedToClipboard(true);

        // Clear the message after 2 seconds
        setTimeout(() => {
          setCopiedToClipboard(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  };

  return (
      <div className= "questions-page">
        <div className = "q-navbar">
          <div className = "q-navbar-links_logo">
            <NavLink to='/'>
              <img src={logo} height={80} alt = "logo"></img>
            </NavLink>
          </div>
          <div className="navbar-menu" onClick={toggleMobileMenu}>
        <img src={navbar_menu} width={30} alt = "logo"></img>
      </div>
      {isMobileMenuOpen && (
        <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'fade-in' : 'fade-out'}`}>
          <div className="navbar-mobile-menu_header">
            <div className="navbar-mobile-menu_close" onClick={toggleMobileMenu}>
              <img src={close_btn} alt = "close"></img>
            </div>
          </div>
          <div className="navbar-mobile-menu_content">
            <NavLink to='/'><p className='mobile-blog-click'>HOME</p></NavLink>
            <p className='mobile-blog-click' onClick={handleBlogClick}>{t("navbar.blog")}</p>
            <button type="button" className='m-nav-button' onClick={handleButtonClick}>{t("navbar.take_test")}</button>
            <div className="m-navbar-icons">
              <img src = {icon_instagram} className="m-navbar-icon"/>
              <img src = {icon_facebook} className="m-navbar-icon"/>
              <img src = {icon_x} className="m-navbar-icon"/>
              <img src = {icon_threads} className="m-navbar-icon"/>
              <img src={email}
                style={{ width: '40px', cursor: 'pointer' }}
                className="m-navbar-icon"
                onClick={handleCopyToClipboard}
                alt="Copy to Clipboard"
              />     
              {copiedToClipboard && (
                <div style={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'green', color: 'white', padding: '5px 10px', borderRadius: '4px' }}>
                  Copied to Clipboard!
                </div>
              )}               </div>
            <div className="dropdown">
                  <div className="q-dropdown-toggle" onClick={toggleDropdown}>
                    <p >Language: {getSelectedFlagText()}</p>
                    <i className="dropdown-arrow"></i>
                  </div>
                  {isOpen && (
                    <ul className="dropdown-menu">
                      <li onClick={() => handleChangeLanguage('en')}>
                        <span>English</span>
                      </li>
                      {/* <li onClick={() => handleChangeLanguage('ja')}>
                        <span>日本語</span>
                      </li> */}
                      <li onClick={() => handleChangeLanguage('ko')}>
                        <span>한국어</span>
                      </li>
                    </ul>
                  )}
            </div>
          </div>
        </div>
      )}
          {/* language */}
          <div className='q-navbar-lang'>
                <div className="q-dropdown">
                  <div className="q-dropdown-toggle" onClick={toggleDropdown}>
                    <img src={getSelectedFlagImage()} alt="Selected Language" className="flag-image" />
                    <i className="q-dropdown-arrow"></i>
                  </div>
                  {isOpen && (
                    <ul className="q-dropdown-menu">
                      <li onClick={() => handleChangeLanguage('en')}>
                        <span>English</span>
                        <img src={england_flag} alt="English" className="flag-image" />
                      </li>
                      {/* <li onClick={() => handleChangeLanguage('ja')}>
                        <span>日本語</span>
                        <img src={japan_flag} alt="Japanese" className="flag-image" />
                      </li>  */}
                      <li onClick={() => handleChangeLanguage('ko')}>
                        <span>한국어</span>
                        <img src={korea_flag} alt="Korean" className="flag-image" />
                      </li>
                    </ul>
                  )}
                </div>
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

    const totalQuestions = 54;
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

        //Test Result
        const sums = [
          { label: 'a', value: Independence},
          { label: 'b', value: Cogitation},
          { label: 'c', value: Adaptability},
          { label: 'd', value: Creativity},
          { label: 'e', value: Volition},
          { label: 'f', value: Interpersonal}
        ];

        const maxPriority = ['e', 'a', 'b', 'c', 'f', 'd'];
        const minPriority = ['d', 'f', 'c', 'b', 'a', 'e'];

        // Custom sort function for finding maximum
        const findMax = (a, b) => {
          if (a.value > b.value) return -1;
          if (a.value < b.value) return 1;
          return maxPriority.indexOf(a.label) - maxPriority.indexOf(b.label);
        };

        // Custom sort function for finding minimum
        const findMin = (a, b) => {
          if (a.value < b.value) return -1;
          if (a.value > b.value) return 1;
          return minPriority.indexOf(a.label) - minPriority.indexOf(b.label);
        };

        // Determine the maximum and minimum
        const max = sums.sort(findMax)[0].label;
        const min = sums.sort(findMin)[0].label;

        sessionStorage.setItem('maxminResult', JSON.stringify({
          max, min
        }));

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


      //generate unique fire code
      const generateUniqueCode = () => {
        const hexCode = `#${NewRedValue.toString(16).padStart(2, '0')}${NewGreenValue.toString(16).padStart(2, '0')}${NewBlueValue.toString(16).padStart(2, '0')}`;
        const randomChars = generateRandomChars(4);
        return `${hexCode}-${randomChars}`;
      };
      
      const generateRandomChars = (length) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
      };

        //save data to user database
        const userAnswersRef = ref(db, 'userAnswers');

        const uniqueCode = generateUniqueCode();

        sessionStorage.setItem('uniqueCode', uniqueCode);
      
        const userAnswers = {
          answers: selectedScores,
          code: uniqueCode,
          rgb: `rgb(${AdjustedRed}, ${AdjustedGreen}, ${AdjustedBlue})`,
        };
      
        push(userAnswersRef, userAnswers)
          .then((snapshot) => {
            const userId = snapshot.key;
            console.log('User answers stored successfully with ID:', userId);
          })
          .catch((error) => {
            console.error('Error storing user answers:', error);
          });
      };
 
    return (
      <div className="q-wrapper">
        <div
          className="background-image-container"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: `contain`,
            opacity: isSubmitted ? 0.8 : 0.3,
            transition: 'opacity 3s ease-in-out',
          }}  
        ></div>      
      {!isSubmitted ? (
        <div className='question-container'>
          <div className="survey-container">
            <p className="question-counter">Question {currentQuestion} of {totalQuestions}</p>
            <p className='question-text'>{questions[currentQuestion - 1]}</p>
            <div className="response-container">
              <span className="disagree-text">{t("questions.strongly")}<br></br>{t("questions.disagree")}</span>
              <div className="q-circle-container">
                {[1, 2, 3, 4, 5].map(score => (
                  <div
                    key={score}
                    onClick={() => handleAnswer(score)}
                    className={`q-circle ${selectedScores[currentQuestion - 1] === score - 3 ? "selected" : ""}`}
                  />
                ))}
              </div>
              <span className="agree-text">{t("questions.strongly")}<br></br>{t("questions.agree")}</span>
            </div>
            {currentQuestion > 1 && (
              <span className="q-back-button" onClick={() => setCurrentQuestion(currentQuestion - 1)}>{t("questions.back")}</span>
            )}
            {selectedScores[currentQuestion - 1] !== null && currentQuestion < totalQuestions && !isTransitioning && (
              <span className="q-next-button" onClick={handleNext}>{t("questions.next")}</span>
            )}
            {currentQuestion === totalQuestions && selectedScores[currentQuestion - 1] !== null &&(
              <span className="q-submit-button" onClick={handleSubmit}>{t("questions.submit")}</span>
            )}
          </div>
        </div>
      ) : (
        <div className="submitted-container">
          <p className='loading-result'>{t("questions.loading")}{loadingDots}</p>
        </div>
      )}
    </div>
  );
};

export default Questions;