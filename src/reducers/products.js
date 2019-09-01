const initialState = [
  {
    id: 1,
    name: 'Iphone XS Max',
    description: 'Sản phẩm do Apple sản xuất',
    image: "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x460.png",
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: 'Galaxy Note 9',
    description: 'Sản phẩm do SamSung sản xuất',
    image: "https://images.samsung.com/vn/smartphones/galaxy-note10/images/galaxy-note10_highlights_mobile_kv.jpg",
    price: 300,
    inventory: 2,
    rating: 5
  },
  {
    id: 3,
    name: 'Xiaomi Mi 9 SE',
    description: 'Sản phẩm do Xiaomi sản xuất',
    image: "https://cdn.tgdd.vn/Products/Images/42/198394/xiaomi-mi-9-se-blue-18thangbh-400x460.png",
    price: 100,
    inventory: 5,
    rating: 3
  },
]

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
