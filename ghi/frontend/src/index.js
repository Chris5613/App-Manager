import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Nav from './components/TaskBuddy/Tags/Nav'
import Footer from './components/TaskBuddy/Tags/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <div className="app">
    <App />
    </div>
    <Footer />
  </React.StrictMode>
);
