import React, { Component } from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import lolPittLogo from '../../src/assets/banner.png'

import './Pages.css'

class Home extends Component<Props> {
  render () {
    return (
      <div className='main'>
        <img src={ lolPittLogo } />
      </div>
    )
  }
}

export default Home
