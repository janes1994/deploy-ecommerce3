import React from 'react'
import '../Style/Pengiriman.css'

export default class Pengiriman extends React.Component {
    render() {
        let alamat = this.props.alamat 
        let cart = this.props.cart 
        if (this.props.show) {
        return (
            <div className="pengiriman-container">
                <h4 className="pengiriman-title-utama">2. Pilih pengiriman</h4> 
                <div className="form-pengiriman">
                    <form className="form-pengiriman-style">
                        <label>Origin shipment</label><br/>
                        <input type="text" name="asal-alamat" value="BOGOR" disabled/><br/>

                        <label>destination shipment</label><br/>
                        <input type="text" name="tujuan-alamat" disabled value={`${alamat.kota}`.toUpperCase()}/><br/>

                        <label>weight</label><br/>
                        <input type="text" name="berat-barang" value="1" disabled/><br/>

                        {/* <button className="pengiriman-cekharga">Cek Harga</button> */}
                    </form>
                </div>
                {/* <div className="form-pemberitahuan">
                    <div className="pemberitahuan-info">
                        <span className="info-label">DARI:</span>
                        <span className="info-nilai">BOGOR BARAT</span>
                    </div>
                    <div className="pemberitahuan-info">
                        <span className="info-label">TUJUAN:</span>
                        <span className="info-nilai">JAKARTA SELATAN</span>
                    </div>
                    <div className="pemberitahuan-info">
                        <span className="info-label">BERAT:</span>
                        <span className="info-nilai">1 (KG)</span>
                    </div>
                </div> */}

                <div className="pemberitahuan-judul-pengiriman">Pilih salah satu layanan pengiriman :</div>

                <div className="tabel-pengiriman">
                    <table className="tabel-pengiriman-style">
                        <thead>
                            <tr>
                                <th>Nama Layanan</th>
                                <th>Tarif</th>
                                <th>Estimasi Pengiriman</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onClick={() => this.props.showPembayaran()}>
                                <td>OKE</td>
                                <td>IDR 6.000</td>
                                <td>3 - 4 hari</td>
                            </tr>
                            <tr>
                                <td>REG</td>
                                <td>IDR 8.000</td>
                                <td>2 - 3 hari</td>
                            </tr><tr>
                                <td>YES</td>
                                <td>IDR 10.000</td>
                                <td>1 - 2 hari</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
        }
        return null
    }
}