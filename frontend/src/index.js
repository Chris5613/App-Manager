import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/taskbuddy.css';
import './css/skyscope.css';
import App from './App';
// import Nav from './components/TaskBuddy/Tags/Nav'
// import SignupButton from './components/TaskBuddy/UserAuth/SignupBtn';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="app">
    <App />
    </div>
  </React.StrictMode>
);

// const div = ReactDOM.createRoot(document.getElementById('user'))
// div.render(
//   <>
//   <Nav />
//   <SignupButton />
//   </>
// )
