import React from 'react'

const PlayerList = (props) => {
  return (
    <div className='playerList'>
      {props.players.map((player) => {
        return (
          <div className='player'>
            <h4>{player.ign}</h4>
            <div>{player.notes}</div>
              <span class='elo'> <img src={player.eloShield}/> {player.elo} </span>
              <span class='championsList'>
                {player.champions.map((champ) =>
                  <div class="champion">
                    <img src={champ.icon} />
                    <div>{champ.winrate}</div>
                    <div>{champ.kda}</div>
                  </div>
                )}
              </span>
          </div>
        )
      })}
    </div>
  )
}

export default PlayerList