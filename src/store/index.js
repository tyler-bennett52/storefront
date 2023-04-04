import { legacy_createStore as createStore, combineReducers } from 'redux';
import mainReducer from './reducer';


const reducers = combineReducers({
  products: mainReducer
})

const store = () => createStore(reducers);

export default store();