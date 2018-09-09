import React, { Component } from 'react'

import { PlayerInitials } from './Data/PlayerInitials'
import { Subscription } from '../streamLib/stream'

import Avatar from '@material-ui/core/Avatar'

import CaptainIcon from 'mdi-material-ui/Crown'

class PlayerTableContent extends Component {
  constructor (props) {
    super(props)
    this.state = {data: []}
  }

  componentDidMount() {
    this.subscription = new Subscription(`/details/${this.props.user}`,
    (info) => {
      this.setState({
        data: info
      })
    })
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }

  render() {
    return(
      <tr>
        <span><PlayerInitials name={this.state.data.name}/></span>
        <td>{this.state.data.name}</td>
        <td>{this.state.data.ign}</td>
        <td>{this.state.data.roles}</td>
        <td>{this.state.data.notes}</td>
        <td>{this.state.data.captainBool}</td>
        {this.props.me.role === 'Admin'
          ? <td><CaptainIcon /></td>
          : <React.Fragment />
        }
      </tr>
    )
  }
}

export default PlayerTableContent
