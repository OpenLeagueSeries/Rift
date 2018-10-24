import React, { Component } from 'react'
import { Subscription } from '../../streamLib/stream.js'

import RosterPlayer from '../RosterPlayer'

/* Captain will have ability to drag and drop
 / Chat window is a separate subscription, optional for delivery
*/
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
      this.setState({chat: [...this.state.chat, newChat]})
    })
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }

  render() {
    const team = this.props.team;
    return (
      <div>
        <h3 class='teamName'>{team.name}</h3>
        <span>{team.pointsLeft}</span>
        <div class='teamRoster'>
            <span class='role'>Top</span><RosterPlayer player={team.roster.find((p) => p.role === 'Top')} />
            <span class='role'>Jungle</span><RosterPlayer player={team.roster.find((p) => p.role === 'Jungle')} />
            <span class='role'>Mid</span><RosterPlayer player={team.roster.find((p) => p.role === 'Mid')} />
            <span class='role'>Bot</span><RosterPlayer player={team.roster.find((p) => p.role === 'Bot')} />
            <span class='role'>Support</span><RosterPlayer player={team.roster.find((p) => p.role === 'Support')} />
            {team.unassigned.length > 0 ?
              <div class='unassigned'>
                <h4>Unassigned Players</h4>
                  {team.unassigned.map((p)=> <RosterPlayer player={p} />)}
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
