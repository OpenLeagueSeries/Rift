import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'

import './DraftPlayerList.css'

const PlayerList = (props) => {

  return (
    <div className='playerList'>
      {props.players.map((player) => {
        return (
          <Card style = {{margin: '10px', width: '40vw', padding: '0px'}}>
            <CardContent>
              <div className='player' key={player.ign}>
                <div>
                  <h2 className='ign'>{player.ign}</h2>
                  <div className='notes'>{player.notes}</div>
                </div>
                <div>
                  <span className='eloDisplay'>
                    <div className='eloSolo'> <h4>Solo</h4> <img src={player.eloSoloShield}/> {player.eloSolo} </div>
                    <div className='eloFlex'> <h4>Flex</h4> <img src={player.eloFlexShield}/> {player.eloFlex} </div>
                  </span>
                  <span className='championsList'>
                    {player.champions.map((champ) =>
                      <span className='champion' key={champ.name}>
                        <img className='champIcon' src={champ.icon} />
                        <span className='champName'>{champ.name}</span>
                        <div className='champWinrate'>{champ.winrate}</div>
                        <div className='champKDA'>{champ.kda}</div>
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default PlayerList
