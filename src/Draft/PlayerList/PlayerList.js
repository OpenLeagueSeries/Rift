import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

// import './DraftPlayerList.css'

const PlayerList = (props) => {

  const { classes } = props;

  return (
    <div className='playerList'>
      {props.players.map((player) => {
        return (
          <div className='player'>
            <Card style = {{margin: '10px', width: '40vw', padding: '0px'}}>
              <CardContent>
                <h2>{player.ign}</h2>
                <div>{player.notes}</div>
                <div className='eloDisplay'>
                  <span class='eloSolo'> <img src={player.eloSoloShield}/> {player.eloSolo} </span>
                  <span class='eloFlex'> <img src={player.eloFlexShield}/> {player.eloFlex} </span>
                </div>
                <span class='championsList'>
                  {player.champions.map((champ) =>
                    <div class="champion">
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
