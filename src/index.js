import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-snapshot';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
