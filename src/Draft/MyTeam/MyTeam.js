import React, { Component } from 'react'
import { withTeam } from '../../Contexts/MyTeamContext'
import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core'
import PositionField from './PositionField'
import { Subscription } from '../../streamLib/stream.js'

import RosterPlayer from '../RosterPlayer'

const Wrapper = styled.div``
class MyTeam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chat: []
    }
  }

  // componentDidMount() {
  //   this.subscription = new Subscription('/teamChat',
  //   (newChat) => {
  //     this.setState({chat: [...this.state.chat, newChat]})
  //   })
  // }

  // componentWillUnmount() {
  //   this.subscription && this.subscription.end()
  // }

  render() {
    const currentBid = 70
    return (
      <div className="team-wrapper">
        <div className="header">
          <h1 class="teamName">{this.props.name}</h1>
          <h1>
            Points: {this.props.pointsLeft} / {this.props.pointsOriginal}
          </h1>
        </div>
        <div className="teamRoster">
          <h1>Roster</h1>
          <PositionField n={5} />
        </div>
        <div className="controls">
          <h1>Submit your Bid</h1>
          <form>
            <TextField type="number" value={currentBid + 1} />
            <Button component="button" color="secondary">
              Submit Bid
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default withTeam(MyTeam)
