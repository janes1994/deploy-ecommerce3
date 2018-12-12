import React from 'react'
import './App.css'
import Navbar2 from "./Project1/Navbar2/Navbar2"
import Homepage from "./Project1/Homepage/Homepage"
import Footer from "./Project1/Footer/Footer"

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Kategori from "./Project1/Kategori/Kategori"

import BuyPage from "./Project1/BuyPage/Buypage"
import Checkout from "./Project1/Checkout/Checkout"

import Login from "./Project1/Login/Login"
import Register from "./Project1/Login/Register"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            // link: localStorage.getItem('link'),
            link: null,
            buy: null,
            cart: [],
            harga: [],
            alamat: {}
        }
    }

    componentDidUpdate(){
        console.log(this.state.alamat)
    }

    setLink = (param) => this.setState({link: param})
    // setLink = (param) => localStorage.setItem('link', param)

    setBuy = (param) => this.setState({buy: param})

    setCart = (param) => this.setState({
        cart: [...this.state.cart, param],
        harga: [...this.state.harga,param.harga].reduce((a,b) => a + b)
    })

    deleteCart = (param) => {
        this.setState({cart: this.state.cart.filter(item => item.id !== param)})
    }

    setAlamat = (event) => {
        this.setState({
            alamat: {...this.state.alamat, [event.target.name]: event.target.value}
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar2 setLink={this.setLink} cart={this.state.cart} />
                        <Route exact path="/" render={() => <Homepage setLink={this.setLink}/>} />

                        <Route path={`/kategori/${this.state.link}`} render={() => <Kategori link={this.state.link} setBuy={this.setBuy}/>}/>

                        <Route path={`/buypage/${this.state.buy}`} render={() => <BuyPage buy={this.state.buy} setCart={this.setCart}/>}/>
                        <Route path={`/checkout`} render={()=> <Checkout cart={this.state.cart} deleteCart={this.deleteCart} harga={this.state.harga} setAlamat={this.setAlamat} alamat={this.state.alamat} />}/>

                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="/register" render={() => <Register/>}/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App;