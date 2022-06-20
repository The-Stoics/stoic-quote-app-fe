import React from 'react';
import axios from 'axios';



export default function Form({
    quotes,
    setQuotes,
    formData,
    setFormData,
}) {

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
        </form>
    )
}