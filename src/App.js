import React from 'react'
import {Navbar, Questions, Test, Firecolor, Blog} from './components';
import {Header, About, Apps, Team, Community} from './containers';
import './App.css';
import { Element } from 'react-scroll';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import {db} from "./data";
import {uid} from "uid";


const MainLayout = () => (
  <>
    <div className="longBackground">
      <Element name="header"><Header /></Element>
      <Element name="about"><About /></Element>
    </div>
    <Element name="apps"><Apps /></Element>
    <Element name="team"><Team /></Element>
    <Element name="community"><Community /></Element>
  </>
);

const App = () => {
  return (
    <div className = "App">
        <div className='gradient_bg'>
                <Navbar/>
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
                  <Route path="/firecolor" element={<Firecolor />} />
                  </Routes>
          </div>
    </div>
  )
}

export default App;
