import React, { Component } from 'react'
import { Subscription } from '../../streamLib/stream.js'

class CurrentBid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bid: 0,
      player: {
        champions: []
      },
    }
  }

  componentDidMount() {
    this.subscription = new Subscription('/draftBid',
    (bidding) => {
      this.setState(bidding)
    })
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }

  render() {
    const player = this.state.player
    return (
      <div>
        current Bidding is at: {this.state.bid}
        Enter your Bid here:<input value = '0' />
        <span class='elo'> <img src={player.eloShield}/> {player.elo} </span>
        <span class='ign'>{player.ign}</span>
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
  }
}

export default CurrentBid
