import React from 'react'
import "../Style/RingkasanBelanja.css"

const RingkasanBelanja = ({cart, deleteCart, harga}) => {
    return (
        <div className="ringkasan-belanja">
            <div className="ringkasan-title">Ringkasan Belanja</div>
                {
                    cart.map(cart => {
                        return (
                            <div className="ringkasan-content">
                                <div className="ringkasan-image">
                                    <img src={`/asset_image/kategori_image/${cart.kategori}/${cart.gambar}`} alt="cart"></img>
                                </div>
                                <div className="ringkasan-desc">
                                    <div className="ringkasan-desc-title">{cart.judul}</div>
                                    <div className="ringkasan-desc-harga">IDR {cart.harga}</div>
                                    <div className="ringkasan-desc-hapus" onClick={() => deleteCart(cart.id)}>Hapus</div>
                                </div>
                            </div>
                        )
                    })
                }
            <div className="ringkasan-total">
                <div className="total-pembayaran">Total: IDR {harga}</div>
            </div>
        </div>
    )
}

export default RingkasanBelanja
