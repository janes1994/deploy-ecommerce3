import React from 'react'

export default class ToggleButton extends React.Component{
    state = {on: false}

    toggle = () => this.setState({on: !this.state.on})

    render(){
        return(
            <div>
                {this.state.on && <h1>{this.props.children}</h1>}
                <button onClick={this.toggle}>Show/Hide</button>
            </div>
        )
    }
}