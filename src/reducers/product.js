const initialState = [
  {
    id: 1,
    name: 'Iphone XS Max',
    image: 'https://techland.com.vn/asset/upload/san_pham/iphone/iphone-xs-xsmax-xr/xs-max/iphone-xs-max-gold.jpg',
    description: 'Sản phẩm do Apple sản xuất',
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: 'Galaxy Note 9',
    image: 'https://i5.walmartimages.com/asr/979de7d5-ee91-44cb-9915-4852dde90948_1.adbd8f04fbaa5e88cf42f4933aae0437.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
    description: 'Sản phẩm do SamSung sản xuất',
    price: 300,
    inventory: 2,
    rating: 3
  },
  {
    id: 3,
    name: 'Xiaomi Max 2',
    image: 'https://www.viettablet.com/image/data/0-hinh-moi/xiaomi-mi-max-2-viettablet.png',
    description: 'Sản phẩm do Xiaomi sản xuất',
    price: 100,
    inventory: 5,
    rating: 5
  },
]

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
