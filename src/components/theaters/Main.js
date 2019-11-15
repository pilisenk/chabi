import React from 'react'
import { connect } from 'react-redux'
import * as allActions from '../../actions'
import Mall from '../legions/Mall'
import Cart from '../legions/Cart'

const Main = props => {
  console.log(props)
  const { products, cart, order, addProducts, updateProducts, deleteProducts, setDistribution } = props

  return (
    <main className="main">
      <Mall products={products} addProducts={addProducts} />
      <Cart />
    </main>
  )
}

const mapStateToProps = state => {
  return { ...state }
}

export default connect(mapStateToProps, allActions)(Main)
