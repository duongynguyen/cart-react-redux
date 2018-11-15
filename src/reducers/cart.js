import * as types from '../constants/ActionType';

const data = JSON.parse(localStorage.getItem('CART'));
const initialState = [
  {
    product: {
      id: 1,
      name: 'Iphone XS Max',
      image: 'https://techland.com.vn/asset/upload/san_pham/iphone/iphone-xs-xsmax-xr/xs-max/iphone-xs-max-gold.jpg',
      description: 'Sản phẩm do Apple sản xuất',
      price: 500,
      inventory: 10,
      rating: 4
    },
    quantity: 5
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      return [...state];
    default:
      return state
  }
}
