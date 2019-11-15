import { combineReducers } from 'redux'
import allProducts from '../api/all-products.json'
import defaultCart from '../api/cart.json'

const products = () => {
  return [...allProducts]
}

const cart = (cart = null, action) => {
  if (!cart) return defaultCart

  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...cart, { id: action.id, qty: action.qty }]
    case 'UPDATE_PRODUCT':
      return cart.map(order => {
        return order.id !== action.id
          ? order
          : {
              id: action.id,
              qty: action.qty
            }
      })
    case 'DELETE_PRODUCT':
      return cart.filter(({ id }) => id !== action.id)
    default:
      return cart
  }
}

const order = (order = null, action) => {
  if (!order) return { distribution: 1 }

  switch (action.type) {
    case 'SET_DISTRIBUTION':
      return { distribution: action.distribution }
    default:
      return order
  }
}

export default combineReducers({
  products,
  cart,
  order
})
