import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './firecolor.css';
import blur_fire from '../../assets/blur_fire.png';
import icon_twitter from '../../assets/icon_twitter.png';
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_appstore from '../../assets/icon_appstore.png';
import icon_playstore from '../../assets/icon_playstore.png';
import blog_image from '../../assets/blog_image.png'
import sns_image from '../../assets/sns_image.png'
import news_image from '../../assets/news_image.png'
import white_fire from '../../assets/white_fire.mp4'

const Firecolor = () => { 
  const navigate = useNavigate();
  const storedResults = sessionStorage.getItem('surveyResults');
  const values = storedResults ? JSON.parse(storedResults) : {};

  const hexagonScores = JSON.parse(sessionStorage.getItem('hexagonScores'));
  const rgbValues = JSON.parse(sessionStorage.getItem('rgbValues'));
  const red = rgbValues?.NewRedValue;
  const green = rgbValues?.NewGreenValue;
  const blue = rgbValues?.NewBlueValue;
  const colors = ["rgb(0,255,0)", "rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 0, 255)", "rgb(0, 255, 255)"];

  const [tilted, setTilted] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [changeTextColor, setChangeTextColor] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moveToLeft, setMoveToLeft] = useState(false);
  const [showRightSide, setShowRightSide] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSecondaryContent, setShowSecondaryContent] = useState(false);
  const [textRotationAdjustment, setTextRotationAdjustment] = useState(0);
  const [hexagonColor, setHexagonColor] = useState('initialColor');




  const onRotate = (newScore) => {
    setCurrentActiveScore(newScore);
};

const [currentActiveScore, setCurrentActiveScore] = useState('s1');
const [animationDone, setAnimationDone] = useState(false);

const handleBackClick = () => {
  setShowSecondaryContent(false);
  setIsModalOpen(false);
};

const legend_labels = ['H','E','A','R','T','H'];
const hexagon_labels = ['H','T','R','H','E','A'];

const imageData = {
  0: {color: "rgb(69, 252, 80)", text: ["Helm", "Independence", "is integrating the inner self through meticulous introspection to attain an autonomous life where one can live to the fullest and take greater hold of their destiny"] },
  1: {color: "rgb(110, 175, 237)", text: ["Envisage", "Cogitation", "is the art of cogitation which consists of reflective thinking on oneself and systemizing decisions, gaining clarity in one's mission and vision through internalization"] },
  2: {color: "rgb(234, 130, 196)", text: ["Attune", "Adaptability", "is accurately perceiving the constantly changing relationship between yourself and the world around you in order to effectively optimize your mode of adaptation in a versatile manner"] },
  3: {color: "rgb(250, 184, 52)", text: ["Reverie", "Creativity", "is being inquisitive and open-minded when one chances upon objects and ideas to envision and create value of originality"] },
  4: {color: "rgb(228, 25, 0)", text: ["Transcend", "Volition", "is awakening the inner drive, developing resilience from failure, and gaining self-control from short-term temptations so as to render oneself into achieving a desirable goal that needs iterative effort"] },
  5: {color: "rgb(163, 86, 214)", text: ["Harmonize", "Interpersonal Skills", "is understanding others through empathy and tolerance whilst keeping one’s ground to synergize successfully with other people and become socially optimistic"] },
};

const hexagonData = [
  {
      color: "rgb(69, 252, 80)",
      title: "Helm",
      subTitle: "Independence",
      paragraph: "is integrating the inner self through meticulous introspection to attain an autonomous life where one can live to the fullest and take greater hold of their destiny",
      belowText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      backgroundImage: blur_fire
  },
  {
    title: "Title 2",
    color: "rgb(110, 175, 237)",
    subTitle: "SubTitle 1",
    paragraph: "This is the paragraph for state 1.",
    belowText: "Some text after the progress bar for state 1.",
    backgroundImage: blur_fire
  },
];

  useEffect(() => {
    setTimeout(() => {
      setTilted(true);
      setTimeout(() => {
        setShowImage(true);
        setHexagonColor(`rgb(${red}, ${green}, ${blue})`); // Set hexagon color to fire color
        setTimeout(() => {
          setChangeTextColor(true);
          setTimeout(() => {
            setMoveToLeft(true);
            setTimeout(() => {
              setShowRightSide(true);
              setRotation(30);  // Set the rotation state to -60
              setAnimationDone(true);
            }, 2000);  // Duration for the moveToLeft animation
          }, 2000); // Time to wait after text color changes before starting the moveToLeft animation
        }, 2000);  // Time after setting the tilted state to showing the image
      }, 2000);  // Initial delay to start the sequence
    }, 2000);
  }, []);


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
    const innerHexagonPoints = getHexagonPoints(200, 200, 200).map((point, i) => {
      const scale = hexagonScores[`s${i + 1}`] / 36;
      return {
        x: 200 + (point.x - 200) * scale,
        y: 200 + (point.y - 200) * scale,
      };
    });

    const VideoComponent = ({ rgbColor }) => {
      const videoStyle = {
        width: '400px',
        height: '700px',
        backgroundColor: `rgb(${rgbColor})`
      };
    
      const overlayStyle = {
        ...videoStyle,
        mixBlendMode: 'multiply'
      };
    
      return (
        <div style={videoStyle}>
          <video style={overlayStyle} autoPlay loop muted>
            <source src={white_fire} type="video/webm" />
          </video>
        </div>
      );
    };
  
  
    return (
      <div className="results-container">
        <div className='container'>
          <div className={`moving-container ${moveToLeft ? 'animate-move' : ''}`}>
          {showImage && (
        <div className="videoOverlayContainer">
        <div className="videoWrapper">
        <VideoComponent 
          rgbColor={`${red}, ${green}, ${blue}`} 
        />
        </div>
         <div className="videoWrapper">
         <VideoComponent 
          rgbColor={`${red}, ${green}, ${blue}`} 
        />
       </div>
       </div>
      )}
      <div className="rotation-container"
    style={{transform: `perspective(1000px) rotate3d(0, -2.747, 1, ${rotation}deg)`}}>
   <svg className={tilted ? 'tilted' : '' }>
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
          stroke="darkgrey"
          strokeWidth="2"
          fill={hexagonColor}
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
      {moveToLeft && !showSecondaryContent && (
        <div className="arrows">
            <div className="arrow left" onClick={rotateClockwise}></div>
            <div className="arrow right" onClick={rotateCounterClockwise}></div>
        </div>
      )}
       
    </div>
    {showRightSide && (
      <div className="hex-right-side" style={{ backgroundImage: !showSecondaryContent ? `url(${hexagonData[currentIndex].backgroundImage})` : 'none' }}>
      {!showSecondaryContent ? (
        <>
      <div className="hex-text-section">
        <p className="hex-text-big" style={{color: hexagonData[currentIndex].color}}>{hexagonData[currentIndex].title}</p>
        <p className="hex-text-medium">{hexagonData[currentIndex].subTitle}</p>
        <hr />
        <p className='hex-text-small'>{hexagonData[currentIndex].paragraph}</p>
      </div>
      <div className="main-progress-wrapper">
        <div className="main-progress-container">
          <div className={`main-progress-fill color-${currentIndex}`} style={{ width: `${hexagonScores[`s${currentIndex + 1}`]/36*100}%` }}>
          </div>
        </div>
        <p className="main-progress-percentage">{Math.round(hexagonScores[`s${currentIndex + 1}`]/36*100)}%</p>
      </div>
        <p className='below-text'>
            {hexagonData[currentIndex].belowText}
        </p>
      <div className="image-text-container">
        <div className="image-text-wrap">
          <img src={icon_appstore} alt="description_here" />
          <p>App Store</p>
        </div>
        <div className="image-text-wrap">
            <img src={icon_playstore} alt="description_here" />
            <p>Play Store</p>
        </div>
      </div>
      <div>
          <p className='finish-test' onClick={() => setIsModalOpen(true)}>
              Finish Test
          </p>
      </div>
      </>
      ) : (
    <div className="secondary-content">
    <p className="fr-text-medium">Want to know more?</p>
    <p className="fr-text-large">Join our<br></br>Community</p>
    <p className="fr-text-medium">for more<br></br>HEARTH's exclusive Contents</p>
    <div className="image-row">
      <div className="image-text-wrapper">
        <img src= {blog_image} alt="description1" />
        <p>Blog posts</p>
      </div>
      <div className="image-text-wrapper">
      <img src= {sns_image} alt="description3" />
        <p>SNS posts</p>
      </div>
      <div className="image-text-wrapper">
      <img src= {news_image} alt="description2" />
        <p>Newsletters<br></br>&<br></br>Channels</p>
      </div>
    </div>
    <div className="register-inputBox">
      <input type="text" placeholder="email"/>
      <p className="register">Register</p>
    </div>    
    <p className="text-below-rectangle">and visit us on</p>
    <div className="bottom-image-row">
      <img src = {icon_instagram} className="icon"/>
      <img src = {icon_facebook} className="icon"/>
      <img src = {icon_twitter} className="icon"/>
    </div>
  </div>
      )}
        {isModalOpen && !showSecondaryContent &&(
      <div className="modal">
        <div className="modal-content">
          <p>Modal Text</p>
          <div className="hex-c-inputBox">
            <input type="text" placeholder="email"/>
            <span className="hex-register">Register</span>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Checkbox Text 1</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Checkbox Text 2</label>
          </div>
          <div className="modal-buttons">
            <p onClick={() => setIsModalOpen(false)}>Back</p>
            <p onClick={() => setShowSecondaryContent(true)}>Next</p>
          </div>
        </div>
      </div>
    )}
  </div>
)}

<div className={animationDone ? "animation-complete" : ""}>
    <div className={`legend-container ${showSecondaryContent ? 'secondary-active' : ''}`}>
        <div className="legend-header">
            <div className="color-square" style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></div>
            <p>{`(${red}, ${green}, ${blue})`}  </p>
        </div>
        <ul className="score-list">
    {['s1', 's2', 's3', 's4', 's5', 's6'].map((score, originalIndex) => {
        // Define the custom sequence
        const customOrder = [0, 4, 3, 5, 1, 2]; // Adjusted for zero-based index
        // Find the index in the custom order that matches the original index
        const customIndex = customOrder.indexOf(originalIndex);
        return (
            <li key={score} className={currentIndex === customIndex ? "active " : ""}>
                <p>{legend_labels[originalIndex]}</p>
                <div className="progress-container">
                    <div className={`progress-fill color-${customIndex}`} style={{ width: `${hexagonScores[score] / 36 * 100}%` }}></div>
                </div>
            </li>
        );
    })}
</ul>

        {showSecondaryContent && (
        <button className="rounded-button">Share Fire</button>
      )}
    </div>
   
</div>

{showSecondaryContent && (
   <div className="left-bottom" onClick={handleBackClick}>
       <p className="final-arrow-left">&lt;</p>
       <p className="final-arrow-text">Results</p>
   </div>
)}
  </div>
</div>
  );
}
 
export default Firecolor