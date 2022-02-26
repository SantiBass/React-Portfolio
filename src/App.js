import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material'
import './App.css';
function App() {
  const links = {
    gitHub: `https://github.com/SantiBass`,
    linkedIn: `https://www.linkedin.com/in/santiago-ibarra-ryan-946044125/`
  };
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <div className='welcome pageHeight'>
        Santiago Ibarra Ryan.
        <ul style={{ justifyContent: 'left' }} className='flex-row '>
          <li className='hook'>Learning Never Stops</li>
          <li className='hook'>Web Developer</li>
          <li className='hook'>Musician</li>
        </ul>
        <div >
          <ul style={{ justifyContent: 'left' }} className='flex-row '>
            <li className='hook'>
              <button className='button large  is-rounded'> <a href={links.gitHub} without rel="noopener noreferrer" target="_blank">GitHub</a>
                <GitHubIcon style={{ width: '100px', height: "50px" }} />
              </button>
            </li>
            <li className='hook'>
              <button className='button large  is-rounded'> <a href={links.linkedIn} without rel="noopener noreferrer" target="_blank"> LinkedIn</a>    
                <LinkedIn style={{ width: '100px', height: "50px" }} />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
