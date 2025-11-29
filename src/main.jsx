// src/main.jsx (или index.js)
import React from 'react';
import ReactDOM from 'react-dom/client'; // ⚠️ Важно: импорт 'react-dom/client'
import App from './App.jsx'; // ⚠️ Импортируем наш корневой компонент App
import './index.css';

// ⚠️ Находим элемент с ID 'root' и монтируем в него компонент <App />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
