import { combineReducers } from 'redux';
import ProductReducer from './products';

const rootReducer = combineReducers({
  Products: ProductReducer,
});

export default rootReducer;
