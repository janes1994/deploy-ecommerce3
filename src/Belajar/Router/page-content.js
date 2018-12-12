import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home'
import Mac from './Mac'
import Ipad from './Ipad'

export default function() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/mac" component={Mac}></Route>
                <Route exact path="/ipad" component={Ipad}></Route>
            </Switch>
        </div>
    )
}