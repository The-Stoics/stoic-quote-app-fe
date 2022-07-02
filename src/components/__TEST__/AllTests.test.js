import { fireEvent, getByTestId, render, screen, waitFor, userEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../../App";
import Form from "../Form";
import Delete from "../Delete";
import Update from "../Update";
import { server } from '../__mocks__/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'wArNiNg' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe('Sanity tests to check if components render', () => {

    test('First test', () => {
        render(<App />);
        // screen.debug(); // Shows what is in render(<Anthing />) pertaining to the DOM.
        expect(true).toBe(true);
        expect(screen.getByText(/the stoics/i)).toBeInTheDocument();
    });

    it('should render Form component', () => {
        render(<Form quotes={[]} formData={{}} />);
    });

    it('should render Delete component', () => {
        render(<Delete />);
    });

    it('should render Update component', () => {
        render(<Update />);
    });
});



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


describe('form inputs and submissions render', () => {

    it('form input updates value when typing and resets on submit', async () => {
        render(<App />);

        // Selects inputs & submit button.
        const authorInput = screen.getByPlaceholderText(/author*/i);
        const sourceInput = screen.getByPlaceholderText(/source*/i);
        const quoteInput = screen.getByPlaceholderText(/quote*/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });

        // Creates input field values.
        fireEvent.change(authorInput, { target: { value: 'Seneca' } });
        fireEvent.change(sourceInput, { target: { value: 'On Anger' } });
        fireEvent.change(quoteInput, { target: { value: 'The greatest remedy for anger is postponement' } });

        // Asserts that input field values match.
        expect(authorInput.value).toBe('Seneca');
        expect(sourceInput.value).toBe('On Anger');
        expect(quoteInput.value).toBe('The greatest remedy for anger is postponement');

        // Mocks submit click.
        fireEvent.click(submitButton)

        // Waits for submitHandler logic to complete.
        // Expects submit click to have reset the field
        await waitFor(() => {
            expect(authorInput.value).toBe("");
            expect(sourceInput.value).toBe("");
            expect(quoteInput.value).toBe("");
        })
    });

    it('form submissions renders to DOM on submit', async () => {
        render(<App />);
        const authorInput = screen.getByPlaceholderText(/Author*/i);
        const sourceInput = screen.getByPlaceholderText(/Source*/i);
        const quoteInput = screen.getByPlaceholderText(/Quote*/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });

        fireEvent.change(authorInput, { target: { value: 'AuthorMock' } });
        fireEvent.change(sourceInput, { target: { value: 'SourceMock' } });
        fireEvent.change(quoteInput, { target: { value: 'QuoteMock' } });

        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('AuthorMock')).toBeInTheDocument();
            expect(screen.getByText('SourceMock')).toBeInTheDocument();
            expect(screen.getByText('QuoteMock')).toBeInTheDocument();
        });
    });
});



it('should not allow form submission if author text is less than 3 characters', async () => {
    render(<App />);
    const authorInput = screen.getByPlaceholderText(/Author*/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(authorInput, { target: { value: 'a' } });
    fireEvent.click(submitButton);
    expect(screen.getByText('Author field must contain at least 3 characters.')).toBeInTheDocument();
});

it('quote should not be in document upon clicking delete', async () => {
    render(<App />);
    const authorInput = screen.getByPlaceholderText(/Author*/i);
    const sourceInput = screen.getByPlaceholderText(/Source*/i);
    const quoteInput = screen.getByPlaceholderText(/Quote*/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(authorInput, { target: { value: 'AuthorMock' } });
    fireEvent.change(sourceInput, { target: { value: 'SourceMock' } });
    fireEvent.change(quoteInput, { target: { value: 'QuoteMock' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(screen.getByText('AuthorMock')).toBeInTheDocument();
        expect(screen.getByText('SourceMock')).toBeInTheDocument();
        expect(screen.getByText('QuoteMock')).toBeInTheDocument();
    });

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    await waitFor(() => {
        expect(screen.queryByText('AuthorMock')).not.toBeInTheDocument();
        expect(screen.queryByText('SourceMock')).not.toBeInTheDocument();
        expect(screen.queryByText('QuoteMock')).not.toBeInTheDocument();
    });
});