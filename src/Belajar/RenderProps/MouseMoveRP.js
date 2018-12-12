import React from 'react'

// Daripada menggunakan HOC, kita dapat berbagi kode menggunakan
// regular component dengan render prop

class Mouse extends React.Component {
    state = {x: 0, y: 0}

    handleMouseMove = (event) => {
        this.setState({x: event.clientX, y: event.clientY})
    }

    render(){
        return(
            <div style={{height: '100rem', width: '100rem'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default class MouseMove extends React.Component {
    render(){
        return(
            <div>
                <Mouse render={({x,y}) => (
                    // Render props memberikan state yang kita butuhkan
                    // untuk merender apapun yang kita inginkan disini
                    <h1>The mouse position is ({x}, {y})</h1>
                )}/>
            </div>
        )
    }
}

