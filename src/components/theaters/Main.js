import React, { useState, useEffect } from 'react'
import Mall from '../legions/Mall'
import Cart from '../legions/Cart'

const Main = props => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCounter(c => c + 1), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="main">
      <div className="gg">{counter}</div>
      <Mall />
      <Cart />
    </main>
  )
}

export default Main
