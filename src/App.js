import React from 'react';
// import logo from './logo.svg';
import About from './components/About/about';
import Nav from './components/Nav/nav';
import './App.css';

function App() {
  return (
    <div >
    <Nav></Nav>
   <main>
     <About></About>
   </main>
    </div>
  );
}

export default App;
