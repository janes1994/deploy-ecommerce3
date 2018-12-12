import React from 'react'
import "../Style/MetodePembayaran.css"

const MetodePembayaran = ({show}) => {
    if (show) {
    return (
        <div className="modal-pilihan-bank">
            <h4 className="pilihan-bank-title">3. Lakukan pembayaran</h4>
            <div className="modal-pilihan-bank-content">
                <div className="modal-pilihan-bank-content-title">Pembayaran</div>
                <div className="modal-pilihan-bank-content-harga">IDR 25.000.000</div>

                {/* <div className="modal-pilihan-bank-content-detail">
                    <div className="modal-pilihan-nama">Transfer Bank BCA</div>
                    <img className="logo-bank" src="/asset_image/bca.jpg" alt="logobank"/>
                </div> */}

                <div className="modal-pilihan-rekening">
                    <label>No. Rekening Anda <br/>
                        <input type="text" />
                        <p className="pilihan-underline">Masukan nomor rekening sesuai kebutuhan anda</p>
                    </label><br/>

                    <label>Nama Pemilik Rekening <br/>
                        <input type="text" /> 
                        <p className="pilihan-underline">Masukan nama pemilik rekening sesuai buku tabungan</p>
                    </label>

                    {/* <p className="pilihan-underline note">Jika melalui Teller, Isi Nama Pemilik Rekening dengan nama Penyetor dan Nomor Rekening dengan 0000</p>
                    <p className="pilihan-underline note">Demi keamanan transaksi Anda, pastikan untuk tidak menginformasikan bukti dan data pembayaran kepada pihak manapun kecuali Tokopedia.</p> */}
                </div>

                <div className="rata-button-pilihan">
                    {/* <input type="button" value="Batal"/> */}
                    {/* <input type="button" value="Bayar"/> */}
                    <button className="pembayaran-metode-batal">Batal</button>
                    <button className="pembayaran-metode-bayar">Bayar</button>
                </div>
            </div>
        </div>
    )
    }
    return null
}

export default MetodePembayaran