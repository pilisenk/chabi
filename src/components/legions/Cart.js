import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateShipping } from '../../actions'
import Order from '../groups/Order'

const computeTotal = arr => {
  const subtotals = arr.map(({ price, qty }) => price * qty)
  return subtotals.reduce((a, b) => a + b, 0)
}

const Cart = () => {
  const dispatch = useDispatch()
  const [cart, products, shipping] = useSelector(state => [
    state.cart,
    state.products,
    state.shipping
  ])

  // 關聯表合併
  const cartDetail = useMemo(
    () =>
      cart.map(({ id, qty, tag }) => {
        const detail = products.find(elem => id === elem.id)
        return { ...detail, qty, tag }
      }),
    [cart, products]
  )
  // 總金額設定
  const total = useMemo(() => computeTotal(cartDetail), [cartDetail])

  // 列出所有cart上的商品
  const orderList = useMemo(
    () => cartDetail.map(item => <Order key={item.id} {...item} />),
    [cartDetail]
  )

  //
  const onShippingChange = evt => {
    evt.preventDefault()
    const { value } = evt.target
    dispatch(updateShipping(value))
  }

  return (
    <div className="cart">
      <div className="cart__head">
        <h3 className="cart__title">Your Shopping Cart</h3>
        <div className="cart__total">Total: ${total}</div>
        <button className="cart__button--buy">BUY</button>
      </div>

      <div className="cart__body">{orderList}</div>

      <div className="cart__foot">
        <label htmlFor="shipping-select">Shipping Option: </label>
        <select
          name="shipping-select"
          value={shipping}
          onChange={onShippingChange}
          required
        >
          <option value="" disabled hidden>
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

export default Cart
