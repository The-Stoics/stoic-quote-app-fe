import { fireEvent, getByTestId, render, screen, waitFor, userEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../../App";
import Form from "../Form";
import { server } from '../../components/__mocks__/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'wArNiNg' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// data-testid="banana"
// Look at common testing methods, not to be num toBe visable and all that jazz. RTL cheat sheet
// Add Test Driven Development to the project. Click to sort authors by name.


// // Sanity test*
test('First test', () => {
    render(<App />);
    // screen.debug(); // Shows what is in render(<Anthing />) pertaining to the DOM.
    expect(true).toBe(true); // Sanity check
    expect(screen.getByText('The Stoics')).toBeInTheDocument(); // Finds the element with the text 'The Stoics'
});

// __________________________________________________________________

// Google Shallow mount and wrapper*
// State is always mocked

it('form input updates value when typing and resets on submit', async () => {

    let mockFormData = {
        author: '',
        source: '',
        quote: ''
    }

    let mockQuotes = [];


    const setFormData = jest.fn((newData) => {
        mockQuotes = newData;
    });

    const screen = render(<Form
        quotes={mockQuotes}
        setQuotes={(newQuote) => {
            mockQuotes.push(newQuote);
        }}
        formData={mockFormData}
        setFormData={setFormData}
    />);


    const authorInput = screen.getByPlaceholderText(/author*/i);
    const sourceInput = screen.getByPlaceholderText(/source*/i);
    const quoteInput = screen.getByPlaceholderText(/quote*/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });


    fireEvent.change(authorInput, { target: { value: 'Seneca' } }); // returns true. Why?
    console.log('authorInput.value =', authorInput.value);

    expect(authorInput.value).toBe('Seneca');
    // await waitFor(() => expect(authorInput.value).toBe('Seneca'));
    // console.log('authorInput.value =', authorInput);
    // fireEvent.change(sourceInput, { target: { value: 'On Anger' } });
    // fireEvent.change(quoteInput, { target: { value: 'The greatest remedy for anger is postponement' } });


    // expect(authorInput.value).toBe('Seneca');
    // expect(sourceInput.value).toBe('On Anger');
    // expect(quoteInput.value).toBe('The greatest remedy for anger is postponement');

    // fireEvent.click(submitButton)

    // await waitFor(() => {
    //     expect(authorInput.value).toBe("");
    //     expect(sourceInput.value).toBe("");
    //     expect(quoteInput.value).toBe("");
    // })
});







// ------------------------------------------------------------------

// test('Testing if data/quotes get rendered', async () => {
//     render(<App />); // Fails with App and Form
//     // render(<Form
//     //     quotes={[]}
//     //     formData={{}}
//     // />);

//     const button = await screen.getByRole(button);
//     // userEvent.click(button);
//     // expect(screen.getAllByTestId('banana')).toHaveLength(3);
//     screen.debug()
// });


// ------------------------------------------------------------------








// This works @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// describe('basic form elements render to the DOM', () => {

//     it('should render Form component', () => {
//         render(<Form quotes={[]} formData={{}} />);
//     });

//     it('should render submit button', () => {
//         render(<Form formData={{}} />);
//         const button = screen.getByText("SUBMIT"); // (/sUbMiT/i) =  Makes it case insensitive.
//         // const button = screen.queryByRole(/button/i); // Alternative query, button is a role.
//         // const submitButton = screen.getByRole('button', { name: /submit/i }) // This selects the buttons, and just to make sure it also specifies the name that is in the button.
//         expect(button).toBeInTheDocument();
//     });

//     it('should render input fields', async () => {
//         render(<Form quotes={[]} formData={{}} />);
//         const authorInput = screen.getByPlaceholderText(/Author*/i);
//         const sourceInput = screen.getByPlaceholderText(/Source*/i);
//         const quoteInput = screen.getByPlaceholderText(/Quote*/i);
//         expect(authorInput).toBeInTheDocument();
//         expect(sourceInput).toBeInTheDocument();
//         expect(quoteInput).toBeInTheDocument();
//     });
// });


// describe('form inputs and submissions', () => {
//     it('form input updates value when typing and resets on submit', async () => {
//         render(<App />); // Works with App but not with Form.

//         // Selects inputs & submit button.
//         const authorInput = screen.getByPlaceholderText(/author*/i);
//         const sourceInput = screen.getByPlaceholderText(/source*/i);
//         const quoteInput = screen.getByPlaceholderText(/quote*/i);
// const submitButton = screen.getByRole('button', { name: /submit/i });

//         // Creates input field values.
//         fireEvent.change(authorInput, { target: { value: 'Seneca' } });
//         fireEvent.change(sourceInput, { target: { value: 'On Anger' } });
//         fireEvent.change(quoteInput, { target: { value: 'The greatest remedy for anger is postponement' } });

//         // Asserts that input field values match.
//         expect(authorInput.value).toBe('Seneca');
//         expect(sourceInput.value).toBe('On Anger');
//         expect(quoteInput.value).toBe('The greatest remedy for anger is postponement');

//         // Mocks submit click.
//         fireEvent.click(submitButton)

//         // Waits for submitHandler logic to complete.
//         // Expects submit click to have reset the field
//         await waitFor(() => {
//             expect(authorInput.value).toBe("");
//             expect(sourceInput.value).toBe("");
//             expect(quoteInput.value).toBe("");
//         })
//     });


// it('form submissions renders to DOM on submit', async () => {
//     render(<App />);
//     const authorInput = screen.getByPlaceholderText(/Author*/i);
//     const sourceInput = screen.getByPlaceholderText(/Source*/i);
//     const quoteInput = screen.getByPlaceholderText(/Quote*/i);
//     const submitButton = screen.getByRole('button', { name: /submit/i });

//     fireEvent.change(authorInput, { target: { value: 'AuthorMock' } });
//     fireEvent.change(sourceInput, { target: { value: 'SourceMock' } });
//     fireEvent.change(quoteInput, { target: { value: 'QuoteMock' } });

//     fireEvent.click(submitButton);

//     await waitFor(() => {
//         expect(screen.getByText('AuthorMock')).toBeInTheDocument();
//         expect(screen.getByText('SourceMock')).toBeInTheDocument();
//         expect(screen.getByText('QuoteMock')).toBeInTheDocument();
//     });
// });

// });




// TODO tests:

// it('should not allow form submission if author text is less than 3 characters', async () => {});
// it('quote should no be in document upon clicking delete', async () => {});
// it('should render h1 header to the DOM', async () => {});
// it('should render a list of quote cards when isLoading is false', async () => {});
// it('should render Skeleton loading component when isLoading is true', async () => {});
// it('should render Delete component', async () => {});
// it('should render Update component', async () => {});


// expect(screen.getAllByTestId('banana')).toHaveLength(5);















































// Could not get this one to work.***
// test('mocking input', () => {

//     const fakeQuotes = jest.fn(() => {
//         return 'This is FAKE!'
//     });

//     const fakeSubmitHandler = jest.fn(() => {
//         return 'This is FaKE!'
//     });

//     const fakeSetFormData = jest.fn(() => {
//         return 'This is FAKE!'
//     });

//     const fakeFormData = jest.fn(() => {
//         return 'This is FAKE!'
//     });

//     const fakeSetQuotes = jest.fn(() => {
//         return 'This is FaaaAKE!'
//     });

//     render(<App
//         // quotes={fakeQuotes}
//         // formData={fakeFormData}
//         submitHandler={fakeSubmitHandler}
//     // setFormData={fakeSetFormData}
//     // setQuotes={fakeSetQuotes}
//     />);

//     const button = screen.getByRole(/button/i); // button is a role.
//     fireEvent.click(button);
//     // userEvent.click(button);
//     // userEvent.click(button);
//     expect(button).toHaveBeenCalledTimes(1);

//     console.log('@@@@@@@@@@@@', fakeFormData.mock);
// })







