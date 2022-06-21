import * as yup from 'yup';





export default yup.object().shape({
    author: yup.string().required('Author is required').min(3, 'Author must be at least 3 characters.').max(30, 'Author must be less than 30 characters.'),
    source: yup.string().required('Source is required').min(3, 'Source must be at least 3 characters.').max(30, 'Source must be less than 30 characters.'),
    quote: yup.string().required('Quote is required').min(3, 'Quote must be at least 3 characters.').max(1000, 'Quote must be less than 1000 characters.'),
});