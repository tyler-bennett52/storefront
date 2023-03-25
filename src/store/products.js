// productsSlice.js

// Import the necessary Redux Toolkit functions
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

// Add the getProducts action
export const getDBProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await fetch('https://api-js401.herokuapp.com/api/v1/products');
    const data = await response.json();
    return data.results;
  }
);

// Add the incrementProduct action
export const incrementProduct = createAsyncThunk(
  'products/incrementProduct',
  async (product) => {
    const updatedProduct = { ...product, inStock: product.inStock + 1 };
    await updateProductStock(updatedProduct);
    return updatedProduct;
  }
);

// Add the decrementProduct action
export const decrementProduct = createAsyncThunk(
  'products/decrementProduct',
  async (product) => {
    const updatedProduct = { ...product, inStock: product.inStock - 1 };
    await updateProductStock(updatedProduct);
    return updatedProduct;
  }
);

// Rest of the productsSlice code



const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProducts: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.name === action.payload.name
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    decrementStock: (state, action) => {
      const product = state.products.find(
        (product) => product.name === action.payload.name
      );
      if (product) {
        product.inStock--;
      }
    },
    incrementStock: (state, action) => {
      const product = state.products.find(
        (product) => product.name === action.payload.name
      );
      if (product) {
        product.inStock++;
      }
    },
  },
});

export const {
  getProducts,
  updateProducts,
  decrementStock,
  incrementStock,
} = productsSlice.actions;
export default productsSlice.reducer;
