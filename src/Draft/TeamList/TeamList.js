import React from 'react'

import RosterPlayer from '../RosterPlayer'

const TeamList = (props) => {
    return (
      <div className="TeamList">
        {props.teams
          .sort((teamA, teamB) => {
              return teamB.pointsLeft - teamA.pointsLeft
            }
          )
          .map((team) => {
            return (
              <div>
                <h3 className="teamName">{team.name}</h3>
                <h5 className="captainName">{team.captainName}</h5>
                <span>{team.pointsLeft}</span>
                {team.players.map((p)=> {
                  return(
                    <RosterPlayer player={p} />
                  )
                })}
              </div>
            )
        })}
      </div>
    )
}

export default TeamList
