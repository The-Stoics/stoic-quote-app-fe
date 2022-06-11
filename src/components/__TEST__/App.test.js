import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../../App";


// How do I know if I am using RTL or Jest?


test('First test', () => {
    render(<App />);
    // screen.debug();
    // expect(true).toBe(true);
    // expect(screen.getByText('THE STOICS')).toBeInTheDocument();
    screen.getByRole('') // 15 min mark
});