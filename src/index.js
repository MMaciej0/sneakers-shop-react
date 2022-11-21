import React from 'react';
import ReactDOM from 'react-dom/client';
import './globalStyles/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './contexts/GlobalContext/GlobalContext';
import { FilterProvider } from './contexts/FilterContext/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <FilterProvider>
        <Router>
          <App />
        </Router>
      </FilterProvider>
    </AppProvider>
  </React.StrictMode>
);
