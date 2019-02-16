import React from 'react'
import goldIV from '../../assets/gold_4.png'

import './current-player.css'

const CurrentPlayer = ({ player }) => {
  //temporary but set up for player to be a prop
  player = {
    name: 'Anthony Agnone',
    initials: 'AA',
    ign: 'WindowPane',
    notes:
      "Washed up scuffed don't make a captain etc etc etc. Also as a note to me. I don't like this. This needs a lot of work. But it gets the basic idea done.",
    elo: 1500,
    shield: goldIV,
    role: 'jg / supp',
    champions: [
      {
        name: 'Ivern',
        wr: '100%',
        kda: '10'
      },
      {
        name: 'Aatrox',
        wr: '100%',
        kda: '10'
      },
      {
        name: 'Ahri',
        wr: '100%',
        kda: '10'
      }
    ]
  }

  const championList = player.champions.map(champion => (
    <div key={champion.name}>
      <p>{champion.name}</p>
      <p>w/r: {champion.wr}</p>
      <p>kda: {champion.kda}</p>
    </div>
  ))

  return (
    <div className="current-player-wrapper">
      <div className="currentBid">
        <h1>Bid:</h1>
        <h1>14pts</h1>
      </div>
      {/* <Avatar className="avatar">{player.initials}</Avatar> */}
      <h1>{player.name}</h1>
      <a href={`http://na.op.gg/summoner/userName=${player.ign}`}>op.gg</a>
      <h1 className="ign">{player.ign}</h1>
      <img src={player.shield} alt="" className="shield" />
      <h2 className="elo">
        <p>ELO: </p>
        {player.elo}
      </h2>
      <h2 className="role">{player.role}</h2>
      <h4 className="notes">{player.notes}</h4>
      <div className="champSection">{championList}</div>
    </div>
  )
}

export default CurrentPlayer
