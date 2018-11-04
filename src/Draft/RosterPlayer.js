import React from 'react'

// A player that has been bid

const RosterList = ({player: {
    ign,
    eloShield,
    elo,
    champions
  }}) => {
  return (
    <div class="rosterSlot">
      <span class='elo'> <img src={eloShield}/> {elo} </span>
      <span class='ign'>{ign}</span>
      <span class='championsList'>
        {champions.map((champ) =>
          <div class="champion">
            <img src={champ.icon} />
            <div>{champ.winrate}</div>
            <div>{champ.kda}</div>
          </div>
        )}
      </span>
    </div>
  )
}

export default RosterList
