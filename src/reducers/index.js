import { combineReducers } from 'redux'
import allProducts from '../api/all-products.json'
import defaultCart from '../api/cart.json'

const products = (products = null, action) => {
  products = !products ? [] : products

  switch (action.type) {
    case 'UPDATE_PRODUCTS_QTY':
      return products.map(product => {
        return product.id !== action.id
          ? product
          : {
              id: product.id,
              title: product.title,
              price: product.price,
              qty: action.qty
            }
      })
    default:
      return allProducts.map(product => ({ ...product, qty: 1 }))
  }
}

const cart = (cart = null, action) => {
  if (!cart) return defaultCart

  console.log(action)

  switch (action.type) {
    case 'ADD_PRODUCTS_TO_ORDER':
      const existedIndex = cart.findIndex(order => action.id === order.id)
      //設置門檻max為最大值，不可超過
      const equalAndNotExceed = (x, y) => {
        const max = 100
        return x + y < max ? x + y : max
      }

      // 若是cart裡面沒有的商品，加進cart最尾端；反之在原位增加數量
      return existedIndex === -1
        ? [...cart, { id: action.id, qty: action.qty, tag: action.qty }]
        : cart.map((order, index) => {
            return existedIndex === index
              ? {
                  id: order.id,
                  qty: equalAndNotExceed(order.qty, action.qty),
                  tag: order.tag
                }
              : order
          })

    case 'UPDATE_ORDER_QTY':
      return cart.map(order => {
        return order.id !== action.id
          ? order
          : {
              ...order,
              qty: action.qty
            }
      })
    case 'UPDATE_ORDER_TAG':
      return cart.map(order => {
        return order.id !== action.id
          ? order
          : {
              ...order,
              tag: action.tag
            }
      })
    case 'DELETE_ORDER':
      return cart.filter(({ id }) => id !== action.id)
    default:
      return cart
  }
}

const shipping = (shipping = '', action) => {
  switch (action.type) {
    case 'UPDATE_SHIPPING':
      return { shipping: action.shipping }
    default:
      return shipping
  }
}

export default combineReducers({
  products,
  cart,
  shipping
})
