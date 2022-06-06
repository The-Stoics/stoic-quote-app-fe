import './App.css';
import React from 'react';
// import { Switch, Route } from 'react-router-dom'; // , useParams ???????
import QuoteCards from './components/QuoteCards';
import Form from './components/Form';




export default function App() {

    return (
        <div className='app'>

            <h1> THE STOICS </h1>

            <Form />
            <QuoteCards />

        </div>
    );
};
