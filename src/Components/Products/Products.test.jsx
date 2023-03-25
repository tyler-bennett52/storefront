import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Products from './';

const mockStore = configureStore([thunk]);

const mockState = {
  categories: {
    selectedCategory: 'electronics',
  },
  products: {
    products: [
      { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
      { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
      { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    ],
  },
};

describe('Products component', () => {
  let store;

  beforeEach(() => {
    store = mockStore(mockState);
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
  });

  it('displays products based on the selected category', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    expect(screen.getByText('TV (5)')).toBeInTheDocument();
    expect(screen.getByText('Radio (15)')).toBeInTheDocument();
    expect(screen.queryByText('Shirt (25)')).not.toBeInTheDocument();
  });

  it('updates in-stock count when the "Add to cart" button is clicked', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
  
    const addToCartButtons = screen.getAllByText('Add to cart');
    fireEvent.click(addToCartButtons[0]);
  
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[0]).toEqual({ type: 'add-to-cart', payload: { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 } });
    // expect(dispatchedActions[1]).toEqual({ type: 'remove-from-cart', payload: { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 } });
  });
  
});
