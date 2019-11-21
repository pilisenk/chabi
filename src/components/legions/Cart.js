import React from 'react'
import { connect } from 'react-redux'
import { updateShipping } from '../../actions'
import Order from '../groups/Order'

const computeTotal = arr => {
  // console.log(arr)
  const subtotals = arr.map(({ price, qty }) => price * qty)
  return subtotals.reduce((a, b) => a + b, 0)
}

const Cart = ({ cart, products, shipping, updateShipping }) => {
  // 關聯表合併
  const cartDetail = cart.map(({ id, qty, tag }) => {
    const detail = products.find(elem => id === elem.id)
    return { ...detail, qty, tag }
  })
  // 總金額設定
  const total = computeTotal(cartDetail)

  // 列出所有cart上的商品
  const list = arr =>
    arr.map(({ id, title, price, qty, tag }) => {
      return (
        <Order
          key={id}
          id={id}
          title={title}
          price={price}
          qty={qty}
          tag={tag}
        />
      )
    })

  //
  const onShippingChange = evt => {
    evt.preventDefault()
    const { value } = evt.target
    updateShipping(value)
  }

  return (
    <div className="cart">
      <div className="cart__head">
        <h3 className="cart__title">Your Shopping Cart</h3>
        <div className="cart__total">Total: ${total}</div>
        <button className="cart__button--buy">BUY</button>
      </div>

      <div className="cart__body">{list(cartDetail)}</div>

      <div className="cart__foot">
        <label for="shipping-select">Shipping Option: </label>
        <select
          name="shipping-select"
          onChange={onShippingChange}
          required
        >
          <option value="" selected disabled hidden>
            --Please choose an option--
          </option>
          <option value="7-11">7-11 </option>
          <option value="FAMILY">FamilyMart</option>
          <option value="HILIFE">Hi-Life</option>
          <option value="OK">OK Mart</option>
          <option value="POST">Postal</option>
          <option value="BLACKCAT">Takkyubin</option>
        </select>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { ...state }
}

export default connect(mapStateToProps, { updateShipping })(Cart)
