import React, { Component } from 'react'
import { withTeam } from '../../Contexts/MyTeamContext'
import TeamMember from './TeamMember'
import ListContainer from './ListContainer'
import List from '@material-ui/core/List'

import './team-member.css'
class PositionField extends Component {
  genList = n => {
    const list = []

    for (let i = 0; i < n; i++) {
      const player = this.props.players.reduce((acc, p) => {
        if (i === p.pos) {
          return <TeamMember id={p.id} name={p.name} cost={p.cost} role={p.roles} />
        } else {
          return acc
        }
      }, null)
      list.push(
        <ListContainer pos={i} key={i}>
          {player}
        </ListContainer>
      )
    }
    return list
  }

  render() {
    return (
      <div className="list-wrapper">
        <List component={'div'}>{this.genList(this.props.n)}</List>
      </div>
    )
  }
}

export default withTeam(PositionField)
