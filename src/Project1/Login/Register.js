import React from 'react'
import "./style/Register.css"
import {Link} from "react-router-dom"

const Register = () => {
    return (
        <div className="register-page-email">
            <div className="register-head">
                <h1>Daftar Sekarang</h1><br/>
                <span>Sudah punya akun ? <Link to="/login">Masuk</Link></span>
            </div>

            <form className="register-form">
                
                <label htmlFor="email">Email</label><br/>
                <input name="email" type="email"/><br/>
                <p className="error-message">Email sudah terdaftar</p>

                <label htmlFor="username">Name Lengkap</label><br/>
                <input name="username" type="text"/><br/>
                <p className="error-message">Nama sudah ada</p>


                <label>Nomor Ponsel</label><br/>
                <input name="nomorPonsel" type="number"/><br/>
                <p className="error-message">Nomor ponsel sudah terdaftar</p>
                <p>Contoh: 08XXXXXXXXXX</p>


                <label>Kata Sandi</label><br/>
                <input name="kataSandi" type="text"/><br/>
                <p className="error-message">Kata sandi tidak sesuai</p>
                <p>Contoh: Minimum 6 karakter</p>

                <input type="submit" value="Daftar" disabled="true"/>
            </form>
        </div>
    )
}

export default Register