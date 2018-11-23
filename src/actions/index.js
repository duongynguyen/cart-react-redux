import * as Types from "../constants/ActionType";

export const acAddToCart = (product, quantity) => {
  return {
    type: Types.ADD_TO_CART,
    product,
    quantity
  }
}

export const acChangeMessage = (message) => {
  return {
    type: Types.CHANGE_MESSAGE,
    message
  }
}