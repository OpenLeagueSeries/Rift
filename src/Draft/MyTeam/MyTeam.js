import React, { Component } from 'react'
import { Subscription } from '../streamLib/stream.js'

import RosterSlot from '../RosterSlot'

class MyTeam extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chat:[]
    }
  }

  componentDidMount() {
    this.subscription = new Subscription('/teamChat',
    (newChat) => {
      this.setState({chat: this.state.chat.push(newChat)})
    }
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }

  render() {
    return (
      <div>
        <h3 class='teamName'>{team.name}</h3>
        <span>{team.pointsLeft}</span>
        <div class='teamRoster'>
            <span class='role'>Top</span><RosterSlot player={team.roster.find((p) => p.role === 'Top')} />
            <span class='role'>Jungle</span><RosterSlot player={team.roster.find((p) => p.role === 'Jungle')} />
            <span class='role'>Mid</span><RosterSlot player={team.roster.find((p) => p.role === 'Mid')} />
            <span class='role'>Bot</span><RosterSlot player={team.roster.find((p) => p.role === 'Bot')} />
            <span class='role'>Support</span><RosterSlot player={team.roster.find((p) => p.role === 'Support')} />
            {unassigned.length > 0 ?
              <div>
                <h4>Unassigned Players</h4>
                {unassigned.map((p)=> <RosterSlot player={p} />)}
              </div>
            : ''}
        </div>
        <div class='chat'>
          {this.state.chat.map((msg)=> {
            return (<div>{msg.sender}{msg.message}</div>)
          })}
          <input />
        </div>
      </div>
    )
  }
}

export default MyTeam
