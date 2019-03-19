import React, { Component, createContext } from 'react'

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
    this.sub = new EventSource('https://localhost:4200/me', {withCredentials: true})
    this.sub.onmessage = (msg) => {
      console.log(msg)
      if (msg.data.length> 2) {
        this.setState({
          me: JSON.parse(msg.data)[0]
        })
      }

    }
  }

  render() {
    const value = { ...this.state }
    return <Provider value={value}>{this.props.children}</Provider>
  }
}

export const withUserContext = C => props => <Consumer>{value => <C {...value} {...props} />}</Consumer>
