import React from 'react'
import Team from './Team'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import RosterPlayer from '../RosterPlayer'

const TeamList = ({ teams, currentPick }) => {
  const teamElements = teams.map((team, i) => (
    <ListItem style={{ padding: 0 }} divider button>
      <Team team={team} isCurrent={currentPick === i} />
    </ListItem>
  ))
  return (
    <List component="div" className="teamsList">
      <div class="TeamList">{teamElements}</div>
    </List>
  )
}

export default TeamList
