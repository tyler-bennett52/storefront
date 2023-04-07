import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector } from 'react-redux';
import Checkout from './';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(), // Update this line
}));

const mockCart = [
  { _id: '1', name: 'Laptop', category: 'Electronics', inStock: 5, price: 1000 },
  { _id: '2', name: 'Phone', category: 'Electronics', inStock: 10, price: 500 },
];

describe('Checkout', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({ cart: { cart: mockCart } }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test('renders Checkout component', () => {
    render(<Checkout />);
    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });

  test('displays the total price', () => {
    render(<Checkout />);
    expect(screen.getByText('Total Price: $1500.00')).toBeInTheDocument();
  });

  test('renders form fields', () => {
    render(<Checkout />);
    expect(screen.getByText('Full Name')).toBeInTheDocument();
    expect(screen.getByText('Address line 1')).toBeInTheDocument();
    // expect(screen.getByText('Address line 2')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('State/Province/Region')).toBeInTheDocument();
    expect(screen.getByText('Zip / Postal code')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
  });

  test('renders Submit button', () => {
    render(<Checkout />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
