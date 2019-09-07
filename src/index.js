import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


// Common inports
import Breadcrumb from './common/Breadcrumb';
import IconItem from './common/IconItem';
import DoubleIconItem from './common/DoubleIconItem';

// All static imports
import Header from './static/Header';
import Footer from './static/Footer';

// All Components imports
import Home from './components/Home';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ExamTopics from './components/ExamTopics';

// All Components imports
import App from './App';

ReactDOM.render(
<div>

<Router>
    {/* Header */}
    <Route component={Header} />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/FAQ/" component={FAQ} />
      <Route exact path="/contact/" component={Contact} />
      <Route exact path="/exam-topics/" component={ExamTopics} />

    </Switch>

    {/* Footer */}
    <Route path="/" component={Footer} />
  </Router>
</div>
  ,document.getElementById('root'))

serviceWorker.unregister();
