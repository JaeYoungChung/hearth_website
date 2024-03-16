// .f-tilted {
//     transform: rotate3d(1, 0, 0, 70deg);
//     transform-origin: center;
//     transition: transform 2s ease-in-out;
//     opacity: 0.5;
// }
  
//   .f-svg-container {
//     top: 40%;
//     right: 15%;
//     transform: translateY(-50%);
//     justify-self: center;
//     opacity: 0; /* Start hidden */
//     transition: opacity 1s ease-in-out; /* Fade in transition */
//     position: absolute;
//     transform-style: preserve-3d; /* Allow 3D transformations */ 
//     z-index: 1;
//     overflow: visible;
//   }


//   const [rotation, setRotation] = useState(0);

//   const rotateClockwise = () => {
//     const newRotation = rotation - 60;
//     setRotation(newRotation);
//     const newIndex = (currentIndex - 1 + 6) % 6;
//     setCurrentIndex(newIndex);
//     setTextRotationAdjustment(prevAdjustment => prevAdjustment);  // adjust by +60 for clockwise
// };

// <div className="arrow left-arrow" ref={leftArrowRef} onClick={rotateClockwise}>←</div>

// <div className={`f-svg-container ${showContent ? 'hidden' : ''}`} 
//             ref={svgRef}
//             style={{transform: `perspective(1000px) rotate3d(0, -2.747, 1, ${rotation}deg)`}}>
//             <svg className={tilted ? 'f-tilted' : '' }>
//                 {/* Outer grey hexagon */}
//                 <polygon
//                 points={outerHexagonPoints.map(p => `${p.x},${p.y}`).join(" ")}
//                 stroke={hexagonColor}
//                 strokeWidth="2"
//                 fill="#1a1a1a"
//                 />