//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom";
import App from './App'; 
import './index.css'; 
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="votesecure.us.auth0.com"
    clientId="GIdLuTiPqKOM3qJ4d4fx0J9CjvszyMDX"
    redirectUri={window.location.origin}
  >
  <App />
  </Auth0Provider>,
  document.getElementById('root')
);


//****** TRIED TO USE THIS TO SWITCH PAGES --- DID NOT WORK -- PROBLEMS WITH "SWITCH" ********* */
/* import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch} from "react-router-dom";


import CreateAccount from "./Components/CreateAccount.js";
import LoginPage from "./Components/LoginPage.js";
import VotingMap from "./Components/VotingMap.js";
import TheCandidates from "./Components/TheCandidates.js";
import HomePage from "./Components/HomePage.js";

var hist = createBrowserHistory(); 

ReactDOM.render( 
    <Router history={hist}>
  <Switch>
    <Route path="/" component={HomePage}></Route>
    <Route path="/create-account" component={CreateAccount}></Route>
    <Route path="/login-page" component={LoginPage}></Route>
    <Route path="/voting-map" component={VotingMap}></Route>
    <Route path="/the-candidates" component={TheCandidates}></Route>
  </Switch>
</Router>,
  document.getElementById('root')
); */

