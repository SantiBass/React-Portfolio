import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About/About';
import Nav from './components/Nav/nav';
import Business from './components/Business/Business';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (


      <Router>
        <Nav />
<Routes>
        
        <Route path="/home" element={<Home/>} />
        
        <Route path="/about" element={<About/>} />
        
        <Route path="/business" element={<Business/>}/>
        
        <Route path="/" element={<About/>}/>
         
       
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
