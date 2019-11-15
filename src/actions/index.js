export const addProducts = (id, qty) => {
  return {
    type: 'ADD_PRODUCTS',
    id,
    qty
  }
}

export const updateProducts = (id, qty) => {
  return {
    type: 'UPDATE_PRODUCTS',
    id,
    qty
  }
}

export const deleteProducts = id => {
  return {
    type: 'DELETE_PRODUCTS',
    id
  }
}

export const setDistribution = distribution => {
  return {
    type: 'SET_DISTRIBUTION',
    distribution
  }
}
