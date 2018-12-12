import React from 'react'
import "./style/Login.css"
import {Link} from "react-router-dom"

const Login = () => {
    return (
        <div className="login-page">
                <div className="login-head">
                    <h1>Masuk</h1><br/>
                    <p>Belum punya akun ?<Link exact to="/register"> Daftar</Link></p>
                </div>

                <form className="login-form">
                    <label>Email</label><br/>
                    <input type="text" name="email" /><br/>

                    <label>Kata Sandi</label><br/>
                    <input type="password" name="kataSandi"/><br/>
                    
                    <div className="remember">
                        <input type="checkbox"/>
                        <span>Ingat saya</span><br/>
                    </div>

                    <input type="submit" value="Masuk"/>
                </form>  
        </div>
    )
}

export default Login