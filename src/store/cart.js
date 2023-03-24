
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


function cartReducer(state = [], action) {
  switch(action.type) {
    case 'add-to-cart':
      return [...state, action.payload];
    case 'remove-from-cart':
      return state.filter(purchase => purchase.name !== action.payload.name)
      default:
        return state;
      }
}

export default cartReducer;