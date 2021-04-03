import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import VotingMap from "views/VotingMap/VotingMap.js"; 
import LoginPage from "views/LoginPage/LoginPage.js";
import CreateAccount from "components/CreateAccount/CreateAccount.js"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />

      <Route path="/create-account" component={CreateAccount} />  
      <Route path="/voting-map" component={VotingMap}></Route>
      
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
