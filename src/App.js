import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About/about';
import Nav from './components/Nav/nav';
import Business from './components/Business/business';
import './App.css';

function App() {
  return (


      <Router>
        <Nav />
<Routes>
        <Route path="/business" element={<Business/>}/>
        

        <Route path="/about" element={<About/>} />
        

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
