import * as Types from "../constants/ActionType";

const data = JSON.parse(localStorage.getItem("CART"));

const initialState = data ? data : [];

const findProductInCart = (cart, product) => {
  let index = -1;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id === product.id) {
      index = i;
      break;
    }
  }

  return index;
};

export default (state = initialState, action) => {
  const { product, quantity } = action;

  switch (action.type) {
    case Types.ADD_TO_CART:
      const index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state.push({
          product,
          quantity
        });
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
