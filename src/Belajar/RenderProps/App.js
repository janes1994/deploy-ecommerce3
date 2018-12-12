import React from 'react'
import ToggleRP from './RenderProps/ToggleRP';
import ToggleRPC from './RenderProps/ToggleRPC'
 
class App extends React.Component {
  render(){
    return (
        <div>
          <h1>Halo</h1>
          {/* Render Props */}
          <ToggleRP render={({toggle,on}) => (
            <div>
              {on && <h1>Show me</h1>}
              <button onClick={toggle}>Show / Hide</button>
            </div>
          )}/>
          {/* Render Props Children */}
          <ToggleRPC>
            {({on, toggle}) => (
              <div>
                {on && <h1>ShowMe</h1>}
                <button onClick={toggle}>Show / Hide</button>
              </div>
            )}
          </ToggleRPC>
        </div>
    )
  }
}

export default App