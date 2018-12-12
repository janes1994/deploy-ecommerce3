import React from 'react'
import '../Style/NavbarSearch.css'

const NavbarSearch = ({showSearch, stateShowSearch}) => {
    if (stateShowSearch) return null;
    return (
        <div className="NavbarSearch">
            <img src="/asset_image/icons8-search-480.png" alt="search_icon" onClick={showSearch}></img>
        </div>
    )
}

export default NavbarSearch;