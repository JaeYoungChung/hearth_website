import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './firecolor.css';
import result_fire from '../../assets/result_fire.png';
import blur_fire from '../../assets/blur_fire.png';
import icon_twitter from '../../assets/icon_twitter.png';
import { color } from 'd3';


const Firecolor = () => {
  const navigate = useNavigate();
  const storedResults = sessionStorage.getItem('surveyResults');
  const values = storedResults ? JSON.parse(storedResults) : {};

  const hexagonScores = JSON.parse(sessionStorage.getItem('hexagonScores'));
  const colors = ["red", "green", "blue", "orange", "purple", "pink"];

  const [tilted, setTilted] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [changeTextColor, setChangeTextColor] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [moveToLeft, setMoveToLeft] = useState(false);
  const [showRightSide, setShowRightSide] = useState(false);

  const onRotate = (newScore) => {
    // Your existing rotation logic here
    setCurrentActiveScore(newScore);
};

const [currentActiveScore, setCurrentActiveScore] = useState('s1');
const [animationDone, setAnimationDone] = useState(false);

const imageData = {
  0: {color: "rgb(69, 252, 80)", text: ["Helm", "Independence", "is integrating the inner self through meticulous introspection to attain an autonomous life where one can live to the fullest and take greater hold of their destiny"] },
  1: {color: "rgb(110, 175, 237)", text: ["Envisage", "Cogitation", "is the art of cogitation which consists of reflective thinking on oneself and systemizing decisions, gaining clarity in one's mission and vision through internalization"] },
  2: {color: "rgb(234, 130, 196)", text: ["Attune", "Adaptability", "is accurately perceiving the constantly changing relationship between yourself and the world around you in order to effectively optimize your mode of adaptation in a versatile manner"] },
  3: {color: "rgb(250, 184, 52)", text: ["Reverie", "Creativity", "is being inquisitive and open-minded when one chances upon objects and ideas to envision and create value of originality"] },
  4: {color: "(228, 25, 0)", text: ["Transcend", "Volition", "is awakening the inner drive, developing resilience from failure, and gaining self-control from short-term temptations so as to render oneself into achieving a desirable goal that needs iterative effort"] },
  5: {color: "rgb(163, 86, 214)", text: ["Harmonize", "Interpersonal Skills", "is understanding others through empathy and tolerance whilst keeping one’s ground to synergize successfully with other people and become socially optimistic"] },
};

const hexagonData = [
  {
      color: "rgb(69, 252, 80)",
      title: "Title 1",
      subTitle: "SubTitle 1",
      paragraph: "is integrating the inner self through meticulous introspection to attain an autonomous life where one can live to the fullest and take greater hold of their destiny",
      progressBarPercentage: 60,  // this should correspond to the hexagon's score for s1
      belowText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      imageUrl: icon_twitter,
      backgroundImage: blur_fire
  },
  {
    title: "Title 2",
    color: "rgb(110, 175, 237)",
    subTitle: "SubTitle 1",
    paragraph: "This is the paragraph for state 1.",
    progressBarPercentage: 50,  // this should correspond to the hexagon's score for s1
    belowText: "Some text after the progress bar for state 1.",
    imageUrl: icon_twitter,
    backgroundImage: blur_fire
},
];

  useEffect(() => {
    setTimeout(() => {
      setTilted(true);
      setTimeout(() => {
        setShowImage(true);
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
    const newIndex = (currentIndex - 1 + 6) % 6;  // Update this line
    setCurrentIndex(newIndex);
};

const rotateCounterClockwise = () => {
    const newRotation = rotation + 60;
    setRotation(newRotation);
    const newIndex = (currentIndex + 1) % 6;  // Update this line
    setCurrentIndex(newIndex);
};

    const getHexagonPoints = (centerX, centerY, radius) => {
      const points = [];
      const offsetAngle = Math.PI / 3;
      for (let i = 0; i < 6; i++) {
        const angle = offsetAngle + (Math.PI / 3) * i;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        points.push({ x, y });
      }
      return points;
    };
  
    const outerHexagonPoints = getHexagonPoints(200, 200, 200);
    const innerHexagonPoints = getHexagonPoints(200, 200, 200).map((point, i) => {
      const scale = hexagonScores[`s${i + 1}`] / 15;
      return {
        x: 200 + (point.x - 200) * scale,
        y: 200 + (point.y - 200) * scale,
      };
    });
  
  
    return (
<div className="results-container">
  <div className='container'>
    <div className={`moving-container ${moveToLeft ? 'animate-move' : ''}`}>
      <div className="rotation-container"
   style={{transform: `rotate3d(0, -1.732, 1, ${rotation}deg)`}}>
   <svg className={tilted ? 'tilted' : '' }>
        {/* Outer grey hexagon */}
        <polygon
          points={outerHexagonPoints.map(p => `${p.x},${p.y}`).join(" ")}
          stroke="darkgrey"
          strokeWidth="2"
          fill="darkgrey"
        />
        {/* Inner shape */}
        <polygon
          points={innerHexagonPoints.map(p => `${p.x},${p.y}`).join(" ")}
          stroke="darkgrey"
          strokeWidth="2"
          fill="lightgrey"
        />
        {/* Draw lines connecting opposite */}
        <line x1={outerHexagonPoints[0].x} y1={outerHexagonPoints[0].y} x2={outerHexagonPoints[3].x} y2={outerHexagonPoints[3].y} stroke="black" />
        <line x1={outerHexagonPoints[1].x} y1={outerHexagonPoints[1].y} x2={outerHexagonPoints[4].x} y2={outerHexagonPoints[4].y} stroke="black" />
        <line x1={outerHexagonPoints[2].x} y1={outerHexagonPoints[2].y} x2={outerHexagonPoints[5].x} y2={outerHexagonPoints[5].y} stroke="black" />
        
        {/* labels */}
       {
    outerHexagonPoints.map((point, i) => (
        <text 
            x={point.x - 10} 
            y={point.y + 10} 
            fontSize="24" 
            fill={changeTextColor ? colors[i] : "white"}
            key={i}
            >
            {`s${i + 1}`}
        </text>
    ))
}
      </svg>
     
      </div>
      {(
          <div className="arrows">
            <div className="arrow left" onClick={rotateClockwise}></div>
            <div className="arrow right" onClick={rotateCounterClockwise}></div>
          </div>
        )} 
        {showImage && (
        <img src = {result_fire} alt="Your image" className="fading-image" />
      )}
    </div>
    {showRightSide && (
  <div className="right-side" style={{ backgroundImage: `url(${hexagonData[currentIndex].backgroundImage})` }}>
    <div className="hex-text-section">
      <p className="hex-text-big" style={{color: hexagonData[currentIndex].color}}>{hexagonData[currentIndex].title}</p>
      <p className="hex-text-medium">{hexagonData[currentIndex].subTitle}</p>
      <hr />
      <p className='hex-text-small'>{hexagonData[currentIndex].paragraph}</p>
    </div>
    <div className="main-progress-container">
        <div className={`main-progress-fill color-${currentIndex}`} style={{ width: `${hexagonScores[`s${currentIndex + 1}`]}%` }}>
        </div>
        <p>70%</p>
    </div>
        <p className='below-text'>
            {hexagonData[currentIndex].belowText}
        </p>
        <div className="image-text-container">
            <img src={hexagonData[currentIndex].imageUrl} alt="description_here" />
            <p>App Store</p>
            <img src={hexagonData[currentIndex].imageUrl} alt="description_here" />
            <p>Play Store</p>
        </div>
  </div>
)}

<div className={animationDone ? "animation-complete" : ""}>
    <div className="legend-container">
        <div className="legend-header">
            <div className="color-square"></div>
            <p>#DB5EA0</p>
        </div>
        <ul className="score-list">
            {['s1', 's2', 's3', 's4', 's5', 's6'].map((score, index) => (
                <li key={score} className={currentIndex === index ? "active" : ""}>
                    <p>{score}</p>
                    <div className="progress-container">
                        <div className={`progress-fill color-${index}`} style={{ width: `${hexagonScores[score]}%` }}></div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
</div>
  </div>
</div>
      );
}

export default Firecolor