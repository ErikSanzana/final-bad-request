import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SoapProvider from "./context/context.jsx";
import App from "./App.jsx";
import "./index.css";
import "./views/Home/home.css";
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SoapProvider>
        <Auth0Provider domain="ximenagp.us.auth0.com"
          clientId="JgZHqTTwGDyuHisjQziZLJVCDYPI3Eqp"
          authorizationParams={{
          redirect_uri: window.location.origin}}>
        <App />
        </Auth0Provider>
      </SoapProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();