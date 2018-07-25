import React, { Component } from 'react'
import { Subscription } from '../streamLib/stream.js'

class Draft extends Component {

  constructor (props) {
    super(props)
    this.state = {array: []}
    this.subscription = new Subscription('/draft', (data) => {
      this.setState(data)
    })
  }

  componentWillUnmount() {
    this.subscription.end()
  }

  render () {
    return (
      <div style={{color: 'white'}}>
        {this.state.array.map((a)=> {
          return (
            a
          )
        })}
      </div>
    )
  }
}


export default Draft
