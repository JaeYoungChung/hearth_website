import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './firecolor.css';
import result_fire from '../../assets/result_fire.png';


const Firecolor = () => {
    const navigate = useNavigate();
    const storedResults = sessionStorage.getItem('surveyResults');
    const values = storedResults ? JSON.parse(storedResults) : {};

    const surveyResults = JSON.parse(sessionStorage.getItem('surveyResults'));

    const hexagonScores = JSON.parse(sessionStorage.getItem('hexagonScores'));

    const [tilted, setTilted] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [changeTextColor, setChangeTextColor] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const colors = ["red", "green", "blue", "orange", "purple", "pink"];

    const [rotation, setRotation] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
      setTimeout(() => {
        setTilted(true);
        setTimeout(() => {
          setShowImage(true);
          setChangeTextColor(true);
          setTimeout(() => {
            setMoveLeft(true);
          }, 3000);
        }, 2000);
      }, 2000);
    }, []);

  const rotateClockwise = () => {
    const newRotation = rotation - 60;
    setCurrentIndex((currentIndex + 5) % 6);
    setRotation(newRotation);
  };

  const rotateCounterClockwise = () => {
    const newRotation = rotation + 60;
    setCurrentIndex((currentIndex + 1) % 6);
    setRotation(newRotation);
  };

    const getHexagonPoints = (centerX, centerY, radius) => {
      const points = [];
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
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
        {/* <h2 className="results-title">Your Results</h2>
        <div>
        <div className="values-container">
          <p>Red: {values.NewValue1}</p>
          <p>Green: {values.NewValue2}</p>
          <p>Blue: {values.NewValue3}</p>
        </div>
        <div className="next-container">
          <span onClick={() => navigate('/nextPagePath')} className="next-text">Next</span>
        </div>
      </div> */}
  <div className='container'>
    <div className={`div-container ${moveLeft ? 'move-left' : ''}`} style={{transform: `rotate(${rotation}deg)`}}>
      <svg className={tilted ? 'tilted' : ''}>
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
              fill={changeTextColor ? colors[i] : "white"}  // Change the text color based on the state
              key={i}
            >
              {`s${i + 1}`}
            </text>
          ))
        }
      </svg>
      {showImage && (
        <img src = {result_fire} alt="Your image" className="fading-image" />
      )}
        </div>   
        {moveLeft && (
          <div className="arrows">
            <div className="arrow left" onClick={rotateClockwise}></div>
            <div className="arrow right" onClick={rotateCounterClockwise}></div>
          </div>
        )} 
      </div>
      <div className="right-side">
        <h1>Text</h1>
        <p>A Text</p>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{
              width: `${(hexagonScores[currentIndex] / 15) * 100}%`,
            }}          >
          </div>
        </div>
      </div>
    </div>
      );
}

export default Firecolor