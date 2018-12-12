import React, { Component } from 'react'
import '../Style/NavbarShowCart.css'
import {Link} from "react-router-dom"

const CartBelanja = ({cart}) => {
    if (cart.length !== 0) {
        return (
            <div className="belanja-ada2">
                {
                    cart.map(cr => {
                        return (
                            <div className="belanja-ada-content2">
                                <img className="belanja-ada-img" src={`/asset_image/kategori_image/${cr.kategori}/${cr.gambar}`} alt="cart"></img>
                                <span className="belanja-ada-judul2">{cr.judul}</span>
                            </div>
                        )
                    })
                }
                 <Link to={`/checkout`} className="button-checkout2"><span>Checkout</span></Link>
            </div>
        )
    }
    return <h1 className="belanja-kosong">Keranjang belanja kosong</h1>
}

export default class NavbarShowCart extends Component {
  render() {
    if (this.props.showCart) {
        return (
            <div className="NavbarShowCart">
                <div className="cart-belanja">
                    <CartBelanja dataCart={this.props.dataCart} cart={this.props.cart}/>
                </div>
                <div className="cart-kategori">
                    <ul>
                        {/* <li><img src="/asset_image/icons8-shopping-bag-50.png" alt="bag-icon"></img>Bag</li><hr/>
                        <li><img src="/asset_image/icons8-romance-100.png" alt="fav-icon"></img>Favorites</li><hr/>
                        <li><img src="/asset_image/icons8-package-100.png" alt="order-icon"></img>Orders</li><hr/>
                        <li><img src="/asset_image/icons8-settings-100.png" alt="account-icon"></img>Account</li><hr/> */}
                        <li><Link to="/login"><img src="/asset_image/icons8-customer-50.png" alt="signin-icon"></img>Sign in</Link></li><hr/>
                    </ul>
                </div>
            </div>
        )
    }
    return null
  }
}
