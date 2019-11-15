import React, { useState } from 'react'
import { connect } from 'react-redux'
import QtyControl from '../crews/QtyControl'

const computeTotal = arr => {
  const subtotals = arr.map(({ subtotal }) => subtotal)
  return subtotals.reduce((a, b) => a + b)
}

const Cart = ({ cart, order, products }) => {
  // 關聯表合併
  const cartDetail = cart.map(({ id, qty }) => {
    const detail = products.find(elem => id === elem.id)
    return { ...detail, qty, subtotal: detail.price * qty }
  })
  // 總金額設定
  const [total, setTotal] = useState(computeTotal(cartDetail))

  const list = arr =>
    arr.map(({ id, title, price, qty }) => {
      title = title ? title : 'Some Tea'
      price = price > 0 ? price : 0
      // 單品數量最低1，最高100
      qty = qty > 0 && qty <= 100 ? Math.floor(qty) : 1
      // notes = notes ? notes : ''
      const subtotal = qty * price
      const onQtyChange = value => {
        console.log(value)
      }

      return (
        <div key={id} className="order">
          <button className="order__remove" onClick={() => console.log()}></button>
          <h3 className="order__name">{title}</h3>
          <span className="order__price">${price}</span>
          <div className="order__qty-control">
            <QtyControl qty={qty} onQtyChange={onQtyChange} />
          </div>
          <textarea className="order__notes"></textarea>
          <div className="order__count">
            ${price} x {qty}
          </div>
          <div className="order__subtotal">${subtotal}</div>
        </div>
      )
    })

  return (
    <div className="cart">
      <div className="cart__head">
        <h3 className="cart__title">Your Shopping Cart</h3>
        <div className="cart__total">Total: ${total}</div>
        <button className="cart__button--buy">BUY</button>
      </div>

      <div className="cart__body">{list(cartDetail)}</div>
    </div>
  )
}

const mapStateToProps = ({ cart, order, products }) => {
  return { cart, order, products }
}

export default connect(mapStateToProps)(Cart)
