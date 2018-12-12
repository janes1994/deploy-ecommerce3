import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Mac from './Mac'
import Ipad from './Ipad'

export default class Navbar extends Component {
    render(){
        return(
            <div>
                <ul>
                    <NavLink exact to="/"><li>Home</li></NavLink>
                    <NavLink exact to="/mac"><li>Mac</li></NavLink>
                    <NavLink exact to="/ipad"><li>iPad</li></NavLink>
                </ul>

                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/mac" component={Mac}></Route>
                    <Route exact path="/ipad" component={Ipad}></Route>
                </Switch>
            </div>
        )
    }
}

