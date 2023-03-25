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

export const getProducts = () => async (dispatch) => {
  try {
    const response = await fetch('https://api-js401.herokuapp.com/api/v1/products');
    const data = await response.json();
    dispatch({
      type: 'get-products',
      payload: data.results,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

const updateProductStock = async (product) => {
  try {
    await fetch(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
  } catch (error) {
    console.error('Error updating product stock:', error);
  }
};

export const incrementProduct = (product) => async (dispatch) => {
  const updatedProduct = { ...product, inStock: product.inStock + 1 };
  await updateProductStock(updatedProduct);
  dispatch({
    type: 'increment-stock',
    payload: updatedProduct,
  });
};

export const decrementProduct = (product) => async (dispatch) => {
  const updatedProduct = { ...product, inStock: product.inStock - 1 };
  await updateProductStock(updatedProduct);
  dispatch({
    type: 'decrement-stock',
    payload: updatedProduct,
  });
};
