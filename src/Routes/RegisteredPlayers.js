import React, { Component } from 'react'

import './PlayerList.css'

class RegisteredPlayers extends Component {
  state = {

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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tbody>
        </table>
      </div>
    )
  }
}

export default RegisteredPlayers
