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

export const changeCategory = (category) => {
  return {
    type: 'change-category',
    payload: category,
  }
};

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

