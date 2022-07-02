import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// This is strictly for testing purposes. 
// Comment out when not testing or make sure to deploy production rather than development.
// if (process.env.NODE_ENV === 'development') {
//     const { worker } = require('./components/__mocks__/browser')
//     worker.start()
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
