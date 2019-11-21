import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as CartSVG } from '../../images/svg/shopping-cart.svg'

const Header = props => {
  const productsInStock = props.cart
    .map(order => (order.qty ? order.qty : 0))
    .reduce((a, b) => a + b, 0)

  return (
    <header className="header">
      <div>
        <h1 className="header__logo">chabi</h1>
      </div>
      <div>
        <h2 className="header__slogan">Quality is Life</h2>
      </div>
      <div className="header__tools">
        {/* <div className="header__search">search</div> */}
        <div className="header__cart">
          <CartSVG />
          <div className={productsInStock ? 'not-empty' : null}>
            {productsInStock}
          </div>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = state => {
  return { cart: state.cart }
}

export default connect(mapStateToProps)(Header)
