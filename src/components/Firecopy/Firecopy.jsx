import { useNavigate, NavLink } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import './firecopy.css';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/test_logo.png'
import resultfire from '../../assets/result_fire.mp4'
import {db} from "/Users/jeongjeyeong1/Documents/website/src/data/firebase.js";
import { uid } from "uid";
import { ref, set } from "firebase/database";

 
const Firecopy = () => {

    const hexagonData = [
        {
            title: "Helm",
            color: "rgb(0, 255, 0)",
            subTitle: "Independence",
            paragraph: "HELM is the Cognitive Force that allows one to lead a meaningful life and develop a character of depth. It is a path that must be cultivated in order to reach self-actualization and fulfill the calling given to each and every one, covering the full spectrum from the archetypal to the idiosyncratic. Introspection, Integration, and Individuation are the three key components of this",
            belowText: "Emerald Flame.",
        },
        {
          title: "Transcend",
          color: "rgb(255, 0, 0)",
          subTitle: "Volition",
          paragraph: "TRANSCEND is the Cognitive Force that conquers and expands through courage and determination, enabling one to confront and march above one’s own fear and pain. It is the mindset of a warrior, which must be harnessed as a means to exceed preconceived limitations, and perform valiantly under pressure. Passion, Resilience, and Ascendency  are the three key components of this",
          belowText: "Crimson Flame.",
        },
        {
          title: "Reverie",
          color: "rgb(255, 255, 0)",
          subTitle: "Creativity",
          paragraph: "REVERIE is the Cognitive Force that endows novelty and vivacity, blessing one’s mind with beauty and freedom of thought. It is the gift of vivid imagination and innovative creativity, which through playful roaming or cathartic brooding, kindles major breakthroughs and paradigm shifts. Curiosity, Originality, and Artistry are the three key components of this",
          belowText: "Canary Flame.",
        },
        {
          title: "Harmonize",
          color: "rgb(255, 0, 255)",
          subTitle: "Interpersonal Skills",
          paragraph: "HARMONIZE is the Cognitive Force which enriches one’s journey with true companions and mutual cooperative alliance. It is the ability to graciously synergize through genuine bonding, creating positive relationships with others regardless of their personality or background. Sensibility, Eloquence, and Resonance are the three key components of this",
          belowText: "Magenta Flame.",
        },
        {
          title: "Envisage",
          color: "rgb(0, 0, 255)",
          subTitle: "Cogitation",
          paragraph: "ENVISAGE is the Cognitive Force that engenders deep insight and permits one to intuitively fathom the true nature of things. It is the art of abstract thinking and theorization, which shines through in complex decision-making processes that necessitate both analytic and holistic cognition. Reflection, Systemization, and Sagacity are the three key components of this",
          belowText: "Cobalt Flame.",
        },
        {
          title: "Attune",
          color: "rgb(0, 255, 255)",
          subTitle: "Adpatability",
          paragraph: "ATTUNE is the Cognitive Force that modifies and maneuvers with great precision and pertinence, facilitating one to cleverly advance in the face of adversity. It is the tactical acumen and wits of a diplomat, which is essential for navigating through predicaments and role conflicts while maintaining balance and integrity. Perceptivity, Plasticity, and Optimization are the three key components of this",
          belowText: "Cyan Flame.",
        },
      ];

      //navbar
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
    

    //data from file
    const storedResults = sessionStorage.getItem('surveyResults');
    const values = storedResults ? JSON.parse(storedResults) : {};
    const hexagonScores = JSON.parse(sessionStorage.getItem('hexagonScores'));
    const rgbValues = JSON.parse(sessionStorage.getItem('rgbValues'));
    const red = rgbValues?.NewRedValue;
    const green = rgbValues?.NewGreenValue;
    const blue = rgbValues?.NewBlueValue;      

    //references
    const videoRef = useRef(null);
    const textContainerRef = useRef(null);
    const bottomTextRef = useRef(null);
    const svgRef = useRef(null); // Reference for the SVG element
    const leftArrowRef = useRef(null);
    const rightArrowRef = useRef(null);
    const graphRef = useRef(null); // Reference for the graph
    const textLeftRef = useRef(null); // Reference for the text on the left
    const smallTextRef = useRef(null);


    //colors, labels
    const hexagon_labels = ['H','T','R','H','E','A'];
    const legend_labels = ['H','E','A','R','T','H'];
    const customOrder = [0, 4, 3, 5, 1, 2]; // Adjusted for zero-based index
    const colors = ["rgb(0,255,0)", "rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 0, 255)", "rgb(0, 255, 255)"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const rCustomIndex = customOrder[currentIndex];

    //useStates
    const [showContent, setShowContent] = useState(true);
    const [hexagonColor, setHexagonColor] = useState('initialColor');
    const [changeTextColor, setChangeTextColor] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [tilted, setTilted] = useState(false);
    const [textRotationAdjustment, setTextRotationAdjustment] = useState(0);
    const [currentActiveScore, setCurrentActiveScore] = useState('s1');
    const [showBackButton, setShowBackButton] = useState(false); // New state for back button visibility
    const [smallTextContent, setSmallTextContent] = useState('Your small text here.');
    const [showNewContent, setShowNewContent] = useState(false); // State to control the new content visibility
    const [isFirstCheckboxChecked, setIsFirstCheckboxChecked] = useState(false);


    const onRotate = (newScore) => {
        setCurrentActiveScore(newScore);
    };
    
  
    useEffect(() => {
        const video = videoRef.current;
        const textContainer = textContainerRef.current;
        const bottomText = bottomTextRef.current; // Reference to the bottom text
      
        video.style.opacity = 0;
        video.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
          video.style.opacity = 1;
        }, 1000);
      
        // Trigger animations after initial fade-in
        setTimeout(() => {
          video.classList.add('moving');
          textContainer.classList.add('appearing');
        }, 2000);
      
        // Make the bottom text appear after 5 seconds
        setTimeout(() => {
          bottomText.style.opacity = 1; // Change opacity to make it visible
        }, 5000); // Adjusted to 5 seconds for the sequence
      }, []);

      const handleBottomTextClick = () => {
        setShowContent(false); // Hide text container and bottom text
        
        // Wait for fade out animation to complete before showing the SVG
        setTimeout(() => {
          if (svgRef.current) {
            svgRef.current.style.opacity = 1; // Fade in the SVG
          }
        }, 1000);
        setTimeout(() => {
            setHexagonColor(`rgb(${red}, ${green}, ${blue})`); // Set hexagon color to fire color
            setChangeTextColor(true);
          }, 2000);
        setTimeout(() => {
            setTilted(true);
            setRotation(30);  // Set the rotation state to -60
            svgRef.current.classList.add('slide-bottom');
            if (videoRef.current) {
                videoRef.current.classList.add('slide-right');
              }
            textLeftRef.current.style.opacity = 1;
            leftArrowRef.current.style.opacity = 1;
            rightArrowRef.current.style.opacity = 1;
            graphRef.current.style.opacity = 1;
            smallTextRef.current.style.opacity = 1;
        }, 3000);
      };

      const handleSmallTextClick = () => {
            textLeftRef.current.style.opacity = 0;
            leftArrowRef.current.style.opacity = 0;
            rightArrowRef.current.style.opacity = 0;
            graphRef.current.style.opacity = 0;
            smallTextRef.current.style.opacity = 0;
        setSmallTextContent('New small text here.'); // Change small-text content
        setShowBackButton(true); // Show back button
        setTimeout(() => setShowNewContent(true), 1000); // Delay new content appearance
      };
    
      const handleBackButtonClick = () => {
            textLeftRef.current.style.opacity = 1;
            leftArrowRef.current.style.opacity = 1;
            rightArrowRef.current.style.opacity = 1;
            graphRef.current.style.opacity = 1;
            smallTextRef.current.style.opacity = 1;
        setSmallTextContent('Your small text here.'); // Revert small-text content
        setShowBackButton(false); // Hide back button
        setShowNewContent(false); // Hide new content
      };

      const getHexagonPoints = (centerX, centerY, radius) => {
        const points = [];
        const offsetAngle = Math.PI / 3;
        for (let i = 0; i < 6; i++) {
            // Subtracting the angle instead of adding it will generate points in a clockwise order.
            const angle = offsetAngle - (Math.PI / 3) * i;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            points.push({ x, y });
        }
        return points;
      };
      const outerHexagonPoints = getHexagonPoints(200, 200, 200);
      const innerHexagonPoints = getHexagonPoints(200, 200, 200).map((point, originalIndex) => {
        // Find the custom index for the original index based on the custom sequence
        const customIndex = customOrder[originalIndex];
        // Use the customIndex to access the correct score from hexagonScores
        const scale = hexagonScores[`s${customIndex + 1}`] / 36; // +1 to adjust for the score naming (s1, s2, ...)
        return {
          x: 200 + (point.x - 200) * scale,
          y: 200 + (point.y - 200) * scale,
        };
      });

      const rotateClockwise = () => {
        const newRotation = rotation - 60;
        setRotation(newRotation);
        const newIndex = (currentIndex - 1 + 6) % 6;
        setCurrentIndex(newIndex);
        setTextRotationAdjustment(prevAdjustment => prevAdjustment);  // adjust by +60 for clockwise
    };
    
    const rotateCounterClockwise = () => {
        const newRotation = rotation + 60;
        setRotation(newRotation);
        const newIndex = (currentIndex + 1) % 6;
        setCurrentIndex(newIndex);
        setTextRotationAdjustment(prevAdjustment => prevAdjustment);  // adjust by -60 for counter-clockwise
    };

    const [email, setEmail] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true); // New state for email validity

    const validateEmail = (email) => {
        // Regular expression for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    //email register
    const handleEmailChange = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput);
        setIsValidEmail(validateEmail(emailInput));    }; 

    const handleRegister = () => {
        if (!validateEmail(email)) {
            setIsValidEmail(false);
            return; // Stop the registration process if the email is not valid
        }
        const uuid = uid();
        // Save email to Firebase
        set(ref(db, "emails/" + uuid), {
            email,
            uuid,
        })
        .then(() => {
            setIsRegistered(true);
            setEmail(""); // Clear the email input field
            // Handle success (e.g., show notification)
        })
        .catch(error => {
            // Handle error
            console.error("Error saving email: ", error);
        });
    };
    const handleFirstCheckboxChange = (event) => {
        setIsFirstCheckboxChecked(event.target.checked);
      };


    return (
    <div className='firecopy-container'>
        <div className = "f-navbar">
            <div className = "f-navbar-links_logo">
                <NavLink to='/'>
                <img src={logo} height={80} alt = "logo"></img>
                </NavLink>
            </div>
        <div className='f-navbar-lang'>
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
      <div className='firecopy'>
        <div className="f-video-container" ref={videoRef}>
          <video className="f-video" autoPlay loop muted>
            <source src={resultfire} type="video/mp4" />
          </video>
        </div>
        <div className={`f-text-container ${!showContent ? 'fading' : ''}`} ref={textContainerRef}>
            <p>Your long text...</p>
        </div>
        <div className={`bottom-text ${!showContent ? 'fading' : ''}`} ref={bottomTextRef} onClick={handleBottomTextClick}>
            see details →
        </div>
        <div className="arrow left-arrow" ref={leftArrowRef} onClick={rotateClockwise}>←</div>
        <div className="arrow right-arrow" ref={rightArrowRef} onClick={rotateCounterClockwise}>→</div>
        <div className={`svg-container ${showContent ? 'hidden' : ''}`} 
            ref={svgRef}
            style={{transform: `perspective(1000px) rotate3d(0, -2.747, 1, ${rotation}deg)`}}>
            <svg className={tilted ? 'f-tilted' : '' }>
                {/* Outer grey hexagon */}
                <polygon
                points={outerHexagonPoints.map(p => `${p.x},${p.y}`).join(" ")}
                stroke={hexagonColor}
                strokeWidth="2"
                fill="#1a1a1a"
                />
                {/* Inner shape */}
                <polygon
                points={innerHexagonPoints.map(p => `${p.x},${p.y}`).join(" ")}
                fill={hexagonColor}
                stroke="darkgrey"
                strokeWidth="2"
                />
                {/* Draw lines connecting opposite */}
                <line x1={outerHexagonPoints[0].x} y1={outerHexagonPoints[0].y} x2={outerHexagonPoints[3].x} y2={outerHexagonPoints[3].y} stroke={hexagonColor} />
                <line x1={outerHexagonPoints[1].x} y1={outerHexagonPoints[1].y} x2={outerHexagonPoints[4].x} y2={outerHexagonPoints[4].y} stroke={hexagonColor} />
                <line x1={outerHexagonPoints[2].x} y1={outerHexagonPoints[2].y} x2={outerHexagonPoints[5].x} y2={outerHexagonPoints[5].y} stroke={hexagonColor} />
                
                {/* labels */}
                    {
                outerHexagonPoints.map((point, i) => (
                    <text 
                        x={point.x - 10} 
                        y={point.y + 10} 
                        fontSize="24" 
                        fill={changeTextColor ? colors[i] : "white"}
                        key={i}
                        transform={`translate(${point.x} ${point.y}) 
                            rotate(${-rotation + textRotationAdjustment}) 
                            translate(${-point.x} ${-point.y})`}
                    >
                        {hexagon_labels[i]}
                    </text>
                ))
                }
            </svg>
        </div>
        <div className="text-left" ref={textLeftRef}>
            <p className='left-line1' style={{color: hexagonData[currentIndex].color}}>{hexagonData[currentIndex].title}</p>
            <p className='left-line2'>{hexagonData[currentIndex].subTitle}</p>
            <p className='left-line3'>{hexagonData[currentIndex].paragraph}<span style={{color: hexagonData[currentIndex].color}}>{hexagonData[currentIndex].belowText}</span></p>
            <div className="f-main-progress-wrapper">
                <div className="f-main-progress-container">
                <div className={`f-main-progress-fill f-color-${rCustomIndex}`} style={{ width: `${hexagonScores[`s${rCustomIndex + 1}`]/36*100}%` }}>
                </div>
                </div>
                <p className="f-main-progress-percentage">{Math.round(hexagonScores[`s${rCustomIndex + 1}`]/36*100)}%</p>
            </div>
            <p className='left-lastline1'>※ Force Quotient (FQ)</p>
            <p className='left-lastline2'>Keep in mind that the result does not reflect your absolute value, but is rather a comparative assessment of yourself within your perspective of the world. For instance, low scores may indicate that you have a high expectation of yourself, while high scores indicate the opposite.</p>
        </div>
        {showNewContent && (
        <div className="f-new-content">
          <div className="f-left-content">
            <div className="f-colored-square" style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></div>
            <p>{`(${red}, ${green}, ${blue})`}</p>
            <div className="color-square" ></div>
            <button className="text-button">Share Fire</button>
          </div>
          <div className="f-right-content">
            <p>Would you like to get a copy of your results? Register now and start your journey with HEARTH.</p>
        
        <div className="f-inputBox">
             <input
                type="text"
                placeholder={t("community.email")}
                value={email}
                onChange={handleEmailChange}
                id="f-inputID"
                className={!isValidEmail ? 'invalid' : ''}
            />                
                <p
                className={`register ${isFirstCheckboxChecked ? 'clickable' : 'disabled'}`}
                onClick={!isRegistered && isFirstCheckboxChecked ? handleRegister : null}
            >
                {isRegistered ? t("community.registered") : t("community.register")}
            </p>
                </div>
                    {!isValidEmail && <p className="error-message">{t("community.error_message")}</p>}          

        <div className='check-text'>
                <input
                type="checkbox"
                id="check1"
                className="custom-checkbox"
                checked={isFirstCheckboxChecked}
                onChange={handleFirstCheckboxChange}
            />              
            <label for="check1" className="checkbox-label"> I have reviewed and agree to HEARTH’s Privacy Policy (required)</label>
            </div>
            <div className='check-text'>
              <input type="checkbox" id="check2"  className="custom-checkbox" />
              <label for="check2" className="checkbox-label"> I agree to receive general emails and product offers from HEARTH (optional)</label>
            </div>
          </div>
        </div>
      )}
        <div className="f-legend-container" ref={graphRef}>
            <ul className="f-score-list">
            {['s1', 's2', 's3', 's4', 's5', 's6'].map((score, originalIndex) => {
                const customIndex = customOrder.indexOf(originalIndex);
                return (
                    <li key={score} className={currentIndex === customIndex ? "active " : ""}>
                        <p>{legend_labels[originalIndex]}</p>
                        <div className="f-progress-container">
                            <div className={`f-progress-fill f-color-${originalIndex}`} style={{ width: `${hexagonScores[score] / 36 * 100}%` }}></div>
                        </div>
                    </li>
                        );
            })}
            </ul>
        </div>
        <div className="f-small-text" ref={smallTextRef} onClick={handleSmallTextClick} style={{opacity: 0}}>
            {smallTextContent}
        </div>
        {showBackButton && (
        <button className="f-back-button" onClick={handleBackButtonClick}>
          Back
        </button>
      )}
      
    </div>
</div>
    );
  };
  
export default Firecopy