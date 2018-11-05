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
      <span className='ign'>{ign}</span>
      <span className='elo'> <img src={eloShield}/> {elo} </span>
      <span className='championsList'>
        {champions.map((champ) =>
          <div className="champion">
            <img src={champ.icon} />
            //<div>{champ.winrate}</div>
            //<div>{champ.kda}</div>
          </div>
        )}
      </span>
    </div>
  )
}

export default RosterList
