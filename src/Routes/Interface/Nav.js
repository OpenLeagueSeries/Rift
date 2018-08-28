import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

import PlayerListIcon from 'mdi-material/AccountDetails'

import './Nav.css'

class Nav extends Component {
  render () {
    return (
      <div className='navBar'>
        <NavLink className='navLink' activeClassName='selected' to={'/register'}><PlayerListIcon /></NavLink>
        <NavLink className='navLink' activeClassName='selected' to={'/players'}>Archive</NavLink>
      </div>
    )
  }
}

const NavBar = withRouter(Nav)

export default NavBar
