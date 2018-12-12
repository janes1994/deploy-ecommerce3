import React, { Component } from 'react'
import "./Style/Kategori.css"
import {Link} from "react-router-dom"

export default class Kategori extends Component {
  constructor(props){
    super(props)
    this.state = {
      product: []
      // product: JSON.parse(localStorage.getItem('product'))
    }
  }

  componentDidMount(){
    this.fetchProduct();
    // localStorage.setItem("product",this.state.product)
  }

  componentDidUpdate(){
    this.fetchProduct()
  }

  fetchProduct = () => {
    fetch(`http://localhost:5000/kategori/${this.props.link}`)
      .then(response => response.json())
      // .then(response => localStorage.setItem('product', JSON.stringify(response)))
      .then(response => this.setState({product: response}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      // <div>
      //   {console.log(localStorage.getItem("product"))}
      // </div>
      <div className="kategori-page-container">
            <div className="kategori-page-title">{this.state.product.kategori}</div>
            <div className="kategori-page-content">
            {this.state.product.map((kgr) => {
                return (
                    <div className="kategori-page-main">
                        <div className="kategori-main-image">
                            <img src={`/asset_image/kategori_image/${kgr.kategori}/${kgr.gambar}`} alt="product"/>
                        </div>
                        <div className="kategori-main-desc">
                            <div className="main-desc-title">{kgr.judul}</div>
                            <div className="main-desc-spec">{kgr.deskripsi}</div>
                            <div className="main-desc-wrap-button">
                                <Link to={`/buypage/${kgr.link}`} className="kategori-link-buy" onClick={() => this.props.setBuy(kgr.link)}>Buy</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
  }
}
