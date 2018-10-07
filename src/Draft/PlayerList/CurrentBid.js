import React, { Component } from 'react'


class CurrentBid extends Component {
  constructor(props) {
    super(props)
    this.state = { bid: 0, player: {}}
  }

  componentDidMount() {
    this.subscription = new Subscription('/draftBid',
    (bidding) => {
      this.setState(bidding)
    }
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
