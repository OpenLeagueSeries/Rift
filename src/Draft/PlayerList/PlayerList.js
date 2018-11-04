import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'

// import './DraftPlayerList.css'

const PlayerList = (props) => {

  return (
    <div className='playerList'>
      {props.players.map((player) => {
        return (
          <div className='player' key={player.ign}>
            <Card style = {{margin: '10px', width: '40vw', padding: '0px'}}>
              <CardContent>
                <h2>{player.ign}</h2>
                <div>{player.notes}</div>
                <div className='eloDisplay'>
                  <span className='eloSolo'> <img src={player.eloSoloShield}/> {player.eloSolo} </span>
                  <span className='eloFlex'> <img src={player.eloFlexShield}/> {player.eloFlex} </span>
                </div>
                <span className='championsList'>
                  {player.champions.map((champ) =>
                    <div className="champion" key={champ.name}>
                      <img src={champ.icon} />
                      <span>{champ.name}</span>
                      <div>{champ.winrate}</div>
                      <div>{champ.kda}</div>
                    </div>
                  )}
                </span>
              </CardContent>
            </Card>

          </div>
        )
      })}
    </div>
  )
}

export default PlayerList
