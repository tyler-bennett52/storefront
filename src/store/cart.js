
export function addItem(product) {
  return {
    type: 'add-to-cart', 
    payload: product
  }
}

export function removeItem(product) {
  return {
    type: 'remove-from-cart', 
    payload: product
  }
}

const initState = {cart: []};


function cartReducer(state = initState, action) {
  switch(action.type) {
    case 'add-to-cart':
      return {...state, cart: [...state.cart, action.payload]};
    case 'remove-from-cart':
      return {...state, cart: state.cart.filter(product => product.name !== action.payload.name)}
      default:
        return state;
      }
}

export default cartReducer; 

// function removeOne(product) {

// }