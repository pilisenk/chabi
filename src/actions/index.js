export const updateProductsQty = (id, qty) => {
  return {
    type: 'UPDATE_PRODUCTS_QTY',
    id,
    qty
  }
}

export const addProductsToOrder = (id, qty) => {
  return {
    type: 'ADD_PRODUCTS_TO_ORDER',
    id,
    qty
  }
}

export const updateOrderQty = (id, qty) => {
  return {
    type: 'UPDATE_ORDER_QTY',
    id,
    qty
  }
}

export const updateOrderTag = (id, tag) => {
  return {
    type: 'UPDATE_ORDER_TAG',
    id,
    tag
  }
}

export const deleteOrder = id => {
  return {
    type: 'DELETE_ORDER',
    id
  }
}

export const updateShipping = shipping => {
  return {
    type: 'UPDATE_SHIPPING',
    shipping
  }
}
