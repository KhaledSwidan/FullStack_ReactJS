import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { GlobalProvider } from "./context/GlobalContext";

import "./index.css";

import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
  </React.StrictMode>
);
