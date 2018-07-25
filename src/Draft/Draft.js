import React, { Component } from 'react'
import { Subscription } from '../streamLib/stream.js'

class Draft extends Component {

  constructor (props) {
    super(props)
    this.state = {value: 0}
  }

  componentDidMount() {
    this.subscription = new Subscription('/draft', (data) => {
      this.setState({value: data.number})
      if (data.number > 1) {
        this.subscription.request({number: (data.number%2 === 1 ? 3 * data.number + 1: data.number/2)})
      }    
    })
  }
  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }

  render () {
    return (
      <div style={{color: 'white'}}>
        {this.state.value}
      </div>
    )
  }
}


export default Draft
