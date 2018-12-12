import React from 'react'
import '../Style/NavbarCart.css'

const NavbarCart = ({showSearch, showCart, cart}) => {
    if (showSearch) return null
    return (
        <div className="NavbarCart">
            {
                cart.length !== 0 ? 
                <img src="/asset_image/cart-ada.png" alt="cart_icon" onClick={showCart}></img> :
                <img src="/asset_image/icons8-shopping-bag-100.png" alt="cart_icon" onClick={showCart}></img> 
            }
        </div>
    )
}

export default NavbarCart;