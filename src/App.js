import React from 'react'
import {Navbar, Questions, Test, Firecolor, Blog} from './components';
import {Header, About, Apps, Team, Community} from './containers';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';


const App = () => {
  return (
    <div className = "App">
        <div className='gradient_bg'>
            <Navbar/>
                  <Routes>
                  <Route path="/" element = {<Header/>} />
                  <Route path="/about" element = {<About/>} />
                  <Route path="/apps" element = {<Apps/>} />
                  <Route path="/team" element = {<Team/>} />
                  <Route path="/community" element = {<Community/>} />
                  <Route path="/test" element={<Test/>} />
                  <Route path="/questions" element={<Questions />} />
                  <Route path="/firecolor" element={<Firecolor />} />
                  <Route path="/blog" element={<Blog />} />
                  </Routes>
          </div>
    </div>
  )
}

export default App;