// const Test = () => {
//     const [t, i18n] = useTranslation("global");
//     const [showContent, setShowContent] = useState(false);
//     const [selectedLetter, setSelectedLetter] = useState('');
//     const [showAnimation, setShowAnimation] = useState(false);
//     const [animationStage, setAnimationStage] = useState(0);
   
//     const navigate = useNavigate();

//     const handleButtonClick2 = () => {
//       setShowContent(true);
//     };
  
//     const handleLetterClick = (letter) => {
//       setSelectedLetter(letter);
//     };
  
//     const handleNextClick = () => {
//       setShowAnimation(true);
//       setAnimationStage(1);
//       setTimeout(() => {
//         setAnimationStage(2);
//       }, 1000);
//       setTimeout(() => {
//         setAnimationStage(3);
//       }, 2000);
//       setTimeout(() => {
//         setAnimationStage(4);
//       }, 3000);
//     };
  
//     return (
//    <div className='test-page'>
//       <div className = "t-navbar">
//         <div className = "t-navbar-links_logo">
//           <NavLink to='/'>
//            <img src={logo} height={80} alt = "logo"></img>
//           </NavLink>
//         </div>
//           </div>
  
//           <div className={`centered-container ${fadeOut ? 'fade-out' : ''}`}>
//         {!showContent ? (
//           <>
//             <img src={logo} alt='logo' />
//             <p>MY</p>
//             <div className='second-text'>T E S T</div>
//             <button type="button" onClick={handleButtonClick2}>{t("test.start")}</button>
//           </>
//         ) : (
//           <div className='fade-in'>
//             {!showAnimation ? (
//               <>
//                 <div className='centered-content' >
//                   <img src={logo} alt='logo' className={fadeOut ? 'fade-image' : ''}/>
//                   <div className='text-overlay'>Who are you?</div>
//                   <input type="text" value={selectedLetter} readOnly />
//                 </div>
//                 <div className='alphabet-row'>
//                   {['A', 'B', 'C', 'D', 'E'].map((letter) => (
//                     <button
//                       key={letter}
//                       onClick={() => handleLetterClick(letter)}
//                       className={selectedLetter === letter ? 'active' : ''}
//                     >
//                       {letter}
//                     </button>
//                   ))}
//                 </div>
//                 {selectedLetter && (
//                   <div className='next-button' onClick={handleNextClick}>
//                     Next <span className='arrow-icon'>&gt;</span>
//                   </div>
//                 )}
//               </>
//             ) :  (            
//                 <div className='t-animation-container'>
//                   <img src={white_logo} alt='whitelogo' className={`fade-image-in ${fadeOut ? 'show' : ''}`}/>
//                     <div className={`t-animation-content ${fadeOut ? 'fade-out' : ''}`}>
//                       {animationStage >= 1 && (
//                       <div className={`t-animation-text ${animationStage >= 2 ? 'move-up' : ''} ${fadeOut ? 'fade-out' : ''}`}>
//                         Hello, {selectedLetter}
//                       </div>
//                       )}
//                       {animationStage >= 2 && (
//                       <div className={`t-animation-text ${animationStage >= 3 ? 'move-up' : ''} ${fadeOut ? 'fade-out' : ''}`}>
//                         This is the second text
//                       </div>
//                       )}
//                       {animationStage >= 3 && (
//                         <div className={`t-animation-text ${fadeOut ? 'fade-out' : ''}`}>This is the third text</div>
//                       )}
//                       {animationStage === 4 && (
//                         <button className={`t-text-button ${fadeOut ? 'fade-out' : ''}`}
//                         onClick={handleTextButtonClick}>
//                           Text Button
//                         </button>
//                       )}
//                     </div>
//                 </div>
//             )}
//           </div>
//         )}
//       </div>
//   </div>
//     )
//   } 