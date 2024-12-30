import React from 'react';
import ReactDOM from 'react-dom/client'; // Mise à jour de l'importation
import './index.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="root">
    <App />
    </div>
  </React.StrictMode>
);
