import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Categories from './';

const mockStore = configureStore([thunk]);
const initialState = {
  categories: {
    categories: [
      { name: 'electronics', displayName: 'Electronics' },
      { name: 'food', displayName: 'Food' },
      { name: 'clothing', displayName: 'Clothing' },
    ],
  },
};

const store = mockStore(initialState);

describe('Categories component', () => {
  it('renders category buttons', () => {
    render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );

    expect(screen.getByText('electronics')).toBeInTheDocument();
    expect(screen.getByText('food')).toBeInTheDocument();
    expect(screen.getByText('clothing')).toBeInTheDocument();
  });

  it('dispatches changeCategory action when a button is clicked', () => {
    render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );

    fireEvent.click(screen.getByText('electronics'));

    const dispatchedActions = store.getActions();
    expect(dispatchedActions[0]).toEqual({ type: 'categories/changeCategory', payload: 'electronics' });
  });
});
