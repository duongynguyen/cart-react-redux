import * as types from "../constants/ActionType";

const data = JSON.parse(localStorage.getItem("CART"));

const initialState = [
  {
    product: {
      id: 1,
      name: "Iphone XS Max",
      description: "Sản phẩm do Apple sản xuất",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png",
      price: 500,
      inventory: 10,
      rating: 4
    },
    quantity: 5
  },
  {
    product: {
      id: 3,
      name: "Xiaomi Mi 9 SE",
      description: "Sản phẩm do Xiaomi sản xuất",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/198394/xiaomi-mi-9-se-blue-18thangbh-400x460.png",
      price: 100,
      inventory: 5,
      rating: 3
    },
    quantity: 3
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log("[cartReducer] : ", action);
      return state;
    default:
      return state;
  }
};
