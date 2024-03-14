import './result.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import resultfire from '../../assets/result_fire.mp4'
 
const Result = () => {

  const storedResults = sessionStorage.getItem('surveyResults');
  const values = storedResults ? JSON.parse(storedResults) : {};

  const hexagonScores = JSON.parse(sessionStorage.getItem('hexagonScores'));
  const rgbValues = JSON.parse(sessionStorage.getItem('rgbValues'));
  const red = rgbValues?.NewRedValue;
  const green = rgbValues?.NewGreenValue;
  const blue = rgbValues?.NewBlueValue;
  const customOrder = [0, 4, 3, 5, 1, 2]; // Adjusted for zero-based index

  const [showVideo, setShowVideo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showBottomText, setShowBottomText] = useState(false);
  const [showSVG, setShowSVG] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [textRotationAdjustment, setTextRotationAdjustment] = useState(0);
  const [hexagonColor, setHexagonColor] = useState('initialColor');
  const [changeTextColor, setChangeTextColor] = useState(false);
  const [tilted, setTilted] = useState(false);
  const [moveToRight, setMoveToRight] = useState(false);


  const hexagon_labels = ['H','T','R','H','E','A'];
  const colors = ["rgb(0,255,0)", "rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 0, 255)", "rgb(0, 255, 255)"];
  const rCustomIndex = customOrder[currentIndex];

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

      useEffect(() => {
        setTimeout(() => {
          setShowVideo(true);
        }, 2000);
        setTimeout(() => {
          setShowText(true);
        }, 4000);
        setTimeout(() => {
          setShowBottomText(true);
        }, 5000);
      }, []);

      const handleBottomTextClick = () => {
        setShowText(false);
        setTimeout(() => {
          setShowSVG(true);
          setTimeout(() => {
            setHexagonColor(`rgb(${red}, ${green}, ${blue})`);
            setChangeTextColor(true);
            setTimeout(() => {
              setTilted(true);
              setRotation(30);  // Set the rotation state to -60
              setMoveToRight(true);
            }, 1000);
          }, 2000);
        }, 1000);
      };

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
              <source src={resultfire} type="video/webm" />
            </video>
          </div>
        );
      };

  return (
    <div className="result-page">
              <div className={`moving-container ${moveToRight ? 'animate-move' : ''}`}>
        <div className={`video-container ${showVideo ? 'show' : ''}`}>
            <VideoComponent 
              rgbColor={`${red}, ${green}, ${blue}`} 
              // rgbColor={'169,201,190'} 
            />
        </div>
      </div>
      <div className={`text-container ${showText ? 'show' : ''} ${showSVG ? 'hide' : ''}`}>
        <div className="text-frame">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Nullam auctor, nisl eget aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
          </p>
        </div>
      </div>
      <div className={`svg-container ${showSVG ? 'show' : ''}`}
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
                // transform={`translate(${point.x} ${point.y}) 
                //             rotate(${-rotation + textRotationAdjustment}) 
                //             translate(${-point.x} ${-point.y})`}
            >
                {hexagon_labels[i]}
            </text>
        ))
      }
      </svg>      
      </div>
      <div
        className={`bottom-text ${showBottomText ? 'show' : ''}`}
        onClick={handleBottomTextClick}
      >
        <p>Click here to see your result</p>
      </div>
    </div>
  );
};
 
export default Result;