import * as Types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

export default (state = initialState, action) => {
  let { product, quantity } = action;
  let index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
     localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    default:
      return state
  }
}

const findProductInCart = (arr, product) => {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].product.id === product.id) {
      index = i;
      break;
    }
  }
  return index;
}
