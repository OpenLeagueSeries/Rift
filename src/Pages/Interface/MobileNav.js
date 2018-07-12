import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import UserIcon from '@material-ui/icons/Face'
import ArchiveIcon from '@material-ui/icons/History'
import TrophyIcon from 'mdi-material-ui/Trophy'

import './MobileNav.css'

class MobileNav extends Component {
  state = {value: 420}

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render () {
    return (
      <div className='NavDisplay'>
        <BottomNavigation position value={this.state.value} onChange={this.handleChange} showLabels >
          <BottomNavigationAction label='Account' icon={<UserIcon />} component={Link} to={'/user'} />
          <BottomNavigationAction label='Tournament' icon={<TrophyIcon />} component={Link} to={'/home'} />
          <BottomNavigationAction label='Archive' icon={<ArchiveIcon />} component={Link} to={'/archive'} />
        </BottomNavigation>
      </div>
    )
  }
}

export default MobileNav
