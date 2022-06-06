import React, { useState } from 'react';
import axios from 'axios';
// import QuoteCards from './QuoteCards';





export default function From() {
    const [formData, setFormData] = useState({
        // id: '',   // Might not need this.
        author: '',
        source: '',
        quote: ''
    });

    const changeHandler = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // clear form on submit
    const submitHandler = e => {
        e.preventDefault();
        axios
            .post('https://thestoics.herokuapp.com/quotes', formData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // need to clear form after submit.

    return (
        <section>
            <form className="labels" onSubmit={submitHandler}>

                <label>
                    <p>Author</p>
                    <input
                        name="author"
                        type="text"
                        onChange={changeHandler}
                    />
                </label>

                <label>
                    <p>Source</p>
                    <input
                        name="source"
                        type="text"
                        onChange={changeHandler}
                    />
                </label>

                <label>
                    <p>Quote</p>
                    <input
                        className="quote-input"
                        name="quote"
                        type="textarea"
                        onChange={changeHandler}
                    />
                </label>

                <button>SUBMIT</button>

                {/* <QuoteCards formData={formData} /> */}

            </form>
        </section>
    )
}