const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  let updatedProducts;

  switch (action.type) {
    case 'get-products':
      return { ...state, products: action.payload };
    case 'update-products':
      updatedProducts = state.products.map((product) =>
        product.name !== action.payload.name ? product : action.payload
      );
      return { ...state, products: updatedProducts };
    case 'decrement-stock':
      updatedProducts = state.products.map((product) => {
        if (product.name === action.payload.name) {
          product.inStock--;
          return product;
        }
        return product;
      });
      return { ...state, products: updatedProducts };
    case 'increment-stock':
      updatedProducts = state.products.map((product) => {
        if (product.name === action.payload.name) {
          product.inStock++;
          return product;
        }
        return product;
      });
      return { ...state, products: updatedProducts };
    default:
      return state;
  }
};

export default productsReducer;
