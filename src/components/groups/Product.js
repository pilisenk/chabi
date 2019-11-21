import React from 'react'
import { connect } from 'react-redux'
import { updateProductsQty, addProductsToOrder } from '../../actions'
import QtyControl from '../crews/QtyControl'
import { ReactComponent as CartSVG } from '../../images/svg/shopping-cart.svg'

const Product = props => {
  const {
    id,
    title,
    price,
    qty,
    updateProductsQty,
    addProductsToOrder
  } = props

  const onQtyChange = (id, qty) => {
    updateProductsQty(id, qty)
  }

  return (
    <div className="product">
      <h3 className="product__title">{title}</h3>
      <h4 className="product__price">${price}</h4>
      <div className="product__qty-control">
        <QtyControl id={id} qty={qty} onQtyChange={onQtyChange} />
      </div>
      <button
        className="product__cart"
        onClick={addProductsToOrder.bind(this, id, qty)}
      >
        <CartSVG />
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {
  updateProductsQty,
  addProductsToOrder
})(Product)
