import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/taskbuddy.css';
import './css/skyscope.css';
import App from './App';
import Login from './components/TaskBuddy/UserAuth/Login';
import Signup from './components/TaskBuddy/UserAuth/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);

const div = ReactDOM.createRoot(document.getElementById('contain'))
div.render(
<>
<Login />
<Signup />
</>
)
