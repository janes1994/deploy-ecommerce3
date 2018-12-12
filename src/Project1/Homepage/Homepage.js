import React, { Component } from 'react'
import "./Styles/Homepage.css"
import {Link} from 'react-router-dom'

export default class Homepage extends Component {
  render() {
    return (
      <div className="Homepage-parent">

          <div className="homepage-content">
            <div className="homepage-desc homepage-desc-1">
                <Link to="/kategori/motherboard" onClick={() => this.props.setLink("motherboard")}><h1>ASUS ROG ZENITH EXTREME</h1></Link>
                <h3>For serious gamers</h3>
            </div>
            <div className="homepage-image">
                <img src="/asset_image/kv.jpg" alt="content-1"/>                
            </div>
          </div>

          <div className="homepage-content homepage-content-2">
            <div className="homepage-desc">
                <Link to="/kategori/vga" onClick={() => this.props.setLink("vga")}><h1>GEFORCE RTX 2080</h1></Link>
                <h3>Graphics Reinvented</h3>
            </div>
            <div className="homepage-image">
                <img src="/asset_image/geforce-rtx-2080-gallery-c.jpg" alt="content-2"/>                
            </div>
          </div>

          <div className="homepage-content homepage-halfpage homepage-content-6">
            <div className="homepage-desc">
                <Link to="/kategori/storage" onClick={() => this.props.setLink("storage")}><h1>SAMSUNG 960 PRO NVMe M.2 SSD</h1></Link>
                <h3>Faster, Reliable, Persistance</h3>
            </div>
            <div className="homepage-image">
                <img src="/asset_image/samsung960.png" alt="content-6"/>                
            </div>
          </div>

          <div className="homepage-content homepage-halfpage homepage-content-4">
            <div className="homepage-desc">
                <Link to="/kategori/ram" onClick={() => this.props.setLink("ram")}><h1>Vengeance Series 32GB</h1></Link>
                <h3>Faster and larger for everything</h3>
            </div>
            <div className="homepage-image">
                <img src="/asset_image/kategori_image/ram/Vengeance Series 32GB (4 x 8GB) DDR4 SODIMM 4000MHz CL19 Memory Kit.png" alt="content-4"/>                
            </div>
          </div>

          <div className="homepage-content homepage-halfpage homepage-content-5">
            <div className="homepage-desc">
                <Link to="/kategori/laptop" onClick={() => this.props.setLink("laptop")}><h1>MSI GP73-Leopard-8RD</h1></Link>
                <h3>Some are PC, we are gaming</h3>
            </div>
            <div className="homepage-image">
                <img src="/asset_image/kategori_image/laptop/GP73-Leopard-8RD.png" alt="content-5"/>                
            </div>
          </div>

          <div className="homepage-content homepage-halfpage homepage-content-3">
            <div className="homepage-desc">
                <Link to="/kategori/cpu" onClick={() => this.props.setLink("cpu")}><h1>AMD Ryzen Threadripper</h1></Link>
                <h3>Do everything. All at the same time</h3>
            </div>
            <div className="homepage-image">
                <img src="/asset_image/kategori_image/cpu/amd_threadripper.png" alt="content-2"/>                
            </div>
          </div>

      </div>
    )
  }
}
