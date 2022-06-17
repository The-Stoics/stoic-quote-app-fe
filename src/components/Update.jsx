import React from 'react';
import axios from 'axios';


export default function Update({
    quote,
    quotes,
    setQuotes,
    setFormData,
}) {

    const deleteQuote = (id) => {
        console.log('deleteQuote', quotes);
        axios
            .delete(`https://thestoics.herokuapp.com/quotes/${id}`)
            .then(res => {
                console.log(res);
                setQuotes(quotes.filter(quote => quote.id !== id))
            })
            .catch(err => console.log(err));
    }

    const updateQuote = (quote) => {
        axios.put(`https://thestoics.herokuapp.com/quotes/${quote.id}`, quote)
            .then(res => {
                console.log(res)
                setFormData({
                    author: quote.author,
                    source: quote.source,
                    quote: quote.quote
                })
                window.scrollTo({ top: 0, }) // Scrolls to top on edit click.
                deleteQuote(quote.id)
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <button className="btn hover" onClick={() => updateQuote(quote)}>UPDATE</button>
        </>
    )
}