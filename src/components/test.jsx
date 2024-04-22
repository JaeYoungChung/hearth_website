// const Navbar = () => {    
  
//     const location = useLocation(); // Use useLocation hook to get the current location object
//     const [activeSection, setActiveSection] = useState('');
  
//     useEffect(() => {
//       const handleIntersection = (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       };
  
//       const observer = new IntersectionObserver(handleIntersection, {
//         threshold: 0.1,
//       });
  
//       const sections = document.querySelectorAll('section');
//       sections.forEach((section) => {
//         observer.observe(section);
//       });
  
//       return () => {
//         sections.forEach((section) => {
//           observer.unobserve(section);
//         });
//       };
//     }, []);
  
//     const handleClick = (elementId) => {
//       const element = document.getElementById(elementId);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     };
  
//     const Menu = () => (
//       <>
//         <li className='nav-item'>
//           <p>
//             <a
//               href="#home"
//               className={activeSection === 'home' ? 'active' : ''}
//               onClick={() => handleClick('home')}
//             >
//               Home
//             </a>
//           </p>
//         </li>
//         <li className='nav-item'>
//           <p>
//             <a
//               href="#about"
//               className={activeSection === 'about' ? 'active' : ''}
//               onClick={() => handleClick('about')}
//             >
//               About
//             </a>
//           </p>
//         </li>
//         <li className='nav-item'>
//           <p>
//             <a
//               href="#apps"
//               className={activeSection === 'apps' ? 'active' : ''}
//               onClick={() => handleClick('apps')}
//             >
//               Apps
//             </a>
//           </p>
//         </li>
//         <li className='nav-item'>
//           <p>
//             <a
//               href="#team"
//               className={activeSection === 'team' ? 'active' : ''}
//               onClick={() => handleClick('team')}
//             >
//               Team
//             </a>
//           </p>
//         </li>
//         <li className='nav-item'>
//           <p>
//             <a
//               href="#community"
//               className={activeSection === 'community' ? 'active' : ''}
//               onClick={() => handleClick('community')}
//             >
//               Community
//             </a>
//           </p>
//         </li>
//       </>
//     );
//     const navigate = useNavigate();
  
//     const handleButtonClick = () => {
//       navigate('/test');
//     };
//     const handleBlogClick = () => {
//       navigate('/blog');
//     };
    
//     return (
//       <div className = "navbar">
//         <div className = "navbar-links_logo">
//           <NavLink to='/'>
//            <img src={logo} width={46} height={72} alt = "logo"></img>
//           </NavLink>
//         </div>
  
//         {shouldShowMenu && (
//             <div className = "navbar-links">      
//                 <div className="navbar-links_container">
//                   <Menu/>
//                 </div>
//             </div>
//           )}
//     )
//   }


//   .navbar {
//     font-family: "classico-urw", sans-serif;
//     display: flex;
//     /* display: none; */
//     justify-content: space-between;
//     align-items: center;
//     padding: 1rem 3rem;
//     padding-bottom: 0;
//     position: sticky;
//     top: 0;
//     z-index: 40;
// }
   
// .navbar-links {
//     flex: 1;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     padding-left: 20px;
// }

// .nav-item a {
//     opacity: 0.5;
//     font-family: "classico-urw", sans-serif;
//     font-size: 20px;
//     transition: opacity 0.3s, color 0.3s;
//     margin-right: 25px;
//   }
  
//   .nav-item a.active {
//     opacity: 1;
//   }

// .navbar-links a {
//     opacity: 0.5;
//     font-family: "classico-urw", sans-serif;
//     font-size: 20px;
//     transition: opacity 0.3s, color 0.3s;
//     margin-right: 25px;
// }

// .nav-item {
//     padding-bottom: 0px;
//     list-style: none;
// }

// .nav-item .active {
//     border-bottom: 2px solid white;
//     color: white; 
//     opacity: 1;
// }

// .navbar-links a:hover {
//     opacity: 0.75;
//     border-bottom: 2px solid white;
// }

// .navbar-links_logo{
//     margin-right: 1.5rem;
// }

// .navbar-links_logo img{
// top: 70px;
// left: 70px;
// height: 76px;
// opacity: 1;
// }

// .logo-text{
//     font-family: "classico-urw", sans-serif;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     top: 159px;
//     left: 67px;
//     width: 48px;
//     height: 14px;
//     color: white;
//     text-align: center;
//     opacity: 0.5;
// }

// .navbar-links_container{
//     display: flex;
//     flex-direction: row;
// }

// .nav-button{
//     cursor: pointer; 
//     font-family: "classico-urw", sans-serif;
//     width: 120px;
//     min-height: 38px;
//     font-size: 17px;
//     background-color: transparent;
//     border-radius: 5px 5px 5px 5px;
//     border-color: white;
//     color: white;
//     border: 1px solid #FFFFFF;
// }

// select {
//     color: white;
//     background-color: transparent;
//     padding: 10px;
//     font-size: 16px;
//     width: 100px;
// }

// .navbar-links_container p,
// .navbar-lang p,
// .navbar-menu_container p {
//     color: #fff;
//     font-family: var(--font-family);
//     font-size: 17px;
//     line-height: 25px;
//     text-transform: capitalize;
//     margin: 0 1rem;
//     cursor: pointer;
// }

// .navbar-menu {
//     margin-left: 1rem;
//     display: none;
//     position: relative;
// }

// .navbar-menu svg{
//     cursor: pointer;
// }

// .navbar-menu_container {
//     display: flex;
//     justify-content: flex-end;
//     align-items: flex-end;
//     flex-direction: column;
//     text-align: end;
//     background-color: var(--color-footer);
//     padding: 2rem;
//     position: absolute;
//     top: 40px;
//     right: 0;
//     margin-top: 1rem;
//     min-width: 210px;
//     border-radius: 5px;
//     box-shadow: 0 0 5 rgba(0,0,0,2);
// }

// .navbar-menu_container p {
//     margin: 1rem 0;
// }

// .navbar-menu_container-links-lang{
//     display: none;
// }

// .navbar-menu svg {
//   font-size: 2rem;
//   cursor: pointer;
// }

// This is my react js code for my navigation bar at the top of the page. I would like to display a different format for the mobile responsive version. Can you edit the code so that for the mobile version, all the things inside the navigation bar, except the logo are hidden inside a small menu bar at the top right of the page? When the user clicks the small menu bar, all of the contents inside are displayed as a full sized screen page with a close button on the top right.
