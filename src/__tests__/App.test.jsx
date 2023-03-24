import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../store/';
import App from '../App';

describe('integration test: change category', () => {
  // const store = createStore(mainReducer);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const electronicsButton = screen.getByText('Electronics');
  const foodButton = screen.getByText('Food');
  const clothingButton = screen.getByText('Clothing');

  it('Renders necessary components', () => {
    expect(electronicsButton).toBeInTheDocument();
    expect(foodButton).toBeInTheDocument();
    expect(clothingButton).toBeInTheDocument();
  });

  // it('Can select category', () => {
  //   fireEvent.click(foodButton)
  //   const applescard = screen.getByText('Apples');
  //   expect(applescard).toBeInTheDocument();
    // const selectedCategory = screen.getByTestId('selected-category');
    // expect(selectedCategory).toBeInTheDocument();
  // });


  // Test if dispatching an action updates the UI
  // fireEvent.click(screen.getByText('Add item'));
  // expect(screen.getByText('Item 1')).toBeInTheDocument();

  // // Test if dispatching another action updates the UI
  // fireEvent.click(screen.getByText('Remove item'));
  // expect(screen.getByText('No items added')).toBeInTheDocument();
});
