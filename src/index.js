import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { Home } from '@mui/icons-material';
// import Home from './components/Home/Home'
// import Footer from './components/Footer/Footer';
ReactDOM.render( 
  
  <React.StrictMode>
    <App />
{/* <div></div> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
