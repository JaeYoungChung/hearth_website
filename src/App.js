import React from 'react'
import {Navbar, Questions, Test, Firecolor, Firecopy, Blog, Result} from './components';
import {Header, About, Apps, Team, Community} from './containers';
import './App.css';
import { Element } from 'react-scroll';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const MainLayout = () => (
  <>
    <Navbar/>
    <div className="snap-scroll-container1">
      <div className="longBackground">
        <Element name="header" className="element"><Header /></Element>
        <Element name="about" className="element"><About /></Element>
      </div>
      <Element name="apps" className="element"><Apps /></Element>
      <Element name="team" className="element"><Team /></Element>
      <Element name="community" className="element"><Community /></Element>
    </div>
  </>
);

const App = () => {
  return (
    <div className = "App">
        <div className='gradient_bg'>
                  <Routes>
                  {/* <Route path="/" element = {<Header/>} />
                  <Route path="/about" element = {<About/>} />
                  <Route path="/apps" element = {<Apps/>} />
                  <Route path="/team" element = {<Team/>} />
                  <Route path="/community" element = {<Community/>} />*/}
                  <Route path="/" element={<MainLayout />} />
                  <Route path="/blog" element={<Blog />} /> 
                  <Route path="/test" element={<Test/>} />
                  <Route path="/questions" element={<Questions />} />
                  <Route path="/result" element={<Result />} />
                  <Route path="/firecolor" element={<Firecolor />} />
                  <Route path="/firecopy" element={<Firecopy />} />
                  </Routes>
          </div>
    </div>
  )
}

export default App;
