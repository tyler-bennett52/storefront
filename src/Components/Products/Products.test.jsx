import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Products from './';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();

describe('Products component', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => callback({
      activeCategory: {
        products: [
          { id: 1, name: 'Product 1' },
          { id: 2, name: 'Product 2' },
        ],
        selectedCategory: 'Electronics',
      },
    }));
    useDispatch.mockReturnValue(mockDispatch);
  });

  test('renders the selected category', () => {
    render(<Products />);
    expect(screen.getByTestId('selected-category')).toHaveTextContent('Electronics');
  });

  test('renders the products', () => {
    render(<Products />);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  test('dispatches addItem when add to cart is clicked', () => {
    render(<Products />);
    fireEvent.click(screen.getAllByText('Add to cart')[0]);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'add-to-cart',
      payload: { id: 1, name: 'Product 1' },
    });
  });
});
