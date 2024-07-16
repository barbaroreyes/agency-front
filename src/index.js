import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AgencyProvider} from "./context/agenciesContext"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AgencyProvider>
      <App />
    </AgencyProvider>
    
  </React.StrictMode>
);

reportWebVitals();
