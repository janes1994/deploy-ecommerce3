import React, { Component } from 'react'

export default class CobaRenderProps extends Component {
  state = {on: false}

  toggle = () => this.setState({on: !this.state.on})

  render() {
    return (
      <div>
          {this.props.render({on: this.state.on, toggle: this.toggle})}
      </div>
    )
  }
}
