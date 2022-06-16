import React, { useState, useEffect } from 'react';
import axios from 'axios';
// As of now, each key press in the form re-renders quotes state. I believe SWR and Suspense will stop that. 
import './App.css';
import Form from './components/Form';
import Delete from './components/Delete';
import Update from './components/Update';



export default function App() {
    const [quotes, setQuotes] = useState([]);
    const [formData, setFormData] = useState({
        author: '',
        source: '',
        quote: ''
    });

    // console.log('formData STATE =', formData);
    console.log('quotes STATE =', quotes);


    useEffect(() => {
        axios
            .get('https://thestoics.herokuapp.com/quotes')
            .then(res => setQuotes(res.data))
            .catch(err => console.log(err))
    }, []);



    return (
        <div className='app'>
            <h1>THE STOICS</h1>

            <Form
                formData={formData}
                setFormData={setFormData}
                quotes={quotes}
                setQuotes={setQuotes}
            />

            <div>
                {[...quotes].reverse().map((quote) => (
                    <div className='card-container' key={quote.id} >
                        <div className="card-text">
                            <p>{quote.author}</p>
                            <p>{quote.source}</p>
                        </div>
                        <p className='quote-text'>{quote.quote}</p>
                        <div className="update-delete-buttons">

                            <Delete
                                quote={quote}
                                quotes={quotes}
                                setQuotes={setQuotes}
                                id={quote.id}
                            />

                            <Update
                                quote={quote}
                                quotes={quotes}
                                setQuotes={setQuotes}
                                formData={formData}
                                setFormData={setFormData}
                            />

                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};