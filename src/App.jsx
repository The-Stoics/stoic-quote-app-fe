import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { Switch, Route } from 'react-router-dom'; // , useParams ???????
import QuoteCards from './components/QuoteCards';
import Form from './components/Form';




const App = () => {
    const [quotes, setQuotes] = useState([]);




    useEffect(() => { // GET array of all quotes from the API
        axios
            .get('https://thestoics.herokuapp.com/quotes')
            .then(res => setQuotes(res.data))
            .catch(err => console.log(err))
    }, []);
    console.log('quotes STATE =', quotes);

    return (
        <div className='app'>
            <h1> THE STOICS </h1>
            {/* <QuoteCards /> */}
            < Form />


            <h3>
                {quotes.map(quote => (
                    <div className='card-container' key={quote.id}>
                        <div>{quote.author}</div>
                        <div>{quote.source}</div>
                        <div>{quote.quote}</div>
                    </div>
                ))}
            </h3>

        </div>
    );
}

export default App;