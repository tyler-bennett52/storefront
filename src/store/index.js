import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import oldCategoryReducer from './active-category';
import cartReducer from './cart';
import categoryReducer from './categories';
import productsReducer from './products';
import thunk from 'redux-thunk';



const reducers = combineReducers({
  activeCategory: oldCategoryReducer,
  cart: cartReducer,
  categories: categoryReducer,
  products: productsReducer

})
  
const store = () => createStore(reducers, applyMiddleware(thunk));

export default store();