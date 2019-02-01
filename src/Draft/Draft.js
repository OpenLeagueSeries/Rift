import React, { Component } from 'react'
import { Subscription } from '../streamLib/stream.js'
import { withUserContext } from '../Contexts/UserContext'
import MediaQuery from 'react-responsive'
import MyTeam from './MyTeam/MyTeam'
import PlayerList from './PlayerList/PlayerList'
import TeamList from './TeamList/TeamList'
import CurrentBid from './PlayerList/CurrentBid'
import CurrentPlayer from './PlayerList/CurrentPlayer'
import PositionField from './MyTeam/PositionField'


import { styled } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

import { Hidden } from '@material-ui/core'

const GridContainer = styled(Grid)({
  height: '100vh',
  width: '100vw',
  color: '#fff',
  padding: '1em'
})

const AllTeamsContainer = styled(Grid)({
  height: '100%',
  width: '100%',
  overflow: 'hidden'
})

const MidGrid = styled(Grid)({
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1em 1em 1em 2em'
})

class Draft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: [
        'team1',
        'team2',
        'team3',
        'team4',
        'team5',
        'team6',
        'team7',
        'team8',
        'team9',
        'team10',
        'team11',
        'team12'
      ],
      players: [],
      myTeam: null,
      currentPick: 0
    }
  }

  componentDidMount() {
    // this.subscription = new Subscription('/draft', data => {
    //   this.setState({
    //     myTeam: data.teams.find(team => {
    //       return team.roster.find(p => p._key === this.props.user._key)
    //     }),
    //     teams: data.teams,
    //     players: data.players
    //   })
    // })
  }

  // componentWillUnmount() {
  //   this.subscription && this.subscription.end()
  // }

  render() {
    return (
      <GridContainer className="container" container spacing={8}>
        <AllTeamsContainer className="allTeams" item xs={12} lg={2}>

          <h1>All Teams</h1>
          <TeamList teams={this.state.teams} currentPick={this.state.currentPick} />
          <Grid item spacing={0}>
            this could be a chatbox or the timer if the chat box goes in main window.
          </Grid>
        </AllTeamsContainer>
        <Grid className="playerView" item xs={12} lg={7}>
          <MidGrid container spacing={16}>
            <Grid className="playerStats" item xs={12}>
              <CurrentPlayer />
            </Grid>
            <Grid className="allPlayers" style={{ height: '70%' }} item xs={12}>
              this is where all the players and the order in which they will be drafted will be displayed with minimal
              stat display like mmr and role.
            </Grid>
            <Grid className="chatBox" item xs={12}>
              this is where the chat could go if decided to go here
            </Grid>
          </MidGrid>
        </Grid>
        <Grid className="yourTeam" item xs={12} lg={3} style={{ height: '100%' }}>
          <MyTeam />
          this is where it shows your team. your pointes, your player, etc
        </Grid>
      </GridContainer>
    )
  }
}

export default withUserContext(Draft)
