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
  },
  {
    product: {
      id: 2,
      name: 'Galaxy Note 9',
      image: 'https://i5.walmartimages.com/asr/979de7d5-ee91-44cb-9915-4852dde90948_1.adbd8f04fbaa5e88cf42f4933aae0437.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
      description: 'Sản phẩm do SamSung sản xuất',
      price: 350,
      inventory: 2,
      rating: 3
    },
    quantity: 3
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
