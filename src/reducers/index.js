import { combineReducers } from 'redux';
import product from './product';
import cart from './cart';

const allReducers = combineReducers({
  product,
  cart
});

export default allReducers;