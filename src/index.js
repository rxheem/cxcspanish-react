import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

// All static imports
import Header from './static/Header';
import Footer from './static/Footer';

// All Components imports
import App from './App';
import Home from './components/Home';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ExamTopics from './components/ExamTopics';

// Topics

// Tenses

// Articles

const routes = (
  <Router>
    <div>
      <Route path="/" component={Header} />
      <Route exact path="/" component={App} />
      <Route exact path="/FAQ" component={FAQ} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/exam-topics" component={ExamTopics} />
      <Route path="/" component={Footer} />
    </div>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'))

serviceWorker.unregister();
