//     //save results to device
//     const handleSaveClick = () => {
//         // Capture the first custom design
//         const firstDesignElement = document.getElementById('first-design');
//         html2canvas(firstDesignElement).then(canvas => {
//           const link = document.createElement('a');
//           link.download = 'first-design.png';
//           link.href = canvas.toDataURL('image/png');
//           link.click();
//         });
      
//         // Capture the second custom design
//         const secondDesignElement = document.getElementById('second-design');
//         html2canvas(secondDesignElement).then(canvas => {
//           const link = document.createElement('a');
//           link.download = 'second-design.png';
//           link.href = canvas.toDataURL('image/png');
//           link.click();
//         });
//       };

// <div id='first-design' className='example-container' style={{height: '400px', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
// <img className='example-fire' src={example_fire} alt="Background" style={{height: '400px'}} />
// <div className="example-color-overlay" style={{ '--overlay-color': `rgb(${red}, ${green}, ${blue})`, height: '400px' }} />
// <p className='example-hex-code' style={{color: `rgb(${red}, ${green}, ${blue})`}}>{`#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`}</p>
// </div>

// CSS:
// .example-container {
//     width: 400px;
//     height: 400px;
//     position: relative;
//     z-index: 0;
//     display: inline-block;
//     margin-top: 30px;
//     margin-bottom: 30px;
//   }
  
//   .example-container::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 400px;
//     height: 400px;
//     /* mix-blend-mode: multiply; */
//     pointer-events: none;
//   }
  
//   .example-color-overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 400px;
//     height: 400px;
//     pointer-events: none;
//   }
  
//   .example-color-overlay:before {
//     content: '';
//     display: block;
//     width: 400px;
//     height: 400px;
//     background-color: var(--overlay-color);
//     mix-blend-mode: color;
//   }
  