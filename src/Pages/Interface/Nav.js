import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

import './Nav.css'

class Nav extends Component<Props> {
  render () {
    const { location } = this.props

    return (
      <div id='navBar'>
        <NavLink className='navLink' activeClassName='selected' to={'/home'}>Profile</NavLink>
        <NavLink className='navLink' activeClassName='selected' to={'/home'}>Schedule</NavLink>
        <NavLink className='navLink' activeClassName='selected' to={'/home'}>Home</NavLink>
        <NavLink className='navLink' activeClassName='selected' to={'/home'}>Stats</NavLink>
        <NavLink className='navLink' activeClassName='selected' to={'/home'}>Tournament</NavLink>
      </div>
    )
  }
}

const NavBar = withRouter(Nav)

export default NavBar
