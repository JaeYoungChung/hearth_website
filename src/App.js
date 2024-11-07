import React from 'react'
import {Navbar, Questions, Test, Firecopy, Blog} from './components';
import {Header, About, About1, About2, About3, Apps, Team, Community} from './containers';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';
import { Element } from 'react-scroll';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
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

const formatUrl = (path) => {
  const baseUrl = 'https://hearthishere.com';
  const cleanPath = path === '/' ? '' : path;
  return `${baseUrl}${cleanPath}`;
};

// Detailed meta configurations for each route
const routeMetaTags = {
  '/': {
    title: "HEARTH: Test Your Cognitive Force & Improve Yourself",
    description: "Hearth is here to help. Know yourself better and utilize the power of mind. With the HEARTH Apps, walk your continuous journey of self-improvement.",
    image: "%PUBLIC_URL%//og_home.png",
    type: "website"
  },
  '/blog': {
    title: "HEARTH Blog - Weekly Insights on Psychology and Philosophy",
    description: "Read weekly essays on psychology and philosophy to gain insights on human behavior, personal growth, and the fundamental questions of life and meaning.",
    image: "%PUBLIC_URL%//og_blog.png",
    type: "article"
  },
  '/test': {
    title: "HEARTH Test - Discover your Inner Flame",
    description: "Take the HEARTH Test to find out how you score on different Cognitive Forces and uncover your true color.",
    image: "%PUBLIC_URL%//og_test.png",
    type: "website"
  },
};

const MetaTags = () => {
  const location = useLocation();
  const currentPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
  const currentMeta = routeMetaTags[currentPath] || routeMetaTags['/'];
  const currentUrl = formatUrl(currentPath);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={currentMeta.type} />
      <meta property="og:site_name" content="HEARTH" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={currentMeta.title} />
      <meta property="og:description" content={currentMeta.description} />
      {/* <meta property="og:image" content={currentMeta.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}

      {/* Twitter Card Tags */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      <meta name="twitter:domain" content="hearthishere.com" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={currentMeta.title} />
      <meta name="twitter:description" content={currentMeta.description} />
      {/* <meta name="twitter:image" content={currentMeta.image} /> */}
    </Helmet>
  );
};

const App = () => {
  return (
    <div className = "App">
        <MetaTags />
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
