import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a React root to render the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application within the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
