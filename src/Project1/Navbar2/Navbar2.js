import React, { Component } from 'react'
import "./Style/Navbar2.css"

import NavbarLogo from "./Components/NavbarLogo"
import NavbarKategori from './Components/NavbarKategori'
// import NavbarSearch from './Components/NavbarSearch'
import NavbarCart from './Components/NavbarCart'
import NavbarShowSearch from './Components/NavbarShowSearch'
import NavbarShowCart from './Components/NavbarShowCart'
import NavbarBurger from './Components/NavbarBurger'

export default class Navbar2 extends Component {
  constructor(props) {
      super(props)
      this.state = {
          showSearch: false,
          showCart: false,
      }
  }

  showSearch = () => this.setState({showSearch: !this.state.showSearch})
  showCart = () => this.setState({showCart: !this.state.showCart})

  render() {
    return (
      <div className="Navbar2">
        <NavbarBurger/>
        <NavbarLogo/>
        <NavbarKategori showSearch={this.state.showSearch} setLink={this.props.setLink}/>
        <NavbarShowSearch showSearch={this.state.showSearch} closeSearch={this.showSearch}/>
        {/* <NavbarSearch showSearch={this.showSearch} stateShowSearch={this.state.showSearch}/> */}
        <NavbarCart showSearch={this.state.showSearch} showCart={this.showCart} cart={this.props.cart}/>
        <NavbarShowCart showCart={this.state.showCart} cart={this.props.cart}/>
      </div>
    )
  }
}
