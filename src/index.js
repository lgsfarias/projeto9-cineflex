import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/reset.css';
import './assets/css/style.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector('.root')
);
