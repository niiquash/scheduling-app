import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

// const domain = process.env.SCHEDULING_AUTH0_DOMAIN;
// const clientId = process.env.SCHEDULING_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-2vdla235b43bye2m.us.auth0.com"
    clientId="7NURVjEgOVB2Jfph0qmRLDCHHBuX6aaz"
    redirectUri={window.location.origin}
  >
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </Auth0Provider>
);

