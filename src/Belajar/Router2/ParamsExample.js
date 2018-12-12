import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function ParamsExample() {
    return (
        <Router>
            <div>
                <h2>Acounts</h2>
                <ul>
                    <li><Link to="/netflix">Netflix</Link></li>
                    <li><Link to="/zillow-group">Zillow Group</Link></li>
                    <li><Link to="/yahoo">Yahoo</Link></li>
                    <li><Link to="/modus-create">Modus Create</Link></li>
                </ul>

                <Route path="/:id" component={Child} />

                {/* 
                    Dimungkinkan menggunakan regular expression untuk kontrol
                    nilai param apa yang harus cocok
                    * "/order/asc"  - matched
                    * "/order/desc" - matched
                    * "/order/foo"  - not matched
                */}
                <Route
                    path="/order/:direction"
                />
            </div>
        </Router>
    )
}