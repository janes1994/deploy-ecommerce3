import React from 'react'
import '../Style/NavbarBurger.css'

const NavbarBurger = () => {
    return (
        <div className="burger" onClick={this.showBurger}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

export default NavbarBurger