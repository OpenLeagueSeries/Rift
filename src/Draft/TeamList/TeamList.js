import React from 'react'

import RosterSlot from '../RosterSlot'

export default const TeamList = (props) => {
    return (
      <div class="TeamList">
        {props.teams
          .sort((teamA, teamB) => {
              return teamB.pointsLeft - teamA.pointsLeft
            }
          )
          .map((team) => {
            return (
              <div>
                <h3 class="teamName">{team.name}</h3>
                <span>{team.pointsLeft}</span>
                {team.players.map((p)=> {
                  return(
                    <RosterSlot player={p} />
                  )
                })}
              </div>
            )
        })}
      </div>
    )
}
