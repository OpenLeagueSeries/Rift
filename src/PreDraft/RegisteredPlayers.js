import React, { Component } from 'react'

import { Subscription } from '../streamLib/stream'
import { UserContext } from '../App'
import EditTableContent from './EditTableContent'
import PlayerTableContent from './PlayerTableContent'

import './PlayerList.css'

class RegisteredPlayers extends Component {
  constructor (props) {
    super(props)
    this.state = {data: []}
  }

  componentDidMount() {
    this.subscription = new Subscription('/users',
    (info) => {
      this.setState({
        data: info
      })
    })
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }

  render () {
    return (
      <div className='playerListDisplay'>
        <table className='tableContainer'>
          <thead>
            <tr>
              <th></th>
              <th>Player Name</th>
              <th>Summoner Name</th>
              <th>Roles</th>
              <th>Notes</th>
              <th>Captain</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((user) => {
              return (
                <UserContext.Consumer key={user}>
                  {(me) => {
                    return user === me._key
                    ? <EditTableContent key={user} user={user} me={me} />
                    : <PlayerTableContent key={user} user={user} me={me} />
                  }}
                </UserContext.Consumer>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default RegisteredPlayers
