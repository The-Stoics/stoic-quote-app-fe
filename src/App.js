import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import Delete from './components/Delete';
import Update from './components/Update';
import Skeleton from './components/Skeleton';


export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [quotes, setQuotes] = useState([]);
    const [formData, setFormData] = useState({
        author: '',
        source: '',
        quote: '',
    });

    useEffect(() => {
        axios
            .get('https://thestoics.herokuapp.com/quotes')
            .then(res => setQuotes(res.data))
            .then(res => setIsLoading(false))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='app'>
            <h1>The Stoics</h1>

            <Form
                quotes={quotes}
                setQuotes={setQuotes}
                formData={formData}
                setFormData={setFormData}
            />

            {isLoading ?
                <>
                    <Skeleton />
                </>
                :
                <>{quotes.sort((a, b) => a.id - b.id).reverse().map((quote) => (
                    <div className='card-container' key={"card-container-" + quote.id}>
                        <div className="card-text">
                            <p>{quote.author}</p>
                            <p>{quote.source}</p>
                        </div>
                        <p className='quote-text'>{quote.quote}</p>
                        <div className="update-delete-buttons">


                            <Delete
                                quotes={quotes}
                                setQuotes={setQuotes}
                                id={quote.id}
                            />

                            <Update
                                quote={quote}
                                quotes={quotes}
                                setQuotes={setQuotes}
                                setFormData={setFormData}
                            />

                        </div>
                    </div>
                ))}
                </>}
        </div >
    );
};