import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  updateOrderQty,
  updateOrderTag,
  deleteOrder
} from '../../actions'
import QtyControl from '../crews/QtyControl'

const Order = props => {
  let {
    id,
    title,
    price,
    qty,
    tag,
    updateOrderQty,
    updateOrderTag,
    deleteOrder
  } = props

  //=======================init START==========================
  title = title ? title : 'Some Tea'
  price = price > 0 ? price : 0
  // 單品數量最低1，最高100
  qty = qty > 0 && qty <= 100 ? Math.floor(qty) : 1
  // notes = notes ? notes : ''
  const subtotal = qty * price

  const onQtyChange = (id, qty) => {
    updateOrderQty(id, qty)
  }
  const onTagChange = evt => {
    evt.preventDefault()
    updateOrderTag(id, evt.target.value)
  }

  //========================init END===========================

  return (
    <div key={id} className="order">
      <button
        className="order__remove"
        onClick={deleteOrder.bind(this, id)}
      ></button>
      <h3 className="order__name">{title}</h3>
      <span className="order__price">${price}</span>
      <div className="order__qty-control">
        <QtyControl id={id} qty={qty} onQtyChange={onQtyChange} />
      </div>
      <textarea
        className="order__notes"
        value={tag}
        onChange={onTagChange}
      ></textarea>
      <div className="order__count">
        ${price} x {qty}
      </div>
      <div className="order__subtotal">${subtotal}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {
  updateOrderQty,
  updateOrderTag,
  deleteOrder
})(Order)
