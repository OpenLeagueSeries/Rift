import React, { Component } from 'react'

import lolPittLogo from '../../src/assets/banner.png'

import './Pages.css'

class Home extends Component {
  render () {
    return (
      <div className='main'>
        <img src={ lolPittLogo } />
      </div>
    )
  }
}

export default Home
