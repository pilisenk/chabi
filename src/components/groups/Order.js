import React from 'react'
import { useDispatch } from 'react-redux'
import { updateOrderQty, updateOrderTag, deleteOrder } from '../../actions'
import QtyControl from '../crews/QtyControl'

const Order = ({ id, title = 'Some Tea', price = 0, qty = 1, tag = '' }) => {
  const dispatch = useDispatch()

  //=======================init START==========================
  const subtotal = qty * price

  //=======================event handler==========================
  const onClickDelete = evt => {
    evt.preventDefault()
    dispatch(deleteOrder(id))
  }

  const onQtyChange = (id, qty) => {
    dispatch(updateOrderQty(id, qty))
  }
  const onTagChange = evt => {
    evt.preventDefault()
    dispatch(updateOrderTag(id, evt.target.value))
  }

  //========================init END===========================

  return (
    <div key={id} className="order">
      <button className="order__remove" onClick={onClickDelete}></button>
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

export default Order
