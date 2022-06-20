import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import App from "../../App";
import Form from "../Form";


// // Sanity test*
// test('First test', () => {
//     render(<App />);
//     // screen.debug(); // Shows what is in render(<Anthing />) pertaining to the DOM.
//     expect(true).toBe(true); // Sanity check
//     expect(screen.getByText('The Stoics')).toBeInTheDocument(); // Finds the element with the text 'The Stoics'
// });


describe('basic form elements render to the DOM', () => {

    it('should render Form component', () => {
        render(<Form quotes={[]} formData={{}} />);
    });

    it('should render submit button', () => {
        render(<Form formData={{}} />);
        const button = screen.getByText("SUBMIT"); // (/sUbMiT/i) =  Makes it case insensitive. 
        // const button = screen.queryByRole(/button/i); // Alternative query, button is a role. 
        // const submitButton = screen.getByRole('button', { name: /submit/i }) // This selects the buttons, and just to make sure it also specifies the name that is in the button.
        expect(button).toBeInTheDocument();
    });

    it('should render input fields', async () => {
        render(<Form quotes={[]} formData={{}} />);
        const authorInput = screen.getByPlaceholderText(/Author*/i);
        const sourceInput = screen.getByPlaceholderText(/Source*/i);
        const quoteInput = screen.getByPlaceholderText(/Quote*/i);
        expect(authorInput).toBeInTheDocument();
        expect(sourceInput).toBeInTheDocument();
        expect(quoteInput).toBeInTheDocument();
    });
});


describe('mocking form input and submit behavior', () => {
    const mockedSetQuotes = jest.fn();
    const mockedSetFormData = jest.fn()
            
    it('submiting form should reset fields to empty on submit click', async () => {
        render(<Form
            quotes={[]}
            formData={{}}
            setQuotes={mockedSetQuotes}
            setFormData={mockedSetFormData}
        />);
        // Selects inputs & submit button.
        const authorInput = screen.getByPlaceholderText(/author*/i);  
        const sourceInput = screen.getByPlaceholderText(/source*/i);         
        const quoteInput = screen.getByPlaceholderText(/quote*/i);         
        const submitButton = screen.getByRole('button', { name: /submit/i }) 
        // Creates input field values.
        fireEvent.change(authorInput, { target: { value: 'Seneca' } });
        fireEvent.change(sourceInput, { target: { value: 'On Anger' } });  
        fireEvent.change(quoteInput, { target: { value: 'The greatest remedy for anger is postponement' } });  
        // Asserts that input field values match.
        expect(authorInput.value).toBe('Seneca')
        expect(sourceInput.value).toBe('On Anger')                           
        expect(quoteInput.value).toBe('The greatest remedy for anger is postponement')                           
        // Mocks submit click.
        fireEvent.click(submitButton)   
        // Waits for submitHandler logic to complete. 
        // Expects submit click to have reset the field
        await waitFor(() => {
            expect(authorInput.value).toBe("")
            expect(sourceInput.value).toBe("")  
            expect(quoteInput.value).toBe("")  
        })
    });
});


































// console.log('@@@@@@@@@@@@@@@@@@~~~~~~~~>', authorInput.value)



// export default function Form({
//     quotes,
//     setQuotes,
//     formData,
//     setFormData,
// }) {
 
//     const changeHandler = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const submitHandler = (e) => {
//         e.preventDefault();
//         axios
//             .post('https://thestoics.herokuapp.com/quotes', formData)
//             .then(res => {
//                 setQuotes([...quotes, res.data])
//                 e.target.reset()
//                 setFormData({
//                     author: '',
//                     source: '',
//                     quote: ''
//                 })
//             })
//             .catch(err => console.log(err));
//     };


//       <input
//         name="author"
//         placeholder="Author*"
//         type="text"
//         value=""
//       />


//       <button type="submit">
//         SUBMIT
//       </button>







































// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@ Everything below fails. @@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// test('mocking input', () => {

    // const fakeQuotes = jest.fn(() => {
    //     return 'This is FAKE!'
    // });

    // const fakeSubmitHandler = jest.fn(() => {
    //     return 'This is FaKE!'
    // });

    // const fakeSetFormData = jest.fn(() => {
    //     return 'This is FAKE!'
    // });

    // const fakeFormData = jest.fn(() => {
    //     return 'This is FAKE!'
    // });

    // const fakeSetQuotes = jest.fn(() => {
    //     return 'This is FaaaAKE!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
    // });

    // render(<Form
        // quotes={fakeQuotes}
        // formData={fakeFormData}
    // submitHandler={fakeSubmitHandler}
    // setFormData={fakeSetFormData}
    // setQuotes={fakeSetQuotes}

//     />);

//     const button = screen.getByRole(/button/i); // button is a role.
//     userEvent.click(button);
//     userEvent.click(button);
//     userEvent.click(button);
//     expect(fakeSubmitHandler).toHaveBeenCalledTimes(3);

//     console.log('@@@@@@@@@@@@', fakeFormData.mock); //  This should show 3 calls, but does not.
// })



// test('Testing if data/quotes get rendered', async () => {
//     render(<Form
//         quotes={[]}
//         formData={{}}
//     />);

//     screen.getByRole('');
//     const button = await screen.getByRole(button);
//     userEvent.click(button);
//     // expect(screen.getAllByTestId('banana')).toHaveLength(5);
// });
