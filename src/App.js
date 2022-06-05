import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import './App.css';
import axios from 'axios';





const App = () => {
    const [quotes, setQuotes] = useState([]);



    // const [quoteId, setQuoteId] = useState({});
    // const params = useParams();
    // console.log('#######################', params.id);
    // useEffect(() => {
    //     console.log('BEFORE AXIOS GET ID')
    //     axios.get(`https://thestoics.herokuapp.com/quotes/${params.id}`)
    //         .then(res => console.log('@@@@@@@@ getting id')) //  setQuoteId(res.data))
    //         .catch(err => console.log(err))
    // }, []);



    useEffect(() => { // GET array of all quotes from the API
        axios
            .get('https://thestoics.herokuapp.com/quotes')
            .then(res => setQuotes(res.data))
            .catch(err => console.log(err))
    }, []);
    // console.log('quotes', quotes);

    return (
        <div>
            <h1 className='app'>THE STOICS</h1>


            <h3>
                {quotes.map(quote => (
                    <div className='card-container' key={quote.id}>
                        <div>{quote.author}</div>
                        <div>{quote.source}</div>
                        <div>{quote.quote}</div>
                    </div>
                ))}
            </h3>


        </div >
    );
}

export default App;