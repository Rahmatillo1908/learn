import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// bootsrtap uchun
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// bootstrap icons uchun
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

import "../node_modules/font-awesome/css/font-awesome.min.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


