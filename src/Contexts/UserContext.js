import React, { Component, createContext } from 'react'
import { Subscription } from '../streamLib/stream'

const { Consumer, Provider } = createContext()

export default class UserContext extends Component {
  constructor(props) {
    super(props)

    this.state = {
      me: {
        _key: ''
      }
    }
  }

  componentDidMount() {
    this.subscription = new Subscription('/me', info => {
      this.setState({
        me: info
      })
    })
  }

  render() {
    const value = { ...this.state }
    return <Provider value={value}>{this.props.children}</Provider>
  }
}

export const withUserContext = C => props => <Consumer>{value => <C {...value} {...props} />}</Consumer>
