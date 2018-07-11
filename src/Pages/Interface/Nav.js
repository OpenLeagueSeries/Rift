import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

import './Nav.css'

class Nav extends Component {
  render () {
    const { location } = this.props

    return (
      <div className='pageDisplay'>
        <div className='navBar'>
          <NavLink className='navLink' activeClassName='selected' to={'/user'}>User</NavLink>
          <NavLink className='navLink' activeClassName='selected' to={'/archive'}>Archive</NavLink>
          <NavLink className='navLink' activeClassName='selected' to={'/home'}>Home</NavLink>
          <NavLink className='navLink' activeClassName='selected' to={'/draft'}>Draft</NavLink>
        </div>
      </div>
    )
  }
}

const NavBar = withRouter(Nav)

export default NavBar
