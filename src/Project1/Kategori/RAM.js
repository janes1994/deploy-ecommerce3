import React from 'react'
import "./Style/Kategori.css"
import {Link} from 'react-router-dom'

const RAM = ({kategori, BuyPage, fetchBuy}) => {
    let ram = kategori.filter(kgr => kgr.kategori === "ram")
    return (
        <div className="kategori-page-container">
            <div className="kategori-page-title">CPU (6)</div>
            <div className="kategori-page-content">
            {ram.map((kgr) => {
                return (
                    <div className="kategori-page-main">
                        <div className="kategori-main-image">
                            <img src={`asset_image/kategori_image/ram/${kgr.gambar}`} alt="product"/>
                        </div>
                        <div className="kategori-main-desc">
                            <div className="main-desc-title">{kgr.judul}</div>
                            <div className="main-desc-spec">{kgr.deskripsi}</div>
                            <div onClick={() => fetchBuy(kgr.id)}>
                                <Link to={`/buypage/${kgr.id}`} className="kategori-link-buy" onClick={() => BuyPage(kgr.id)}>Buy</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default RAM