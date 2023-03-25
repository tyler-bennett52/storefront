import { configureStore } from '@reduxjs/toolkit';
import oldCategoryReducer from './active-category';
import cartReducer from './cart';
import categoryReducer from './categories';
import productsReducer from './products';

const store = configureStore({
  reducer: {
    activeCategory: oldCategoryReducer,
    cart: cartReducer,
    categories: categoryReducer,
    products: productsReducer,
  },
});

export default store;
