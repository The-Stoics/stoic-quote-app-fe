import React, { useState } from 'react';
import axios from 'axios';


export default function Form({
    quotes,
    setQuotes,
    formData,
    setFormData,
}) {

    const [formValidation, setFormValidation] = useState('')

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.author.length > 3) {
            setFormValidation('')
            axios
                .post('https://thestoics.herokuapp.com/quotes', formData)
                .then(res => {
                    console.log(res)
                    setQuotes([...quotes, res.data])
                    e.target.reset()
                    setFormData({
                        author: '',
                        source: '',
                        quote: ''
                    })
                })
                .catch(err => console.log(err));
        } else {
            setFormValidation('Author field must contain at least 3 characters.')
        };
    }


    return (
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

            <button type="submit" className="btn hover">SUBMIT</button>

            <p style={{ color: 'red' }}>{formValidation}</p>

        </form>
    )
}