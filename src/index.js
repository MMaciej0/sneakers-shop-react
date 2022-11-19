import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { AppProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';
import { FilterProvider } from './contexts/FilterContext';

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
