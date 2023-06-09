let updatedProducts;

const initState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  selectedCategory: '',
};

const mainReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'change-category':
      return {
        ...state,
        selectedCategory: payload,
        products: initState.products.filter(product => product.category === payload),
      }
    case 'clear':
      return initState;
    case 'decrement-stock':
      updatedProducts = state.products.map(product => {
        if (product.name === action.payload.name) {
          product.inStock--;
          return product;
        }
        return product;
      })
      return {...state, products: updatedProducts }
    case 'increment-stock':
      updatedProducts = state.products.map(product => {
        if (product.name === action.payload.name) {
          product.inStock++;
          return product;
        }
        return product;
      })
      return {...state, products: updatedProducts }
    default:
      return state
  }
};

export default mainReducer;
