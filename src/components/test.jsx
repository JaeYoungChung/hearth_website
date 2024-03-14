    // <svg>
    //     {/* Outer grey hexagon */}
    //     <polygon
    //       points={outerHexagonPoints.map(p => `${p.x},${p.y}`).join(" ")}
    //       stroke={hexagonColor}
    //       strokeWidth="2"
    //       fill="#1a1a1a"
    //     />
    //     {/* Inner shape */}
    //     <polygon
    //       points={innerHexagonPoints.map(p => `${p.x},${p.y}`).join(" ")}
    //       stroke="darkgrey"
    //       strokeWidth="2"
    //       />
    //     {/* Draw lines connecting opposite */}
    //     <line x1={outerHexagonPoints[0].x} y1={outerHexagonPoints[0].y} x2={outerHexagonPoints[3].x} y2={outerHexagonPoints[3].y} stroke={hexagonColor} />
    //     <line x1={outerHexagonPoints[1].x} y1={outerHexagonPoints[1].y} x2={outerHexagonPoints[4].x} y2={outerHexagonPoints[4].y} stroke={hexagonColor} />
    //     <line x1={outerHexagonPoints[2].x} y1={outerHexagonPoints[2].y} x2={outerHexagonPoints[5].x} y2={outerHexagonPoints[5].y} stroke={hexagonColor} />
        
    //     {/* labels */}
    //           {
    //       outerHexagonPoints.map((point, i) => (
    //         <text 
    //             x={point.x - 10} 
    //             y={point.y + 10} 
    //             fontSize="24" 
    //             fill={"white"}
    //             key={i}
    //         >
    //             {hexagon_labels[i]}
    //         </text>
    //     ))
    //   }
    //   </svg>