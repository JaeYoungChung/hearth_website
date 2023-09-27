import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './firecolor.css';
import result_fire from '../../assets/result_fire.png';


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
              setRotation(-30);  // Set the rotation state to -60
            }, 2000);  // Duration for the moveToLeft animation
          }, 2000); // Time to wait after text color changes before starting the moveToLeft animation
        }, 2000);  // Time after setting the tilted state to showing the image
      }, 2000);  // Initial delay to start the sequence
    }, 2000);
  }, []);


  const rotateClockwise = () => {
    const newRotation = rotation - 60;
    setRotation(newRotation);
};

const rotateCounterClockwise = () => {
    const newRotation = rotation + 60;
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
  <div className="right-side">
    <h1>Text</h1>
    <p>A Text</p>
    <div className="progress-bar">
      <div 
        className="progress-fill" 
        style={{
          width: `${(hexagonScores[currentIndex] / 15) * 100}%`,
        }}>
      </div>
    </div>
  </div>
    )}
  </div>
</div>
      );
}

export default Firecolor