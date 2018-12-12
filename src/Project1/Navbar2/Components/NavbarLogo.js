import React from 'react'
import '../Style/NavbarLogo.css'
import {Link} from 'react-router-dom'

const NavbarLogo = ({cart}) => {
    return (
        <div className="NavbarLogo">
            <Link to="/"><img src="/asset_image/icons8-computer-50.png" alt="logo"></img></Link>        
        </div>
    )
}

export default NavbarLogo;