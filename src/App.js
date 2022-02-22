import React, { useState } from 'react';
// import logo from './logo.svg';
import About from './components/About/about';
import Nav from './components/Nav/nav';
import Business from './components/Business/business';
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ])
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div >
    <Nav>
      categories = {categories}
      setCurrentCategory= {setCurrentCategory}
      currentCategory={currentCategory}
    </Nav>
   <main>
     <Business></Business>
     <About></About>
   </main>
    </div>
  );
}

export default App;
