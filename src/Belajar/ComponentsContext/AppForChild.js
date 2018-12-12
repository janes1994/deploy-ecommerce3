import React from 'react'
import Child from './ComponentsContext/Child'

const CobaContext = React.createContext('saya context');

class App extends React.Component {
  render(){
    return (
      <CobaContext.Provider>
        <div>
          <h1>Halo</h1>
          <Child/>
        </div>
      </CobaContext.Provider>
    )
  }
}

export default App