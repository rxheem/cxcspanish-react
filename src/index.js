import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

// All Components imports
import App from './App';



ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,document.getElementById('root'))

serviceWorker.unregister();
