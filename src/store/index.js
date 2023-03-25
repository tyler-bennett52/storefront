import { legacy_createStore as createStore, combineReducers } from 'redux';
import categoryReducer from './active-category';
import cartReducer from './cart';


const reducers = combineReducers({
  activeCategory: categoryReducer,
  cart: cartReducer
})
  
const store = () => createStore(reducers);

export default store();