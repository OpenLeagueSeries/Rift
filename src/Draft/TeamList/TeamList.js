import React from 'react'
import Team from './Team'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const TeamList = ({ teams, currentPick }) => {
  const teamElements = teams.map((team, i) => (
    <ListItem key={team} style={{ padding: 0 }} divider button>
      <Team team={team} isCurrent={currentPick === i} />
    </ListItem>
  ))
  return (
    <List component="div" className="teamsList">
      <div className="TeamList">{teamElements}</div>
    </List>
  )
}

export default TeamList
