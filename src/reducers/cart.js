import * as Types from "../constants/ActionType";

const data = JSON.parse(localStorage.getItem("CART"));

const initialState = data ? data : [];

const findProductInCart = (cart, productId) => {
  let index = -1;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id === productId) {
      index = i;
      break;
    }
  }

  return index;
};

export default (state = initialState, action) => {
  const { product, quantity, productId } = action;
  let index = -1; // Not found
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product.id);
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state.push({
          product,
          quantity
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case Types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, productId);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
