import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Products from './';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();
const mockSelectedCategory = 'Electronics';
const mockProducts = [
  { _id: '1', name: 'Laptop', category: 'Electronics', inStock: 5 },
  { _id: '2', name: 'Headphones', category: 'Electronics', inStock: 0 },
  { _id: '3', name: 'Shirt', category: 'Clothing', inStock: 10 },
];

describe('Products', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories: { selectedCategory: mockSelectedCategory },
      products: { products: mockProducts },
    }));
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  test('renders products for the selected category', () => {
    render(
      <Router>
        <Products />
      </Router>
    );

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('selected-category')).toHaveTextContent(mockSelectedCategory);
    expect(screen.getByText('Laptop (5)')).toBeInTheDocument();
    expect(screen.getByText('Add to cart')).toBeInTheDocument();
    expect(screen.getByText('Headphones')).toBeInTheDocument();
    expect(screen.getByText('Out of Stock')).toBeInTheDocument();
    expect(screen.queryByText('Shirt (10)')).not.toBeInTheDocument();
  });

  test('adds product to cart when "Add to cart" is clicked', () => {
    render(
      <Router>
        <Products />
      </Router>
    );

    fireEvent.click(screen.getByText('Add to cart'));

    expect(mockDispatch).toHaveBeenNthCalledWith(2, { type: 'cart/addToCart', payload: mockProducts[0] });
    expect(mockDispatch).toHaveBeenNthCalledWith(3, { type: 'products/decrementStock', payload: mockProducts[0] });
  });
});
