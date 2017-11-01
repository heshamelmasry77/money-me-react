import React from 'react';
import { render } from 'react-snapshot';
import './stylesheets/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
