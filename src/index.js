import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AgencyProvider} from "./context/agenciesContext";
import {BrowserRouter as Router} from "react-router-dom"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AgencyProvider>
      <Router>
        <App />
    </Router>
   </AgencyProvider>
    
  </React.StrictMode>
);

reportWebVitals();
