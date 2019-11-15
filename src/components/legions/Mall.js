import React from 'react'
import Product from '../groups/Product'

const Mall = ({ products, addProducts }) => {
  const productList = arr => {
    return arr.map(elem => <Product key={elem.id} title={elem.title} price={elem.price} />)
  }

  return <div className="mall">{productList(products)}</div>
}

export default Mall
