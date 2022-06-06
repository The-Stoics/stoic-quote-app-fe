import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function QuoteCard() { // Will take props from form.
    const [quotes, setQuotes] = useState([]);

    useEffect(() => { // GET array of all quotes from the API
        axios
            .get('https://thestoics.herokuapp.com/quotes')
            .then(res => setQuotes(res.data))
            .catch(err => console.log(err))
    }, [quotes]);
    // console.log('quotes STATE =', quotes);

    // Each card needs a delete button.
    return (
        <>
            <h3>
                {quotes.reverse().map(quote => (
                    <div className='card-container' key={quote.id}>
                        <div>{quote.author}</div>
                        <div>{quote.source}</div>
                        <div>{quote.quote}</div>
                    </div>
                ))}
            </h3>
        </>
    )
};