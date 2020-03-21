import React from 'react'
import { useSelector } from 'react-redux'

import Product from '../groups/Product'

const Mall = () => {
  const products = useSelector(state => state.products)
  const productList = products.map(elem => (
    <Product
      key={elem.id}
      id={elem.id}
      title={elem.title}
      price={elem.price}
      qty={elem.qty}
    />
  ))

  return <div className="mall">{productList}</div>
}

export default Mall
