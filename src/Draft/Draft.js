import React, { Component } from 'react'
import { Subscription } from '../streamLib/stream.js'

class Draft extends Component {

  constructor (props) {
    super(props)
    this.state = {value: 0, history: []}
  }

  componentDidMount() {
    this.subscription = new Subscription('/draft',
    (data) => {
      this.setState({value: data.number, history: [ ...this.state.history, 'server sent: ' + data.number]})
      if (data.number > 1) {
        const collatz = (data.number%2 === 1 ? 3 * data.number + 1: data.number/2)
        this.subscription.request({number: collatz})
        this.setState({history: [ ...this.state.history, 'client sent: ' + collatz]})
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
        <input onChange={(ev) => {this.subscription.request({number: Number(ev.target.value)})}}></input>
        {this.state.history.map((h)=> {
          return (<p>{h}</p>)
        } )}
      </div>
    )
  }
}


export default Draft
