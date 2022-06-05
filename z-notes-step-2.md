Had to refactor the index.js due to React 18 changes.


```js
// import React, { useEffect, useState } from 'react';
// useParams
import React, { useEffect, useState, useParams } from 'react';
import './App.css';
import axios from 'axios';





const App = () => {
    const [quotes, setQuotes] = useState([]);
    const [quoteId, setQuoteId] = useState({});


    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://thestoics.herokuapp.com/quotes${id}`)
            .then(res => setQuoteId(res.data))
            .catch(err => console.log(err))
    }, [id]);


    useEffect(() => { // GET array of all quotes from the API
        axios
            .get('https://thestoics.herokuapp.com/quotes')
            .then(res => setQuotes(res.data))
            .catch(err => console.log(err))
    }, []);


    return (
        <div>
            <h1 className='app'>THE STOICS</h1>


            {console.log(quoteId)}


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