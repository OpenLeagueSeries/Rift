import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive';

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AccountCircle from '@material-ui/icons/AccountCircle'

import Nav from './Interface/Nav.js'

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

        {/* MOBILE */}
        <MediaQuery maxDeviceWidth={1224}>
          <BottomNavigation value={value} onChange={this.handleChange}>
            <BottomNavigationAction label='Account' icon={<AccountCircle />} />
          </BottomNavigation>
        </MediaQuery>

        {/* WEB */}
        <MediaQuery minDeviceWidth={1225}>
          <Nav />
        </MediaQuery>
      </div>
    )
  }
}

export default Home
