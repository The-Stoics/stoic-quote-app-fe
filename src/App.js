import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import { Switch, Route } from 'react-router-dom'; // , useParams ???????
// import QuoteCards from './components/QuoteCards';
// import Form from './components/Form';
// <Form />
// <QuoteCards />



export default function App() {
    const [quotes, setQuotes] = useState([]);
    const [formData, setFormData] = useState({
        author: '',
        source: '',
        quote: ''
    });


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
            })
            .then(() => {
                deleteQuote(quote.id)
            })
            .catch(err => console.log(err));
    }

    // Changes 'quotes' state:
    const deleteQuote = (id) => {
        axios
            .delete(`https://thestoics.herokuapp.com/quotes/${id}`)
            .then(res => {
                console.log(res);
                setQuotes(quotes.filter(quote => quote.id !== id))
            })
            .catch(err => console.log(err));
    }


    // Changes quotes state:
    useEffect(() => {
        axios
            .get('https://thestoics.herokuapp.com/quotes')
            .then(res => setQuotes(res.data))
            .catch(err => console.log(err))
    }, [quotes.length]);
    console.log('quotes STATE =', quotes);

    // Changes 'formData' state:
    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Changes 'formData' & 'quotes' state:
    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post('https://thestoics.herokuapp.com/quotes', formData)
            .then(res => {
                setQuotes([...quotes, res.data])
                e.target.reset()
                setFormData({
                    author: '',
                    source: '',
                    quote: ''
                })
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='app'>
            <h1>THE STOICS</h1>

            <form className="form" onSubmit={submitHandler}>

                <input
                    value={formData.author}
                    name="author"
                    type="text"
                    placeholder='Author*'
                    onChange={changeHandler}
                />

                <input
                    value={formData.source}
                    name="source"
                    type="text"
                    placeholder='Source*'
                    onChange={changeHandler}
                />

                <textarea
                    value={formData.quote}
                    name="quote"
                    type="textarea"
                    placeholder='Quote*'
                    onChange={changeHandler}
                />

                <button className="btn hover">SUBMIT</button>
            </form>

            <div>
                {quotes.reverse().map(quote => (
                    <div className='card-container' key={quote.id}>

                        <div className="card-text">
                            <p>{quote.author}</p>
                            <p>{quote.source}</p>
                        </div>

                        <p className='quote-text'>{quote.quote}</p>

                        <div className="update-delete-buttons">
                            <button className="btn hover" onClick={() => deleteQuote(quote.id)}>DELETE</button>
                            <button className="btn hover" onClick={() => updateQuote(quote)}>UPDATE</button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};


