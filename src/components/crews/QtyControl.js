import React from 'react'

const QtyControl = props => {
  const { id, qty, min = 1, max = 100, onQtyChange } = props

  const minus = evt => {
    evt.preventDefault()
    qty > min ? onQtyChange(id, qty - 1) : console.log(`min:${min}`)
  }
  const plus = evt => {
    evt.preventDefault()
    qty < max ? onQtyChange(id, qty + 1) : console.log(`max:${max}`)
  }
  const directInputHandler = evt => {
    const { value } = evt.target
    // 預防value是String和非整數的情況
    const qty = Number.parseInt(value)
    // console.log(qty)
    qty >= min && qty <= max
      ? onQtyChange(id, qty)
      : qty < min || isNaN(qty)
      ? onQtyChange(id, min)
      : onQtyChange(id, max)
  }

  return (
    <>
      <button className="btn--minus" onClick={minus}></button>
      <input
        className="input--qty"
        type="number"
        min={min}
        max={max}
        value={qty}
        onChange={directInputHandler}
      />
      <button className="btn--plus" onClick={plus}></button>
    </>
  )
}

export default QtyControl
