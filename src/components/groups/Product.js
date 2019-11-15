import React from 'react'
import QtyControl from '../crews/QtyControl'
import { ReactComponent as CartSVG } from '../../images/svg/shopping-cart.svg'

const Product = props => {
  const { title, price } = props
  return (
    <div className="product">
      <h3 className="product__title">{title}</h3>
      <h4 className="product__price">${price}</h4>
      <div className="product__qty-control">{/* <QtyControl /> */}</div>
      <button className="product__cart">
        <CartSVG />
      </button>
    </div>
  )
}

export default Product
