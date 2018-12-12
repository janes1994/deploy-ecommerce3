// Penggunaan react-router-dom

import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Navbar from './Router/Navbar'

class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App