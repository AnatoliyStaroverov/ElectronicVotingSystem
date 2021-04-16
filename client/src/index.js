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


