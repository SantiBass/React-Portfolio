import React from 'react';
// import logo from './logo.svg';
import About from './components/About/about';
import Nav from './components/Nav/nav';
import Business from './components/Business/business';
import './App.css';

function App() {
  return (
    <div >
    <Nav></Nav>
   <main>
     <Business></Business>
     <About></About>
   </main>
    </div>
  );
}

export default App;
