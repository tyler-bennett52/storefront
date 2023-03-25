import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import store from '../store';
import { Provider } from 'react-redux';
import Products from '../Components/Products';
import Categories from '../Components/Categories';

describe('Products and Categories components', () => {
    render(
      <Provider store={store}>
        <Categories />
        <Products />
      </Provider>
    );

  it('renders categories buttons and interacts with Products', () => {
    expect(screen.getByText('Electronics')).toBeInTheDocument();

    // Test if clicking a category button changes the selected category
    fireEvent.click(screen.getByText('Electronics'));
    expect(screen.getByTestId('selected-category')).toHaveTextContent('electronics');
    expect(screen.getByText('TV')).toBeInTheDocument();

    // Test if clicking a category button filters the products
    fireEvent.click(screen.getByText('Clothing'));
    expect(screen.queryByText('TV')).not.toBeInTheDocument();

    // Test if clicking the "Reset" button clears the selected category
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByTestId('selected-category')).toHaveTextContent('');
  });
});
