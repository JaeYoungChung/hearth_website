import React from 'react'
import {Navbar, Questions, Test, Firecolor, Firecopy, Blog, Result} from './components';
import {Header, About, Apps, Team, Community} from './containers';
import './App.css';
import { Element } from 'react-scroll';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const MainLayout = () => (
  <>
    <Navbar />
    <div>
    {/* <div className="snap-scroll-container"> */}
      <div id="longBackground" className='longBackground'>
        <section id="home" className="home-element"><Header /></section>
        <section id="about" className="long-element"><About /></section>
      </div>
        <section id="apps" className="element"><Apps /></section>
        <section id="team" className="element"><Team /></section>
        <section id="community" className="element"><Community /></section>
    </div>
    {/* </div> */}
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
