import React from 'react'
import '../Style/NavbarKategori.css'
import {Link} from 'react-router-dom'

const NavbarLogo = ({showSearch,setLink}) => {
    if (showSearch) {
        return null
    }
    return (
        <div className="NavbarKategori">
            <ul>
                <li><Link to="/kategori/cpu" onClick={() => setLink("cpu")}>CPU</Link></li>
                <li><Link to="/kategori/vga" onClick={() => setLink("vga")}>VGA</Link></li>
                <li><Link to="/kategori/ram" onClick={() => setLink("ram")}>RAM</Link></li>
                <li><Link to="/kategori/storage" onClick={() => setLink("storage")}>Storage</Link></li>
                <li><Link to="/kategori/motherboard" onClick={() => setLink("motherboard")}>Motherboard</Link></li>
                <li><Link to="/kategori/laptop" onClick={() => setLink("laptop")}>Laptop</Link></li>
            </ul>
        </div>
    )
}

export default NavbarLogo;