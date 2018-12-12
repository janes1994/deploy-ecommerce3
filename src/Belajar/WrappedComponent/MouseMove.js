import React from 'react'
import withMouse from '../HOC/withMouse'

class MouseMove extends React.Component{
    render(){
        const {x,y} = this.props.mouse;

        return(
            <div style={{height: '100rem', width:'100rem'}}>
                <h1>The Mouse position is ({x}, {y})</h1>
            </div>
        )
    }
}

const MouseMoveWrapped = withMouse(MouseMove)

export default MouseMoveWrapped;