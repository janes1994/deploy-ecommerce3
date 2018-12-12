import React from 'react'
import "../Style/Product.css"
// import {Link} from "react-router-dom"

const Product = ({buyPageData,setCart}) => {
    return (
        buyPageData.map(buy => {
            return (
                <div className="buy-product">
                    <div className="buy-image">
                        <img src={`/asset_image/kategori_image/${buy.kategori}/${buy.gambar}`} alt="buy"></img>
                    </div>
                    <div className="buy-description">
                        <div className="buy-product-kateogri">{buy.merk}</div>
                        <div className="buy-product-title">{buy.judul}</div>
                        <div className="buy-product-harga">{buy.harga}</div>
                        <div className="buy-product-spec">{buy.deskripsi}</div>
                        <span className="buy-button-cart" onClick={() => setCart(buy)}>Add to cart</span>
                        <span className="buy-button-wish">Add to wishlist</span>
                    </div>
                </div>
            )
        })
    )
}

export default Product