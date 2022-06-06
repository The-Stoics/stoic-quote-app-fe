import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function QuoteCard() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => { // GET array of all quotes from the API
        axios
            .get('https://thestoics.herokuapp.com/quotes')
            .then(res => setQuotes(res.data))
            .catch(err => console.log(err))
    }, [quotes]);
    // console.log('quotes STATE =', quotes);


    const deleteQuote = (id) => {
        axios
            .delete(`https://thestoics.herokuapp.com/quotes/${id}`)
            .then(res => {
                console.log(res);
                setQuotes(quotes.filter(quote => quote._id !== id))
            })
            .catch(err => console.log(err));
    };


    return (
        <>
            <h3>
                {quotes.reverse().map(quote => (
                    <div className='card-container' key={quote.id}>
                        <div>{quote.author}</div>
                        <div>{quote.source}</div>
                        <div>{quote.quote}</div>
                        <button onClick={() => deleteQuote(quote.id)}>Delete</button>
                    </div>
                ))}
            </h3>
        </>
    )
};