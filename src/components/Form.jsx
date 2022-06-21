// import React from 'react';
import React, { useState } from 'react';
import axios from 'axios';
// import * as yup from 'yup';

// let schema = yup.object().shape({
//     author: yup.string().required('Author is required').min(3, 'Author must be at least 3 characters.').max(30, 'Author must be less than 30 characters.'),
//     source: yup.lazy().required('Source is required').min(3, 'Source must be at least 3 characters.').max(30, 'Source must be less than 30 characters.'),
//     quote: yup.lazy().required('Quote is required').min(3, 'Quote must be at least 3 characters.').max(1000, 'Quote must be less than 1000 characters.'),
// });




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