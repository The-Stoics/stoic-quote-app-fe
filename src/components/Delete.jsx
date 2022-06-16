import React from 'react';
import axios from 'axios';


export default function Delete({ quotes, setQuotes, id }) {

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

    return (
        <>
            <button onClick={() => deleteQuote(id)} className="btn hover">DELETE</button>
        </>
    )
}