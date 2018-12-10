import React from 'react';
import Team from './Team';
import ListItem from '@material-ui/core/ListItem';

import RosterPlayer from '../RosterPlayer';

const TeamList = ({ teams, currentPick }) => {
  const teamElements = teams.map((team, i) => (
    <ListItem style={{ padding: 0 }} divider button>
      <Team team={team} isCurrent={currentPick === i} />
    </ListItem>
  ));
  return <div class="TeamList">{teamElements}</div>;
};

export default TeamList;
