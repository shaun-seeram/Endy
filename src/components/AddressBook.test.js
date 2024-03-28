import { render, screen } from '@testing-library/react';
import AddressBook from './AddressBook';

const ADDRESSES = [{
    name: "Shaun S",
    email: "shaun@hotmail.com",
    address: "123 Something Street",
    id: 0
  }, {
    name: "Shaun S",
    email: "shaun@hotmail.com",
    address: "123 Something Street",
    id: 1
  }]

test('Displays 2 Addresses', () => {
    render(<AddressBook addresses={ADDRESSES} removeContact={() => {}} />);

    const contactFields = screen.queryAllByText("Shaun S")

    expect(contactFields.length).toEqual(2)
});