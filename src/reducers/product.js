const initialState = [
  {
    id: 1,
    name: 'Iphone XS Max',
    description: 'Sản phẩm do Apple sản xuất',
    price: 500,
    inventory: 10
  },
  {
    id: 2,
    name: 'Galaxy Note 9',
    description: 'Sản phẩm do SamSung sản xuất',
    price: 300,
    inventory: 2
  },
  {
    id: 3,
    name: 'Xiaomi Max 2',
    description: 'Sản phẩm do Xiaomi sản xuất',
    price: 100,
    inventory: 5
  },
]

export default (state = initialState, action) => {
  switch (action.type) {
    
    case typeName:
      return { ...state }

    default:
      return state
  }
}
