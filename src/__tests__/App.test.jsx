import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import store from '../store';
import { Provider } from 'react-redux';
import Products from '../Components/Products';
import Categories from '../Components/Categories';
import SimpleCart from '../Components/SimpleCart';

describe('Products, Categories, and SimpleCart components', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <div style={{ position: 'relative' }}>
          <Categories />
          <Products />
          <SimpleCart />
        </div>
      </Provider>
    );
  });

  it('renders categories buttons and interacts with Products and SimpleCart', () => {
    expect(screen.getByText('Electronics')).toBeInTheDocument();

    // Test if clicking a category button changes the selected category
    fireEvent.click(screen.getByText('Electronics'));
    expect(screen.getByTestId('selected-category')).toHaveTextContent('electronics');
    expect(screen.getByText('TV')).toBeInTheDocument();

    // Test if clicking a category button filters the products
    fireEvent.click(screen.getByText('Clothing'));
    expect(screen.queryByText('TV')).not.toBeInTheDocument();

    // Test if clicking the "Add to cart" button adds a product to the cart
    const addToCartButtons = screen.getAllByText('Add to cart');
    fireEvent.click(addToCartButtons[0]);
    expect(store.getState().cart).toEqual({"cart": [{"category": "clothing", "inStock": 25, "name": "Shirt", "price": 9}]});

    // Test if clicking the "Remove from cart" button removes a product from the cart
    const removeFromCartButton = screen.getByLabelText('remove from cart');
    fireEvent.click(removeFromCartButton);
    expect(store.getState().cart).toEqual({"cart": []});

    // Test if clicking the "Reset" button clears the selected category and cart
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByTestId('selected-category')).toHaveTextContent('');
    expect(store.getState().cart).toEqual({"cart": []});
  });
});
