import React, { useState } from 'react'

const QtyControl = props => {
  const { qty: initialQty, onQtyChange } = props
  const [qty, setQty] = useState(initialQty)

  const minus = evt => {
    evt.preventDefault()
    if (qty > 1) {
      onQtyChange(qty - 1)
    } else {
      console.log('min:1')
    }
  }
  const plus = evt => {
    evt.preventDefault()
    qty < 100 ? setQty(qty + 1) : console.log('max:100')
  }
  const mouseDownHandler = async () => {
    await console.log('press')
  }

  return (
    <>
      <button className="btn--minus" onClick={minus} onMouseDown={mouseDownHandler}></button>
      <input className="input--qty" type="number" min="1" max="100" value={qty} onChange={onQtyChange.bind(this, qty)} />
      <button className="btn--plus" onClick={plus}></button>
    </>
  )
}

export default QtyControl
