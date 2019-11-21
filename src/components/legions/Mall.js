import React from 'react'
import { connect } from 'react-redux'

import Product from '../groups/Product'

const Mall = props => {
  const { products } = props
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

const mapStateToProps = ({ products }) => {
  return { products }
}

export default connect(mapStateToProps)(Mall)
