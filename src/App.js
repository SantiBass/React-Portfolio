import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';

import './App.css';
function App() {
  return (
    <Router>
      <Nav />
     
      <Routes>
        <Route path="/Home" element={<Home />} />
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <></>
      </Routes>
      {/* <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Resume/>
       */}
        <Footer/>
    </Router>
  );
}
export default App;
