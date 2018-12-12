import React, { Component } from 'react'
import './Style/Navbar.css'

export default class Navbar extends Component {
  showBurger = () => {
    let tampilKategori = document.querySelector(".kategori");
    tampilKategori.style.display === "none" ? 
    tampilKategori.style.display = "block" : tampilKategori.style.display = "none"
  }

  showSearch = () => {
    let kategori = document.querySelector(".kategori");
    let search = document.querySelector('.search')

    kategori.style.display = "none";
    // console.log(search.children[1].style.display = "block")
  }

  render() {
    return (
      <div className="Navbar">
          <div className="burger" onClick={this.showBurger}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

          <div className="logo">
            <img src="/asset_image/icons8-computer-100.png" alt="logo"></img>
          </div>

          <div className="kategori">
            <ul>
              <li>CPU</li>
              <li>VGA</li>
              <li>RAM</li>
              <li>Storage</li>
              <li>Motherboard</li>
              <li>Laptop</li>
              <li>Laptop</li>
            </ul>
          </div>

          <div className="search" onClick={this.showSearch}>
            <img src="/asset_image/icons8-search-480.png" alt="search_icon"></img>
            <input type="text"/>
          </div>

          <div className="cart">
            <img src="/asset_image/icons8-shopping-bag-100.png" alt="cart_icon"></img>
          </div>
      </div>
    )
  }
}
