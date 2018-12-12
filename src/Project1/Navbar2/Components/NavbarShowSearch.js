import React, { Component } from 'react'
import '../Style/NavbarShowSearch.css'

export default class NavbarShowSearch extends Component {
    render() {
    if (this.props.showSearch) {
        return (
            <div className="NavbarShowSearch">
                <input type="text" placeholder="Search website.com"/>
                <img className="closeSearch" src="/asset_image/icons8-multiply-100.png" alt="close_icon" onClick={this.props.closeSearch}></img>
            </div>  
        )
    }
    return null
  }
}
