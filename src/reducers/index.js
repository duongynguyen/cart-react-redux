import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';

const allReducers = combineReducers({
  products,
  cart
});

export default allReducers;