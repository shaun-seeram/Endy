import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('Submits data', () => {
    render(<App />);
    const nameInput = screen.getByPlaceholderText("Name")
    expect(nameInput).toBeInTheDocument()

    fireEvent.change(nameInput, {
        target: {
            value: "Test"
        }
    })

    expect(nameInput.value).toEqual("Test")

    const submit = screen.getByText("Add to Contacts")
    fireEvent.click(submit)

    expect(nameInput.value).not.toEqual("Test")
});

test('Email autocomplete appears', () => {
    render(<App />);
    const emailInput = screen.getByPlaceholderText("Email")

    const emailButton = screen.queryByText("aol.com")
    expect(emailButton).not.toBeInTheDocument()

    fireEvent.change(emailInput, {
        target: {
            value: "a@a"
        }
    })

    const emailButtonAppeared = screen.queryByText("aol.com")
    expect(emailButtonAppeared).toBeInTheDocument()

    fireEvent.click(emailButtonAppeared)

    expect(emailButtonAppeared).not.toBeInTheDocument()
    expect(emailInput.value).toEqual("a@aol.com")
});
