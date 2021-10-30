import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { StockDetails } from './pages/StockDetails';

ReactDOM.render(
    <Router>
        <div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/details/:name">
            <StockDetails />
          </Route>
        </Switch>
        </div>
    </Router>
  ,
  document.getElementById('root')
);
