import React from 'react'
import { Navbar} from './components';
import {Header, About, Apps, Contact} from './containers';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className = "App">
        <div className='gradient_bg'>
            <Navbar/>
                  <Routes>
                  <Route path="/" element = {<Header/>} />
                  <Route path="/about" element = {<About/>} />
                  <Route path="/apps" element = {<Apps/>} />
                  <Route path="/contact" element = {<Contact/>} />
                  </Routes>
              </div>
    </div>
  )
}

export default App;