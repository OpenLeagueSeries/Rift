import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import UserIcon from '@material-ui/icons/Face'

class MobileNav extends Component {
  state = {value: 420}

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render () {
    return (
      <BottomNavigation value={this.state.value} onChange={this.handleChange} showLabels >
          <BottomNavigationAction label='Account' icon={<UserIcon />} component={Link} to={'/user'} />
      </BottomNavigation>
    )
  }
}

export default MobileNav
