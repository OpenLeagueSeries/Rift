import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

import ButtonBase from '@material-ui/core/ButtonBase'

import PlayerListIcon from 'mdi-material-ui/AccountGroup'
import RegisterIcon from 'mdi-material-ui/AccountPlus'

import './Nav.css'

class Nav extends Component {
  state = {
    clicked: 'fab'
  }

  handleSelected = () => {
    { this.state.clicked === 'fab' ?
      this.setState(state => ({
        clicked: 'extendedFab'
      }))
    : this.setState(state => ({
        clicked: 'fab'
      }))
    }
  }

  render () {
    return (
      <div className='navBar'>
        <NavLink className='navLink' activeClassName='selected' to={'/players'}>
          <ButtonBase
            className='navButton'
            onClick={this.handleSelected}
            focusVisibleClassName='navFocused'>
            <PlayerListIcon className='playerListIcon'/>
          </ButtonBase>
        </NavLink>
        <NavLink className='navLink' activeClassName='selected' to={'/register'}>
          <ButtonBase
            className='navButton'
            onClick={this.handleSelected}
            focusVisibleClassName='navFocused'>
            <RegisterIcon className='registerIcon'/>
          </ButtonBase>
        </NavLink>
      </div>
    )
  }
}

const NavBar = withRouter(Nav)

export default NavBar
