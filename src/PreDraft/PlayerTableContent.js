import React, { Component } from 'react'

import { PlayerInitials } from './Data/PlayerInitials'

import CaptainIcon from 'mdi-material-ui/Crown'

class PlayerTableContent extends Component {
  constructor (props) {
    super(props)
    this.state = {data: {name: '', ign: '', selectedRoles: [], notes: '', captainBool: false}}
  }

  componentDidMount() {
    this.sub = new EventSource(`https://localhost:4200/details/${this.props.user}`)
    this.sub.onmessage = (info) => {
      this.setState({
        data: JSON.parse(info.data)[0]
      })
    }
  }

  componentWillUnmount() {
    this.sub && this.sub.close()
  }

  render() {
    return (
      <tr>
        <td><PlayerInitials name={this.state.data.name}/></td>
        <td>{this.state.data.name}</td>
        <td>{this.state.data.ign}</td>
        <td>{(this.state.data.selectedRoles || []).join(', ')}</td>
        <td>{this.state.data.notes}</td>
        <td>
        {this.state.data.captainBool
          ? <CaptainIcon />
          : <React.Fragment />
        }
        </td>
      </tr>
    )
  }
}

export default PlayerTableContent
