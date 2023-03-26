import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import AppRoutes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <AppRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
