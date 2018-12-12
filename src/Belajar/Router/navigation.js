import React from 'react'
import { NavLink } from 'react-router-dom'

export default function(){
    return (
        <div>
            <div>
                <NavLink exact to="/">Home</NavLink>
            </div>

            <div>
                <NavLink exact to="/mac">Mac</NavLink>
            </div>

            <div>
                <NavLink exact to="/ipad">Ipad</NavLink>
            </div>
        </div>
    )
}