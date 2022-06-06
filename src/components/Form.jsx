import React, { useState } from 'react';
import axios from 'axios';


export default function From() {
    const [formData, setFormData] = useState({
        author: '',
        source: '',
        quote: ''
    });

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post('https://thestoics.herokuapp.com/quotes', formData)
            .then(res => {
                console.log(res);
                e.target.reset()
            })
            .catch(err => console.log(err));
    };


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

            </form>
        </section>
    )
}