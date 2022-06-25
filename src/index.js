import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// if (process.env.NODE_ENV === 'development') {
//     require('./components/__mocks__/browser')
// }

// if (process.env.NODE_ENV === 'development') {
//     const { worker } = require('./components/__mocks__/browser')
//     worker.start()
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
