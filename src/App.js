import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Business from './components/Business/Business';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (


    <Router>
      <Nav />
      <Routes>

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/business" element={<Business />} />

        <Route path="/contact" element={<Contact />} />


      </Routes>
    </Router>



    //   <div >
    //   <Nav></Nav>
    //  <main>
    //    <Business></Business>
    //    <About></About>
    //  </main>
    //   </div>
  );
}

export default App;
