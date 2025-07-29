import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // ✅ use App.css, not index.css

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
