import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import {CoinProvider} from './CoinContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CoinProvider>
        <App />
      </CoinProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
