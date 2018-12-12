import React from 'react'
import "../Style/Navigasi.css"

const Navigasi = ({showAlamat, showPengiriman, showPembayaran, ...state}) => {
    return (
        <div className="checkout-navigasi">
            <div className="navigasi-alamat-tujuan" onClick={()=>showAlamat()}>
                <span className="navigasi-bulet">1</span>
                <span className="navigasi-title">Alamat tujuan</span>
            </div>
            <div className="navigasi-metode-pengiriman" onClick={() => showPengiriman()}>
                <span className="navigasi-bulet">2</span>
                <span className="navigasi-title">Pilih pengiriman</span>
            </div>
            <div className="navigasi-lakukan-pembayaran" onClick={() => showPembayaran()}>
                <span className="navigasi-bulet">3</span>
                <span className="navigasi-title">Lakukan pembayaran</span>
            </div>
        </div>
    )
}

export default Navigasi