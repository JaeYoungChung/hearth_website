import { useNavigate, NavLink } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import './firecopy.css';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/test_logo.png'
import resultfire from '../../assets/result_fire.mp4'
import arrowright from '../../assets/arrow_right.png'
import arrowleft from '../../assets/arrow_left.png'
import rotateRight from '../../assets/right_arrow.png'
import rotateLeft from '../../assets/left_arrow.png'
import {db} from "/Users/jeongjeyeong1/Documents/website/src/data/firebase.js";
import { uid } from "uid";
import { ref, set } from "firebase/database";
import { getResults } from '../../data.js';
import england_flag from '../../assets/england.png';
import korea_flag from '../../assets/korea.png';
import japan_flag from '../../assets/japan.png';
import navbar_menu from '../../assets/navbar_menu.png'
import close_btn from '../../assets/close_btn.png'
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_x from '../../assets/icon_x.png'
import email from '../../assets/email.png'
import read_more from '../../assets/read_more.png'
import close_result from '../../assets/close_result.png'
import html2canvas from 'html2canvas';
import example_fire from '../../assets/example_fire.png'
import example_fire2 from '../../assets/example_fire.svg'
import emailjs from 'emailjs-com';

const Firecopy = () => {

    const hexagonData = [
        {
            title: "Helm",
            color: "rgb(0, 255, 0)",
            subTitle: "Independence",
            paragraph: "HELM is the Cognitive Force that allows one to lead a meaningful life and develop a character of depth. It is a path that must be cultivated in order to reach self-actualization and fulfill the calling given to each and every one, covering the full spectrum from the archetypal to the idiosyncratic. Introspection, Integration, and Individuation are the three key components of this ",
            belowText: "Emerald Flame.",
        },
        {
          title: "Transcend",
          color: "rgb(255, 0, 0)",
          subTitle: "Volition",
          paragraph: "TRANSCEND is the Cognitive Force that conquers and expands through courage and determination, enabling one to confront and march above one’s own fear and pain. It is the mindset of a warrior, which must be harnessed as a means to exceed preconceived limitations, and perform valiantly under pressure. Passion, Resilience, and Ascendency  are the three key components of this ",
          belowText: "Crimson Flame.",
        },
        {
          title: "Reverie",
          color: "rgb(255, 255, 0)",
          subTitle: "Creativity",
          paragraph: "REVERIE is the Cognitive Force that endows novelty and vivacity, blessing one’s mind with beauty and freedom of thought. It is the gift of vivid imagination and innovative creativity, which through playful roaming or cathartic brooding, kindles major breakthroughs and paradigm shifts. Curiosity, Originality, and Artistry are the three key components of this ",
          belowText: "Canary Flame.",
        },
        {
          title: "Harmonize",
          color: "rgb(255, 0, 255)",
          subTitle: "Interpersonal Skills",
          paragraph: "HARMONIZE is the Cognitive Force which enriches one’s journey with true companions and mutual cooperative alliance. It is the ability to graciously synergize through genuine bonding, creating positive relationships with others regardless of their personality or background. Sensibility, Eloquence, and Resonance are the three key components of this ",
          belowText: "Magenta Flame.",
        },
        {
          title: "Envisage",
          color: "rgb(0, 0, 255)",
          subTitle: "Cogitation",
          paragraph: "ENVISAGE is the Cognitive Force that engenders deep insight and permits one to intuitively fathom the true nature of things. It is the art of abstract thinking and theorization, which shines through in complex decision-making processes that necessitate both analytic and holistic cognition. Reflection, Systemization, and Sagacity are the three key components of this ",
          belowText: "Cobalt Flame.",
        },
        {
          title: "Attune",
          color: "rgb(0, 255, 255)",
          subTitle: "Adpatability",
          paragraph: "ATTUNE is the Cognitive Force that modifies and maneuvers with great precision and pertinence, facilitating one to cleverly advance in the face of adversity. It is the tactical acumen and wits of a diplomat, which is essential for navigating through predicaments and role conflicts while maintaining balance and integrity. Perceptivity, Plasticity, and Optimization are the three key components of this ",
          belowText: "Cyan Flame.",
        },
      ];

    //navbar
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/test');
    };
  
    const handleBlogClick = () => {
      navigate('/blog');
    };

    //language
    const [t, i18n] = useTranslation("global");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');

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

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

    //data from file
    const storedResults = sessionStorage.getItem('surveyResults');
    const values = storedResults ? JSON.parse(storedResults) : {};
    const hexagonScores = JSON.parse(sessionStorage.getItem('hexagonScores'));
    const rgbValues = JSON.parse(sessionStorage.getItem('rgbValues'));
    const red = rgbValues?.NewRedValue;
    const green = rgbValues?.NewGreenValue;
    const blue = rgbValues?.NewBlueValue;     
    const maxminResult = sessionStorage.getItem('maxminResult');
    const uniqueCode = sessionStorage.getItem('uniqueCode');
    let textToShow = 'No data found';
    if (maxminResult) {
      const { max, min } = JSON.parse(maxminResult);
      const combinationTexts = getResults(); // Use getResults here
      const key = `${max}-${min}`;
      textToShow = combinationTexts[key] || 'No matching text found'; // Fallback text if key not found
    }

    //references
    const videoRef = useRef(null);
    const textContainerRef = useRef(null);
    const bottomTextRef = useRef(null);
    const svgRef = useRef(null); // Reference for the SVG element
    const svgRef2 = useRef(null); // Reference for the SVG element
    const leftArrowRef = useRef(null);
    const rightArrowRef = useRef(null);
    const viewRef = useRef(null);
    const graphRef = useRef(null); // Reference for the graph
    const textLeftRef = useRef(null); // Reference for the text on the left
    const textLeftLinesRef = useRef(null);
    const forceQuotient = useRef(null);
    const smallTextRef = useRef(null);


    //colors, labels
    const hexagon_labels = ['H','T','R','H','E','A'];
    const legend_labels = ['H','E','A','R','T','H'];
    const customOrder = [0, 4, 3, 5, 1, 2]; // Adjusted for zero-based index
    const colors = ["rgb(0,255,0)", "rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 0, 255)", "rgb(0, 255, 255)"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const rCustomIndex = customOrder[currentIndex];

    //useStates
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showContent, setShowContent] = useState(true);
    const [hexagonColor, setHexagonColor] = useState('initialColor');
    const [changeTextColor, setChangeTextColor] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [mobileRotation, setMobileRotation] = useState(0);
    const [tilted, setTilted] = useState(false);
    const [tiltedsvg, setTiltedSVG] = useState(false);
    const [textRotationAdjustment, setTextRotationAdjustment] = useState(0);
    const [slideBottom, setSlideBottom] = useState(false);
    const [slideBottomBig, setSlideBottomBig] = useState(false);
    const [currentActiveScore, setCurrentActiveScore] = useState('s1');
    const [showBackButton, setShowBackButton] = useState(false);
    const [smallTextContent, setSmallTextContent] = useState('finish test');
    const [showNewContent, setShowNewContent] = useState(false);
    const [isFirstCheckboxChecked, setIsFirstCheckboxChecked] = useState(false);
    const [rotationButton, setRotationButton] = useState(70);
    const [isCheckboxTextBlinking, setIsCheckboxTextBlinking] = useState(false);


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
          // if (svgRef.current) {
          //   if (window.matchMedia('(max-width: 768px)').matches) {
          //     svgRef.current.style.opacity = 0.5; // Set opacity to 0.5 for mobile screens
          //   } else {
          //     svgRef.current.style.opacity = 1; // Set opacity to 1 for larger screens
          //   }
          // }
          svgRef.current.style.opacity = 0.5;
        }, 1000);
        setTimeout(() => {
            setHexagonColor(`rgb(${red}, ${green}, ${blue})`); // Set hexagon color to fire color
            setChangeTextColor(true);
          }, 2000);
        setTimeout(() => {
            setTiltedSVG(true);
            setTilted(true);
            setRotation(30);  // Set the rotation state to -60
            setMobileRotation(30);
            if (svgRef2.current) {
              svgRef2.current.classList.add('slide-bottom');
            }
            if (videoRef.current) {
                videoRef.current.classList.add('slide-right');
              }
            textContainerRef.current.classList.add('hidden');
            textLeftRef.current.style.opacity = 1;
            if (window.matchMedia('(max-width: 768px)').matches) {
              textLeftLinesRef.current.style.opacity = 0;
            }
            svgRef.current.style.opacity = 1;
            forceQuotient.current.style.opacity = 1;
            leftArrowRef.current.style.opacity = 1;
            rightArrowRef.current.style.opacity = 1;
            graphRef.current.style.opacity = 1;
            smallTextRef.current.style.opacity = 1;
            smallTextRef.current.style.pointerEvents = 'auto';
            bottomTextRef.current.style.pointerEvents = 'none';
        }, 3000);
      };

      const handleSmallTextClick = () => {
            textLeftRef.current.style.opacity = 0;
            leftArrowRef.current.style.opacity = 0;
            rightArrowRef.current.style.opacity = 0;
            graphRef.current.style.opacity = 0;
            smallTextRef.current.style.opacity = 0;
            smallTextRef.current.style.pointerEvents = 'none';
            bottomTextRef.current.style.pointerEvents = 'auto';
            viewRef.current.style.opacity = 0;
            svgRef.current.style.opacity = 0;
            if (window.matchMedia('(max-width: 768px)').matches) {
              videoRef.current.style.opacity = 0.5;}
            videoRef.current.classList.add('slide-bottom-big');
            setSmallTextContent('finish test'); // Change small-text content
            setShowBackButton(true); // Show back button
            setTimeout(() => setShowNewContent(true), 1000); // Delay new content appearance
      };
    
      const handleBackButtonClick = () => {
            textLeftRef.current.style.opacity = 1;
            leftArrowRef.current.style.opacity = 1;
            rightArrowRef.current.style.opacity = 1;
            graphRef.current.style.opacity = 1;
            smallTextRef.current.style.opacity = 1;
            svgRef.current.style.opacity = 1;
            videoRef.current.style.opacity = 1;
            smallTextRef.current.style.pointerEvents = 'auto';
            bottomTextRef.current.style.pointerEvents = 'none';
            videoRef.current.classList.remove('slide-bottom-big');
            setSmallTextContent('finish test'); // Revert small-text content
            setShowBackButton(false); // Hide back button
            setShowNewContent(false); // Hide new content
      };

      const handleReadMoreClick = () => {
        //fire opacity darkens
        videoRef.current.style.opacity = 0.5;
        
        //hexagon reverse tilt
        setRotationButton(0);
        setMobileRotation(30);

        //legend goes away, force quotient goes away, finish test goes away
        graphRef.current.style.opacity = 0;
        forceQuotient.current.style.opacity = 0;
        smallTextRef.current.style.opacity = 0;

        //arrow show
        viewRef.current.style.opacity = 1;

        //show each cf
        textLeftLinesRef.current.style.opacity = 1;
        
      }

      const closeResult = () => {
        videoRef.current.style.opacity = 1;
        setRotationButton(30);
        setMobileRotation(0);
        graphRef.current.style.opacity = 1;
        forceQuotient.current.style.opacity = 1;
        smallTextRef.current.style.opacity = 1;
        viewRef.current.style.opacity = 0;
        textLeftLinesRef.current.style.opacity = 0;             
      }

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

    const rotateMobileClockwise = () => {
      const newMobileRotation = mobileRotation - 60;
      setMobileRotation(newMobileRotation);
      const newIndex = (currentIndex - 1 + 6) % 6;
      setCurrentIndex(newIndex);
      setTextRotationAdjustment(prevAdjustment => prevAdjustment);
            
      // Set the --mobile-rotation CSS variable on the SVG element
      // svgRef.current.style.setProperty('--mobile-rotation', `${mobileRotation}deg`);
    };
    
    const rotateMobileCounterClockwise = () => {
      const newMobileRotation = mobileRotation + 60;
      setMobileRotation(newMobileRotation);
      const newIndex = (currentIndex + 1) % 6;
      setCurrentIndex(newIndex);
      setTextRotationAdjustment(prevAdjustment => prevAdjustment);
      
      // Set the --mobile-rotation CSS variable on the SVG element
      // svgRef.current.style.setProperty('--mobile-rotation', `${mobileRotation}deg`);
    };

    const [email, setEmail] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true); // New state for email validity

    const validateEmail = (email) => {
        // Regular expression for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    //email assets
    const testResultCaption = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
    const testResultColor = `rgb(${red}, ${green}, ${blue})`;
    const score1 = Math.round(hexagonScores[0] / 36 * 100);
    const score2 = Math.round(hexagonScores[1] / 36 * 100);
    const score3 = Math.round(hexagonScores[2] / 36 * 100);
    const score4 = Math.round(hexagonScores[3] / 36 * 100);
    const score5 = Math.round(hexagonScores[4] / 36 * 100);
    const score6 = Math.round(hexagonScores[5] / 36 * 100);
    const score1Width = `${hexagonScores[0]/36*100}%`
    const svgElement = svgRef.current;


    //email register
    const handleEmailChange = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput);
        setIsValidEmail(validateEmail(emailInput));    
      }; 

    const handleRegister = () => {
        if (!validateEmail(email)) {
            setIsValidEmail(false);
            return; // Stop the registration process if the email is not valid
        }
        if (!isFirstCheckboxChecked) {
          // Blink the checkbox text if the checkbox is not checked
          setIsCheckboxTextBlinking(true);
          setTimeout(() => {
            setIsCheckboxTextBlinking(false);
          }, 500);
          return; // Stop the registration process if the checkbox is not checked
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

      // Capture the SVG as an image
      const svgElement = svgRef.current;
      html2canvas(svgElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        // Send email using EmailJS
        const templateParams = {
          to_email: email,
          testResultText: textToShow,
          testResultCaption: uniqueCode,
          testResultColor: testResultColor,
          rCustomIndex: rCustomIndex,
          // hexagonScores: hexagonScores.map(score => score / 36 * 100),
          score1: score1,
          score2: score2,
          attachment: imgData, // Add the SVG image as an attachment
          // Add other variables from your React code here
        };

        emailjs.send('service_t6e2r49', 'template_wni0z5c', templateParams, 'kD2ONhCaOmnXc8Ami')
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });
      });
    })
    .catch(error => {
      console.error("Error saving email: ", error);
    });
};
    const handleFirstCheckboxChange = (event) => {
        setIsFirstCheckboxChecked(event.target.checked);
      };
    
      const [copiedToClipboard, setCopiedToClipboard] = useState(false);

      const handleCopyToClipboard = () => {
        const textToCopy = 'cycologically@gmail.com';
    
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

    //save results to device
    const handleSaveFire = () => {
      const firstDesign = document.getElementById('first-design');
      const secondDesign = document.getElementById('second-design');
    
      html2canvas(firstDesign).then((canvas) => {
        const firstImage = canvas.toDataURL('image/png');
        const firstLink = document.createElement('a');
        firstLink.href = firstImage;
        firstLink.download = 'first_save_fire.png';
        firstLink.click();
      });
    
      html2canvas(secondDesign).then((canvas) => {
        const secondImage = canvas.toDataURL('image/png');
        const secondLink = document.createElement('a');
        secondLink.href = secondImage;
        secondLink.download = 'second_save_fire.png';
        secondLink.click();
      });
    };

    return (
    <div className='firecopy-container'>
        <div className = "f-navbar">
            <div className = "f-navbar-links_logo">
                <NavLink to='/'>
                  <img className='f-logo' src={logo} height={80} alt = "logo"></img>
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
            <p className='mobile-blog-click' onClick={handleBlogClick}>{t("navbar.blog")}</p>
            <button type="button" className='m-nav-button' onClick={handleButtonClick}>{t("navbar.take_test")}</button>
            <div className="m-navbar-icons">
              <img src = {icon_instagram} className="m-navbar-icon"/>
              <img src = {icon_facebook} className="m-navbar-icon"/>
              <img src = {icon_x} className="m-navbar-icon"/>
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
              )}             
            </div>
            <div className="m-dropdown">
                  <div className="q-dropdown-toggle" onClick={toggleDropdown}>
                    <p >Language: {getSelectedFlagText()}</p>
                    <i className="dropdown-arrow"></i>
                  </div>
                  {isOpen && (
                    <ul className="dropdown-menu">
                      <li onClick={() => handleChangeLanguage('en')}>
                        <span>English</span>
                        <img src={england_flag} alt="English" className="flag-image" />
                      </li>
                      <li onClick={() => handleChangeLanguage('ja')}>
                        <span>日本語</span>
                        <img src={japan_flag} alt="Japanese" className="flag-image" />
                      </li>
                      <li onClick={() => handleChangeLanguage('ko')}>
                        <span>한국어</span>
                        <img src={korea_flag} alt="Korean" className="flag-image" />
                      </li>
                    </ul>
                  )}
            </div>
          </div>
        </div>
      )}
        <div className='f-navbar-lang'>
               <div className="q-dropdown">
                  <div className="q-dropdown-toggle" onClick={toggleDropdown}>
                    <img src={getSelectedFlagImage()} alt="Selected Language" className="flag-image" />
                    <i className="q-dropdown-arrow"></i>
                  </div>
                  {isOpen && (
                    <ul className="q-dropdown-menu">
                      <li onClick={() => handleChangeLanguage('en')}>
                        <img src={england_flag} alt="English" className="flag-image" />
                        <span>English</span>
                      </li>
                      <li onClick={() => handleChangeLanguage('ja')}>
                        <img src={japan_flag} alt="Japanese" className="flag-image" />
                        <span>日本語</span>
                      </li> 
                      <li onClick={() => handleChangeLanguage('ko')}>
                        <img src={korea_flag} alt="Korean" className="flag-image" />
                        <span>한국어</span>
                      </li>
                    </ul>
                  )} 
                </div>
            <p className='blog-click' style={{marginLeft: '20px'}} onClick={handleBlogClick}>{t("navbar.blog")}</p>
            <button type="button" className='nav-button' onClick={handleButtonClick}>{t("navbar.take_test")}</button>
            </div> 
        </div>
      <div className='firecopy'>
          <div className="f-video-container" ref={videoRef}>
            <video className="f-video" autoPlay loop muted>
                <source src={resultfire} type="video/webm" />
            </video>
            <div
                className="color-overlay"
                style={{ 
                '--overlay-color': `rgb(${red}, ${green}, ${blue})`,
                }}
            />
            </div>
            <div className='f-column'>
              <div className={`f-text-container ${!showContent ? 'fading' : ''}`} ref={textContainerRef}>
                  <p>To. O</p><br></br>
                  <p>{textToShow}</p><br></br>
                  <p className='third-line'>Sincerely, HEARTH</p>
              </div>
              <div
                className={`bottom-text ${!showContent ? 'fading' : ''}`}
                ref={bottomTextRef}
                onClick={handleBottomTextClick}
                style={{
                  fontSize: 16,
                  display: 'flex',
                  alignItems: 'center',
                }}
                >
                <span>see details</span>
                <img src={arrowright} alt="Arrow Right" style={{ marginLeft: '5px', width: '22px'}} />
              </div>
            </div>
            <img src={rotateLeft} className="arrow left-arrow" ref={leftArrowRef} onClick={rotateClockwise}></img>
            <img src={rotateRight} className="arrow right-arrow" ref={rightArrowRef} onClick={rotateCounterClockwise}></img>
          <div className={tiltedsvg ? 'tilted-svg' : ''}>
          <div
            className={`f-svg-container ${showContent ? 'hidden' : ''} ${rotation !== 0 ? 'rotate' : ''}`}
            ref={svgRef}
            style={{ transform: rotationButton !== 0 ? `perspective(1000px) rotate3d(0, -2.747, 1, ${rotation}deg)` : null }}
          >
              <svg
                className={tilted ? (rotationButton !== 0) ? 'f-tilted' : 'f-tilted-reset' :''}
                style={{ transform: rotationButton === 0 ? `translate(0px, -350px) scale(70%) rotate3d(0, 0, 1, ${mobileRotation}deg)` : null}}
              >
                {/* Outer grey hexagon */}
                <polygon
                points={outerHexagonPoints.map(p => `${p.x},${p.y}`).join(" ")}
                stroke={hexagonColor}
                strokeWidth="2"
                fill= "#1a1a1a"
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
                        x={point.x - 8} 
                        y={point.y + 11} 
                        fontSize="24"
                        fill={changeTextColor ? colors[i] : "white"}
                        key={i}
                        transform={`translate(${point.x} ${point.y}) 
                            rotate(${-rotation + textRotationAdjustment -2}) 
                            translate(${-point.x} ${-point.y})`}
                    >
                        {hexagon_labels[i]}
                    </text>
                ))
                }
            </svg>
            </div>
          </div>
        <div className="text-left" ref={textLeftRef}>
          <div className='text-left-lines' ref={textLeftLinesRef}>  
            <p className='left-line1' style={{color: hexagonData[currentIndex].color}}>{hexagonData[currentIndex].title}</p>
            <div className='views'>
            <img src={rotateLeft} className="left-view" ref={viewRef} onClick={rotateMobileClockwise}></img>
            <img src={rotateRight} className="right-view" ref={viewRef} onClick={rotateMobileCounterClockwise}></img>
            </div>
            <p className='left-line2'>{hexagonData[currentIndex].subTitle}</p>
            <p className='left-line3'>{hexagonData[currentIndex].paragraph}<span style={{color: hexagonData[currentIndex].color}}>{hexagonData[currentIndex].belowText}</span></p>
            <div className="f-main-progress-wrapper">
                <div className="f-main-progress-container">
                  <div className={`f-main-progress-fill f-color-${rCustomIndex}`} style={{ width: `${hexagonScores[`s${rCustomIndex + 1}`]/36*100}%` }}>
                  </div>
                </div>
                <p className="f-main-progress-percentage">{Math.round(hexagonScores[`s${rCustomIndex + 1}`]/36*100)}%</p>
            </div>
            <img className='close-result' src={close_result} onClick={closeResult}></img>
          </div>
            <div className='force-quotient' ref={forceQuotient}>
              <p className='left-lastline1'>※ Force Quotient (FQ)</p>
              <p className='left-lastline2'>Keep in mind that the result does not reflect your absolute value, but is rather a comparative assessment of yourself within your perspective of the world. For instance, low scores may indicate that you have a high expectation of yourself, while high scores indicate the opposite.</p>
            </div>
        </div>
        {showNewContent && (
        <div className="f-new-content">
          <div className="f-left-content">
            <div className="f-colored-square" style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></div>
            <p className='hex-code' style={{color: `rgb(${red}, ${green}, ${blue})`}}>{uniqueCode}</p>
            <div className="color-square" ></div>
            <button className="text-button" onClick={handleSaveFire}>
              Save Fire
            </button>
        </div>
          <div className="f-right-content">
            <p className='copy-result-text'>Would you like to get a copy of your results? Register now and start your journey with HEARTH.</p>        
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
                className={`register ${isRegistered || !isFirstCheckboxChecked ? 'disabled' : 'clickable'}`}
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
            <label
                htmlFor="check1"
                className={`checkbox-label ${isCheckboxTextBlinking ? 'blink' : ''}`}
              >
                I have reviewed and agree to HEARTH's Privacy Policy (required)
              </label>            
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
                      <p className={`f-label-color-${originalIndex}`}>{legend_labels[originalIndex]}</p>
                        <div className="f-progress-container">
                            <div className={`f-progress-fill f-color-${originalIndex}`} style={{ width: `${hexagonScores[score] / 36 * 100}%` }}></div>
                        </div>
                      <p className='f-percentage'>{Math.round(hexagonScores[`s${originalIndex+1}`]/36*100)}%</p>
                      <img src={read_more} className="read_more" onClick={handleReadMoreClick} alt="Description"/>
                    </li>
                );
              })}
            </ul>
        </div>
        <div className="f-small-text" ref={smallTextRef}
          onClick={smallTextRef.current && smallTextRef.current.style.opacity !== '0' ? handleSmallTextClick : undefined}
          style={{
              opacity: 0,
              fontSize: 17,
              display: 'flex',
              alignItems: 'center',
            }}
            >
          <span>{smallTextContent}</span>
          <img src={arrowright} alt="Arrow Right" style={{marginLeft: '5px', width: '20px'}} />
        </div>
        
        {showBackButton && (
        <div className="f-back-button" onClick={handleBackButtonClick}
          style={{
            color: 'white',
              fontSize: 17,
              display: 'flex',
              alignItems: 'center',
            }}
            >
          <img src={arrowleft} alt="Arrow Left" style={{marginRight: '5px', width: '20px'}} />
          <span>results</span>
        </div>    
      )}
      {showBackButton && (
      <NavLink to='/'>
        <div className="f-home-button" onClick={handleBackButtonClick}
          style={{
            color: 'white',
              fontSize: 17,
              display: 'flex',
              alignItems: 'center',
            }}
            >
          <span>back to home</span>
          <img src={arrowright} alt="Arrow Right" style={{marginLeft: '5px', width: '20px'}} />
        </div> 
      </NavLink>
      )}
    </div>

    <div className='example-wrapper'>
      {/* first save fire */}
      <div id='first-design' className='example-container' style={{height: '400px', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
        <img className='example-fire' src={example_fire} alt="Background" style={{height: '400px'}} />
        <div className="example-color-overlay" style={{ '--overlay-color': `rgb(${red}, ${green}, ${blue})`, height: '400px' }} />
        <p className='example-hex-code' style={{color: `rgb(${red}, ${green}, ${blue})`}}>{`#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`}</p>
      </div>

      {/* second save fire */}
      <div id='second-design' className='example-container' style={{height: '400px'}}>
        <img src={example_fire} alt="Background" style={{height: '400px'}} />
        <div className="example-color-overlay" style={{ '--overlay-color': `rgb(${red}, ${green}, ${blue})`, width: '400px' }} />
        <div className="example-legend-container">
                <ul className="f-score-list">
                  {['s1', 's2', 's3', 's4', 's5', 's6'].map((score, originalIndex) => {
                    const customIndex = customOrder.indexOf(originalIndex);
                    return (
                        <li key={score} className={currentIndex === customIndex ? "active " : ""}>
                          <p className={`f-label-color-${originalIndex}`}>{legend_labels[originalIndex]}</p>
                            <div className="f-progress-container">
                                <div className={`f-progress-fill f-color-${originalIndex}`} style={{ width: `${hexagonScores[score] / 36 * 100}%` }}></div>
                            </div>
                          <p className='f-percentage'>{Math.round(hexagonScores[`s${originalIndex+1}`]/36*100)}%</p>
                        </li>
                    );
                  })}
                </ul>
            </div>
          </div>
        <div>
        </div>

        </div>
      </div>
    );
  };
  
export default Firecopy