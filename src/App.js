import React from 'react'
import {Navbar, Questions, Test, Firecopy, Blog} from './components';
import {Header, About, About1, About2, About3, Apps, Team, Community} from './containers';
import { Helmet } from 'react-helmet-async';
import './App.css';
import { Element } from 'react-scroll';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsUse from './components/TermsUse/TermsUse';


const MainLayout = () => (
  <>
    <Navbar />
    <div>
    {/* <div className="snap-scroll-container"> */}
      {/* <div id="longBackground" className='longBackground'> */}
        <section id="home" className="home-element"><Header /></section>
        <section id="about" className="home-element"><About1 /></section>
        <section id="about" className="home-element"><About2 /></section>
        <section id="about" className="home-element"><About3 /></section>
      {/* </div> */}
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
        <Helmet>
          <title>HEARTH: Test Your Cognitive Force & Improve Yourself</title>
          <meta name="description" content="Hearth is here to help. Know yourself better and utilize the power of mind. With the HEARTH Apps, walk your continuous journey of self-improvement." />
          <meta name="robots" content="index, follow"></meta>
        </Helmet>
        <div className='gradient_bg'>
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/blog" element={<Blog />} /> 
              <Route path="/test" element={<Test/>} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/firecopy" element={<Firecopy />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/termsuse" element={<TermsUse />} /> 
            </Routes>
          </div>
    </div>
  )
}

export default App;
