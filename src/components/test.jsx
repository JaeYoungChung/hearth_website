// const Team = () => {
//     const [currentPage, setCurrentPage] = useState(0);
  
//     const pages = [<Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />];
  
//     return (
//       <div className="team">
//         {pages[currentPage]}
//         <div className="t-page-indicators">
//           {pages.map((_, index) => (
//             <span key={index} className={`t-indicator ${index === currentPage ? 'active' : ''}`} onClick={() => setCurrentPage(index)}></span>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   const Page1 = () => (
//     <div className='t-page1' 
//         style={{ display: 'flex',
//                 paddingLeft: 100,
//                 height: '110vh', 
//                 backgroundImage: `url(${white_logo})`,
//                 backgroundPosition:'1000px 90px',
//                 backgroundSize: 'contain',      
//                 }}>
//       <div className="t-text-content1" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left'}}>
//         <p className="t-title1">Team</p>
//         <p className="t-subtitle1">Alpha</p><br/>
//         <div className="t-paragraph1">
//             <p>Team Alpha</p>
//             <p>On Duty</p>
//             <p>On Duty</p>
//             <em>“Our Code”,</em><br/><br></br>
//             <p>On Duty</p>
//             <p>On Duty</p>
//         </div>
//       </div>
//     </div>
//   );
  
//   const Page2 = () => (
//     <div className='t-page2' 
//         style={{ display: 'flex',
//                 paddingLeft: 100,
//                 height: '110vh', 
//                 backgroundImage: `url(${yellow_logo})`,
//                 backgroundPosition:'100px 90px',
//                 backgroundSize: 'contain',      
//                 }}>
//       <div className="t-text-content2" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left', marginLeft: 'auto',}}>
//         <p className="t-title2">A Man</p>
//         <p className="t-subtitle2">The Man</p><br/>
//         <div className="t-paragraph2">
//             <p>A Man</p>
//         </div>
//       </div>
//     </div>
//   );
    
//   const Page3 = () => (
//     <div className='t-page2' 
//         style={{ display: 'flex',
//                 paddingLeft: 100,
//                 height: '110vh', 
//                 backgroundImage: `url(${red_logo})`,
//                 backgroundPosition:'100px 90px',
//                 backgroundSize: 'contain',      
//                 }}>
//       <div className="t-text-content2" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left', marginLeft: 'auto',}}>
//         <p className="t-title3">B Man</p>
//         <p className="t-subtitle3">B Man</p><br/>
//         <div className="t-paragraph2">
//             <p>B Man</p><br/>
//             <p>B Man</p>
//         </div>
//       </div>
//     </div>
//   );
//   const Page4 = () => (
//     <div className='t-page2' 
//         style={{ display: 'flex',
//                 paddingLeft: 100,
//                 height: '110vh', 
//                 backgroundImage: `url(${green_logo})`,
//                 backgroundPosition:'100px 90px',
//                 backgroundSize: 'contain',      
//                 }}>
//       <div className="t-text-content2" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left', marginLeft: 'auto',}}>
//         <p className="t-title4">C</p>
//         <p className="t-subtitle4">C Woman</p><br/>
//         <div className="t-paragraph2">
//             <p>C Woman</p>
//             <p>C Woman</p><br/>
//         </div>
//       </div>
//     </div>
//   );
//   const Page5 = () => (
//     <div className='t-page2' 
//         style={{ display: 'flex',
//                 paddingLeft: 100,
//                 height: '110vh', 
//                 backgroundImage: `url(${blue_logo})`,
//                 backgroundPosition:'100px 90px',
//                 backgroundSize: 'contain',      
//                 }}>
//       <div className="t-text-content2" style={{display:'flex', flexDirection:'column', height:'100%', textAlign:'left', marginLeft: 'auto',}}>
//         <p className="t-title5">D</p>
//         <p className="t-subtitle5">D Man</p><br/>
//         <div className="t-paragraph2">
//             <p>D Man</p>
//             <p>D Man</p>
//         </div>
//       </div>
//     </div>
//   );  

// CSS:
// .team {
//     font-family: "classico-urw", sans-serif;
//     position: relative;
//     padding-bottom: 70px;
//     height: 110vh; 
//     justify-content: center;
// }

// .t-background-img {
//     height: 100vh;
//     flex: 1;
//     background-repeat: no-repeat;
//   }

// .t-page1{
//     background-repeat: no-repeat;
//     background-position: 1000px 90px;
// }

// .t-page2{
//     background-repeat: no-repeat;
//     background-position: 1000px 90px;
// }
  
//   .t-text-content1 {
//     position: absolute;
//     justify-content: center;
//     color: white;
//     flex: 1;
//     width: 80%;
//     max-width: 1200px;
//     z-Index: 2;
//   }

//   .t-text-content2 {
//     position: absolute;
//     justify-content: center;
//     right: 0;
//     color: white;
//     flex: 1;
//     width: 60%;
//     max-width: 650px;
//     z-Index: 2,
//   }

//   .t-title1 {
//     font-size: 40px;
//     font-weight: bold;
//     opacity: 0.4;
//     line-height: 1.0;
//   }
//   .t-subtitle1 {
//     font-size: 50px;
//     font-weight: bold;
//     padding-left: 50px;
//     line-height: 1.0;
//   }
//   .t-paragraph1 {
//     font-size: 18px;
//     line-height: 1.5;
//   }

//   .t-title2 {
//     font-size: 50px;
//     color: #FFD800;
//   }
//   .t-subtitle2 {
//     font-size: 30px;
//     color: #FFD800;
//     opacity: 0.4;
//   }
  
//   .t-title3 {
//     font-size: 50px;
//     color:#FF084B;
//   }
//   .t-subtitle3 {
//     font-size: 30px;
//     color:#FF084B;
//     opacity: 0.4;
//   }
  
//   .t-title4 {
//     font-size: 50px;
//     color:#40FFE9;
//   }
//   .t-subtitle4 {
//     font-size: 30px;
//     color:#40FFE9;
//     opacity: 0.4;
//   }

//   .t-title5 {
//     font-size: 50px;
//     color:#4073FF;
//   }
//   .t-subtitle5 {
//     font-size: 30px;
//     color:#4073FF;
//     opacity: 0.4;
//   }

//   .t-paragraph2 {
//     margin-bottom: 15px;
//     line-height: 1.5;
//   }

//   .t-page-indicators {
//     color: white;
//     position: absolute;
//     bottom: 90px;
//     right: 120px;
//     z-index: 5;
//   }
  
//   .t-indicator {
//     display: inline-block;
//     width: 25px;
//     height: 25px;
//     border-radius: 50%;
//     background-color: #ccc;
//     opacity: 0.2;
//     margin: 0 5px;
//     cursor: pointer;
//   }
  
//   .t-indicator.active {
//     width: 30px;
//     height: 30px;
//     border-radius: 0; /* Square */
//     opacity: 1.0;
//     background-color: white;
//   }