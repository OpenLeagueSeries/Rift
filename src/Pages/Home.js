import React, { Component } from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './Pages.css'

class Home extends Component<Props> {
  state = { value: 0 }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render () {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div id='main'>

      </div>
    )
  }
}

export default Home
