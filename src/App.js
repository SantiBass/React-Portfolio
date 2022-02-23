// import React, { useState } from 'react';
import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  // const [categories] = useState([
  //   {
  //     name: 'commercial',
  //     description: 'Photos of grocery stores, food trucks, and other commercial projects',
  //   },
  //   { name: 'portraits', description: 'Portraits of people in my life' },
  //   { name: 'food', description: 'Delicious delicacies' },
  //   { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  // ])
  // const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (


    <Router>
      <Nav />
      <Routes>

        <Route path="/" element={<Home />} />
        
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />

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
