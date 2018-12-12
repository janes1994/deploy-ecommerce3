import React, { Component } from 'react'
import Navigasi from './Components/Navigasi'
import Alamat from './Components/Alamat'
import MetodePembayaran from './Components/MetodePembayaran'
import RingkasanBelanja from './Components/RingkasanBelanja'
import Pengiriman from './Components/Pengiriman'

export default class Checkout extends Component {
  constructor(){
    super()
    this.state = {
      alamat: true,
      pengiriman: false,
      pembayaran: false
    }
  }

  showAlamat = () => this.setState({
    alamat: true,
    pengiriman: false,
    pembayaran: false,
  })

  showPengiriman = () => this.setState({
    alamat: false,
    pengiriman: true,
    pembayaran: false
  })

  showPembayaran = () => this.setState({
    alamat: false,
    pengiriman: false,
    pembayaran: true
  })

  render() {
    return (
      <div>
        <Navigasi showAlamat = {this.showAlamat} showPengiriman={this.showPengiriman} showPembayaran={this.showPembayaran} />
        <RingkasanBelanja cart={this.props.cart} deleteCart={this.props.deleteCart} harga={this.props.harga} />

        <Alamat setAlamat={this.props.setAlamat} alamat={this.props.alamat} show={this.state.alamat} showPengiriman={this.showPengiriman} />
        <Pengiriman show={this.state.pengiriman} alamat={this.props.alamat} cart={this.props.cart} showPembayaran={this.showPembayaran}/>
        <MetodePembayaran show={this.state.pembayaran} />
      </div>
    )
  }
}
