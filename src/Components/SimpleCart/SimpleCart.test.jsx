import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SimpleCart from './';

const mockStore = configureStore([thunk]);

describe('SimpleCart component', () => {
  it('renders cart items', () => {
    const initialState = {
      cart: {
        cart: [
          { name: 'TV', category: 'electronics', price: 100, inStock: 5 },
          { name: 'Shirt', category: 'clothing', price: 9, inStock: 24 },
        ],
      },
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <SimpleCart />
      </Provider>
    );

    expect(screen.getByText('TV - $100')).toBeInTheDocument();
    expect(screen.getByText('Shirt - $9')).toBeInTheDocument();
  });

  it('renders an empty cart when there are no items', () => {
    const initialState = {
      cart: {
        cart: [],
      },
    };

    const store = mockStore(initialState);

    const { container } = render(
      <Provider store={store}>
        <SimpleCart />
      </Provider>
    );

    expect(container.firstChild.firstChild).toBeNull();
  });
});
