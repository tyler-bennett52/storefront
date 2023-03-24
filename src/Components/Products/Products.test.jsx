import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../store/reducer'; // Update this import path to match your project structure
import Products from './index'; // Update this import path to match your project structure

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
};

describe('Products component', () => {
  test('renders selected category', () => {
    const initialState = {
      products: {
        products: [],
        selectedCategory: 'Electronics'
      }
    };
    renderWithRedux(<Products />, { initialState });
    expect(screen.getByTestId('selected-category')).toHaveTextContent('Electronics');
  });

  test('renders products list', () => {
    const initialState = {
      products: {
        products: [
          { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
          { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 }
        ],
        selectedCategory: 'Electronics'
      }
    };
    renderWithRedux(<Products />, { initialState });
    expect(screen.getByText('TV')).toBeInTheDocument();
    expect(screen.getByText('Radio')).toBeInTheDocument();
  });

  test('does not render products when no category is selected', () => {
    const initialState = {
      products: {
        products: [
          { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
          { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 }
        ],
        selectedCategory: ''
      }
    };
    renderWithRedux(<Products />, { initialState });
    expect(screen.queryByText('TV')).not.toBeInTheDocument();
    expect(screen.queryByText('Radio')).not.toBeInTheDocument();
  });
});
