import React, { Component } from 'react'

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
    this.sub = new EventSource('https://localhost:4200/users')
    this.sub.onmessage = info => {
      this.setState({
        data: JSON.parse(info.data)
      })
    }
  }

  componentWillUnmount() {
    this.sub && this.sub.close()
  }

  start() {
    
  }

  render() {
    const { me } = this.props
    const playersList = this.state.data.map(user => {
      if (user === me._key || me.role === 'admin') {
        return <EditTableContent key={user} user={user} me={me} />
      } else {
        return <PlayerTableContent key={user} user={user} me={me} />
      }
    })
    return (
      <div className="playerListDisplay">
        {me.role === 'admin' ? <button onClick={this.start}> Start the draft with these players </button>: ''}
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
