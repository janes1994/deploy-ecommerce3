import React, { Component } from 'react'
import "./Style/Product.css"
// import "./Style/BuyPage.css"
// import Product from "./Components/Product"
import {Link} from 'react-router-dom'

export default class BuyPage extends Component {
  constructor(){
    super()
    this.state = {
      buypage: [],
    }
  }

  componentDidMount(){
    this.fetchProduct()
  }

  fetchProduct = () => {
    fetch(`http://localhost:5000/buypage/${this.props.buy}`)
      .then(response => response.json())
      .then(response => this.setState({buypage: response}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      this.state.buypage.map(buy => {
        return (
            <div className="buy-product">
                <div className="buy-image">
                    <img src={`/asset_image/kategori_image/${buy.kategori}/${buy.gambar}`} alt="buy"></img>
                </div>
                <div className="buy-description">
                    <div className="buy-product-kateogri">{buy.merk}</div>
                    <div className="buy-product-title">{buy.judul}</div>
                    <div className="buy-product-harga">IDR {buy.harga}</div>
                    <div className="buy-product-spec">{buy.deskripsi}</div>
                    <Link to={`/checkout`}>
                      <span className="buy-button-cart" onClick={() => this.props.setCart(buy)}>Add to bag</span>
                    </Link>
                    <span className="buy-button-wish">Add to wishlist</span>
                </div>
            </div>
        )
      })
    )
  }
}
