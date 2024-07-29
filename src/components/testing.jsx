// useEffect(() => {
//     const video = videoRef.current;
//     const textContainer = textContainerRef.current;
//     const bottomText = bottomTextRef.current;
//     closeButton.current.style.pointerEvents = 'none';
//     viewRef.current.style.opacity = 0;

//     video.style.opacity = 0;
//     video.style.transition = 'opacity 1s ease-in-out';
//     setTimeout(() => {
//       video.style.opacity = 1;
//       if (window.matchMedia('(max-width: 1023px)').matches) {
//         video.style.opacity = 1;
//         setTimeout(() => {
//           video.style.opacity = 0.4;
//         }, 1000);
//       }
//     }, 1000);
  
//     // Trigger animations after initial fade-in
//     setTimeout(() => {
//       video.classList.add('moving');
//       textContainer.classList.add('appearing');
//     }, 2000);
  
//     // Make the bottom text appear after 3 seconds
//     setTimeout(() => {
//       bottomText.style.opacity = 1;
//     }, 3000);
//   }, []);

// <div className='firecopy'>
// <div className="f-video-container" ref={videoRef}>
//   <video className="f-video" autoPlay loop muted playsInline>
//       <source src={resultfire} type="video/mp4" />
//   </video>
//   <div 
//       className="color-overlay"
//       id="color-overlay"
//       style={{ 
//       '--overlay-color': `rgb(${red}, ${green}, ${blue})`,
//       }}
//   ></div>
// </div> 
//   <div className='f-column'>
//     <div className={`f-text-container ${!showContent ? 'fading' : ''}`} ref={textContainerRef}>
//         <p>To. {storedLetter}</p><br></br>
//         <p>{textToShow}</p><br></br>
//         <p className='third-line'>{t("firecopy.sincerely")}</p>
//     </div> 
//     <div
//       className={`bottom-text ${!showContent ? 'fading' : ''}`}
//       ref={bottomTextRef}
//       onClick={handleBottomTextClick}
//       style={{
//         fontSize: 16,
//         display: 'flex',
//         alignItems: 'center',
//       }}
//       > 
//       <span>{t("firecopy.details")}</span>
//       <img src={arrowright} alt="Arrow Right" style={{ marginLeft: '5px', width: '22px'}} />
//     </div>
//   </div>


// CSS:
// .firecopy {
//   position: relative;
//   height: 119%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transform-style: preserve-3d;
//   overflow: visible;
//   will-change: opacity;
// }

// video {
//   width: 100%; /* full width of the container */
//   height: 100%; /* full height of the container */
//   object-fit: cover; /* Resize to cover the container */
//   background-color: transparent;
//   /* border-bottom: 1px solid transparent; */
// }


// .f-video-container {
//   backface-visibility: hidden;
//   width: 600px;
//   height: 610px;
//   /* width: 43%;
//   height: 43%; */
//   position: relative;
//   z-index: 0; /*video is above the hexagon */
//   transform: translate3d(0,0,0);
// }

// .color-overlay {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 95%;
//   border-style: solid;
//   border-color: black;
//   pointer-events: none;
//   background-color: var(--overlay-color);
//   mix-blend-mode: color !important;
//   -webkit-mix-blend-mode: color;
//   -moz-mix-blend-mode: color;
//   -ms-mix-blend-mode: color;
//   -o-mix-blend-mode: color;
// }

// #color-overlay {
//   mix-blend-mode: overlay !important;
// }