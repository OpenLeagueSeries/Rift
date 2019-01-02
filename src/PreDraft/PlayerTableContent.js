import React, { Component } from 'react'

import { PlayerInitials } from './Data/PlayerInitials'

import CaptainIcon from 'mdi-material-ui/Crown'

class PlayerTableContent extends Component {
  constructor (props) {
    super(props)
    this.state = {data: []}
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
