import axios from 'axios';

// CART ACTIONS
export function removeItem(product) {
  return {
    type: 'remove-from-cart',
    payload: product
  }
}

export function addItem(product) {
  return {
    type: 'add-to-cart',
    payload: product
  }
}

// CATEGORY ACTIONS
export const changeCategory = (category) => {
  return {
    type: 'change-category',
    payload: category,
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch({
      type: 'get-categories',
      payload: response.data.results,
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

export const clear = () => {
  return {
    type: 'clear',
    payload: {},
  }
}

export const setInitialState = (state) => {
  return {
    type: 'set-initial-state',
    payload: state,
  };
};


// PRODUCT ACTIONS

export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
    dispatch({
      type: 'get-products',
      payload: response.data.results,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};


export const incrementProduct = (product) => {
  return {
    type: 'increment-stock',
    payload: product,
  };
};

export const decrementProduct = (product) => {
  return {
    type: 'decrement-stock',
    payload: product,
  };
};

