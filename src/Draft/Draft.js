import React, { Component } from 'react'
import { Subscription } from '../streamLib/stream.js'

class Draft extends Component {

  constructor (props) {
    super(props)
    this.state = {array: []}
    this.subscription = new Subscription('/draft')
    this.subscription.on('data', (data) => {
      this.setState(data)
    })
    this.subscription.request('Hi there')
  }

  componentWillUnmount() {
    this.subscription.end()
  }

  render () {
    return (
      <div>
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
