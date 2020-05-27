import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bulma/css/bulma.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import backendForm from './components/backendForm';
import charts from './components/charts';
import cards from './components/cards';
import logs from './components/logs';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div>
          <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src={logo} alt="Utility Notifier" width="50" height="50"/>
              </a>
              <span class="navbar-item">Utility Notifier</span>
              <Link to="/logs" className=""><span class="navbar-item">Gpl Logs </span></Link>
              <Link to="/backend" className=""><span class="navbar-item">Settings </span></Link>
              
            </div>
          </nav>
          <Route path="/backend" component={backendForm}/>
          <Route path="/charts" component={charts}/>
          <Route path="/cards" component={cards}/>
          <Route path="/logs" exact component={logs}/>
        </div>
      </Router>
  );
}

export default App;
