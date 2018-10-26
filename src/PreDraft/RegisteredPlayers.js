import React, { Component } from 'react'

import { Subscription } from '../streamLib/stream'
import { withUserContext } from '../Contexts/UserContext'
import EditTableContent from './EditTableContent'
import PlayerTableContent from './PlayerTableContent'

import './PlayerList.css'

class RegisteredPlayers extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {
    this.subscription = new Subscription('/users', info => {
      this.setState({
        data: info
      })
    })
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }

  render() {
    const { me } = this.props
    const playersList = this.state.data.map(user => {
      if (user === me) {
        return <EditTableContent key={user} user={user} me={me} />
      } else {
        return <PlayerTableContent key={user} user={user} me={me} />
      }
    })
    return (
      <div className="playerListDisplay">
        <table className="tableContainer">
          <thead>
            <tr>
              <th />
              <th>Player Name</th>
              <th>Summoner Name</th>
              <th>Roles</th>
              <th>Notes</th>
              <th>Captain</th>
            </tr>
          </thead>
          <tbody>{playersList}</tbody>
        </table>
      </div>
    )
  }
}

export default withUserContext(RegisteredPlayers)
