import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';





const App = () => {
    const [quotes, setQuotes] = useState([]);


    useEffect(() => { // GET array of all quotes from the API
        axios
            .get('https://thestoics.herokuapp.com/quotes')
            .then(res => setQuotes(res.data))
            .catch(err => console.log(err))
    }, []);


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