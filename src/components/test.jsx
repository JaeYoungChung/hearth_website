// const MainLayout = () => (
//   <>
//   <Navbar />
//   <div>
//       <section id="header" className="element"><Header /></section>
//       <section id="about" className="long-element"><About /></section>
//       <section id="apps" className="element"><Apps /></section>
//       <section id="team" className="element"><Team /></section>
//       <section name="community" className="element"><Community /></section>
//     </div>
// </>
// );

// const App = () => {
// return (
//   <div className = "App">
//       <div className='gradient_bg'>
//                 <Routes>
//                 <Route path="/" element={<MainLayout />} />
//                 <Route path="/blog" element={<Blog />} /> 
//                 <Route path="/test" element={<Test/>} />
//                 <Route path="/questions" element={<Questions />} />
//                 </Routes>
//         </div>
//   </div>
// )
// }

// CSS:
// html, body {
//     scroll-snap-type: y mandatory;
//     scroll-behavior: smooth;
//     overflow-y: scroll;
//     height: 100vh;
//   }
//   .longBackground {
//     background-image: url('/public/main_bg.png');
//     background-size: cover;
//     background-repeat: no-repeat;
//     min-height: 300vh;
//     background-position: center -130px;
// }

// .element {
//     scroll-snap-align: start;
//     scroll-snap-stop: always;
//     height: 100vh;
//   }
//   .long-element {
//     scroll-snap-align: start;
//     height: 300vh;
//   }


//   Navbar:
//   const Navbar = () => {

//     const location = useLocation(); // Use useLocation hook to get the current location object
//     const shouldShowMenu = location.pathname !== '/blog' && location.pathname !== '/test';
 
//     const Menu = () => (
//       <>
//       <li className='nav-item'>
//         <p>
//           <Link to="/" onClick={(e) => {
//             e.preventDefault();
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//           }} activeClass='active'>Home</Link>
//         </p>
//       </li>
//       <li className='nav-item'>
//         <p><Link to="about" spy={true} smooth={true} duration={300} activeClass='active'>About</Link></p>
//       </li>
//       <li className='nav-item'>
//         <p><Link to="apps" spy={true} smooth={true} duration={300} activeClass='active'>Apps</Link></p>
//       </li>
//       <li className='nav-item'>
//         <p><Link to="team" spy={true} smooth={true} duration={300} activeClass='active'>Team</Link></p>
//       </li>
//       <li className='nav-item'>
//         <p><Link to="community" spy={true} smooth={true} duration={300} activeClass='active'>Community</Link></p>
//       </li>
//   </>
//     );
  
//     const navigate = useNavigate();
  
//     const handleButtonClick = () => {
//       navigate('/test');
//     };
//     const handleBlogClick = () => {
//       navigate('/blog');
//     };
//     const [toggleMenu, setToggleMenu] = useState(false);
  
//     return (
//       <div className = "navbar">
//           {shouldShowMenu && (
//             <div className = "navbar-links">      
//                 <div className="navbar-links_container">
//                   <Menu/>
//                 </div>
//             </div>
//           )}
//           <div className = "navbar-menu">
//             {toggleMenu
//             ? <RiCloseLine color = "#fff" size = {27} onClick = {() => setToggleMenu(false)}/>
//             : <RiMenu3Line color = "#fff" size = {27} onClick = {() => setToggleMenu(true)}/>
//           }
//           {toggleMenu &&(
//             <div className='navbar-menu_container scale-up-center'>
//               <div className='navbar-menu_container-links'>
//                 <Menu/>
//               </div>
//             </div>
//           )}
//           </div>
//           </div>
//     )
//   }

//   CSS:
//   .navbar-links {
//     flex: 1;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     padding-left: 20px;
// }

// .navbar-links a {
//     opacity: 0.5;
//     font-family: "classico-urw", sans-serif;
//     font-size: 20px;
//     transition: opacity 0.3s, color 0.3s;
//     margin-right: 25px;
// }

// .nav-item {
//     padding-bottom: 25px;
//     list-style: none;
// }

// .nav-item .active {
//     border-bottom: 2px solid white;
//     color: white; 
//     opacity: 1;
// }

  