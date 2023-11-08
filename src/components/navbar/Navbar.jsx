import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/home_logo.png'
import england from '../../assets/england.png'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Menu = () => (
  <>
    <p><NavLink to="/" exact activeClassName="selected">HOME</NavLink></p>
    <p><NavLink to="/about" activeClassName="selected">ABOUT</NavLink></p>
    <p><NavLink to="/apps" activeClassName="selected">APPS</NavLink></p>
    <p><NavLink to="/team" activeClassName="selected">TEAM</NavLink></p>
    <p><NavLink to="/community" activeClassName="selected">COMMUNITY</NavLink></p>
  </>
);

const languageOptions = [ 
  {
    id: "en",
    name: "English",
    flagimg: england,
  },
  {
    id: "jp",
    name: "Japanese",
    flagimg: england,
  },
  {
    id: "kr",
    name: "Korean",
    flagimg: england,
  },
];
const defaultLangFlag = <img src={languageOptions[0].flagimg} height="30" width="30" alt="nope" />;


const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/test');
  };
  const handleBlogClick = () => {
    navigate('/blog');
  };
  const [toggleMenu, setToggleMenu] = useState(false);

  const [cssDisplay, setCssDisplay] = useState('none');
    const [langFlag, setLangFlag] = useState(defaultLangFlag)

  const showDropdown = () => {
    if (cssDisplay === 'none'){
      setCssDisplay('block');
    } else {
      setCssDisplay('none');
    }
  };
  
  const selectListItem = (event) => {
    handleLanguageChange(event);
    setCssDisplay('none');
    setLangFlag(<img src={event.target.src} height="30" width="30" alt="nope" />)
  };
  
    const handleLanguageChange = (event) => userLanguageChange(event);
    const userLanguageChange = (event) => {
        console.log("Here grab event.target.id and propagate lang change to app");
    }

  
  return (
    <div className = "navbar">
      <div className = "navbar-links_logo">
         <img src={logo} width={46} height={72} alt = "logo"></img>
      </div>
        <div className = "navbar-links">      
            <div className="navbar-links_container">
              <Menu/>
            </div>
        </div>
        <div className='navbar-lang'>
        {/* Search dropdown language for later adjustments */}
        <select>
          <option value="english" className="english">English</option>
          <option value="japanese" className="japanese">Japanese</option>
          <option value="korean" className="korean">Korean</option>
         </select>

          <p onClick={handleBlogClick}>BLOG</p>
          <button type="button" onClick={handleButtonClick}>TAKE TEST</button>
        </div>
        <div className = "navbar-menu">
          {toggleMenu
          ? <RiCloseLine color = "#fff" size = {27} onClick = {() => setToggleMenu(false)}/>
          : <RiMenu3Line color = "#fff" size = {27} onClick = {() => setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu/>
            </div>
          </div>
        )}
        </div>
        </div>
  )
}

export default Navbar;