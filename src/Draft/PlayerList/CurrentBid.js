import React, { Component } from 'react'

class CurrentBid extends Component {
  constructor(props) {
    super(props)
    this.state = { bid: 0, player: {}}
  }

  render() {
    const player = this.state.player
    return (
      <div>
        current Bidding is at: {this.state.bid}
        Enter your Bid here:<input>0</input>
        <span class='elo'> <img src={player.eloShield} alt=''/> {player.elo} </span>
        <span class='ign'>{player.ign}</span>
        <span class='championsList'>
          {player.champions.map((champ) =>
            <div class="champion">
              <img src={champ.icon} alt='' />
              <div>{champ.winrate}</div>
              <div>{champ.kda}</div>
            </div>
          )}
        </span>

      </div>
    )
  }
}

export default CurrentBid
