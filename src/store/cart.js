const initState = { cart: [] };

function cartReducer(state = initState, action) {
  switch (action.type) {
    case 'add-to-cart':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'remove-from-cart':
      let newCart = removeOne(state.cart, action.payload)
      return { ...state, cart: newCart }
    default:
      return state;
  }
}

export default cartReducer;

function removeOne(array, product) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === product.name) {
      array.splice(i, 1);
      return array;
    }
  } return array;
} 