import React from 'react'
import "../Style/Alamat.css"

const Alamat = ({setAlamat, alamat, show, showPengiriman}) => {
    if(show) {
    return (
        <div className="modal-tambah-alamat">
            <div className="content-tambah-alamat">
                <h4 className="content-tambah-alamat-title">1. Alamat tujuan</h4>

                    <form className="form-tambah-alamat">
                        <label>Label Alamat</label>
                        <input type="text" placeholder="Rumah" name="labelAlamat" onChange={setAlamat} value={alamat.labelAlamat}/>
                        <span>Contoh: Alamat Rumah, Alamat Kantor, Apartemen, Dropship</span>

                        <div className="modal-tambah-split">
                        <label className="modal-tambah-penerima">Nama Penerima
                            <input type="text" placeholder="Janes" name="namaPenerima" onChange={setAlamat} value={alamat.namaPenerima}/>
                        </label>

                        <label className="modal-tambah-telfon">Nomor HP
                            <input type="text" placeholder="Rumah" name="nomorHP" onChange={setAlamat} value={alamat.nomorHP}/>
                            <span>Angka [0-9], Contoh: 081234567890</span>
                        </label>
                        </div>

                        <div className="modal-tambah-split">
                        <label className="modal-tambah-kota-kecamatan">Kota atau kecamatan
                            <input type="text" placeholder="Masukan Kota / Kecamatan tujuan pengirim" name="kota" onChange={setAlamat} value={alamat.kota}/>
                        </label>

                        <label className="modal-tambah-kodepos">Kode Pos
                            <input type="text" placeholder="Kode Pos" name="kodepos" onChange={setAlamat} value={alamat.kodepos}/>
                        </label>
                        </div>

                        <label className="modal-tambah-alamatlengkap">Alamat</label>
                        <textarea onChange={setAlamat} value={alamat.jalan} name="jalan" className="modal-tambah-textarea" placeholder="Isi dengan nama jalan, nomor rumah, nama kompleks, nama gedung, lantai atau nomor unit."></textarea>
                        
                        <div className="modal-tambah-submit-options">
                            {/* <div className="alamat-tambah-batal">Batal</div> */}
                            <div className="alamat-tambah-tambah" onClick={() => showPengiriman()}>Tambah</div>
                        </div>      
                    </form>
            </div>
        </div>
    )
    }
    return null
}

export default Alamat