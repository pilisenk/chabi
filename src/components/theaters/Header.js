import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as CartSVG } from '../../images/svg/shopping-cart.svg'

const Header = () => {
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
        </div>
      </div>
    </header>
  )
}

export default connect()(Header)
