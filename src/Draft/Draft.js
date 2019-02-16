import React, { Component } from 'react'
import { withUserContext } from '../Contexts/UserContext'
import TeamList from './TeamList/TeamList'
import CurrentPlayer from './PlayerList/CurrentPlayer'
import PositionField from './MyTeam/PositionField'
import MyTeam from './MyTeam/MyTeam'


import { styled } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'


const url = 'https://localhost:4200/draft';

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

const postData = (data) => {
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data)
  }).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
  });
}

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
      bid: {}
    }
  }

  componentDidMount() {
    this.sub = new EventSource(url);
    // state update
    this.sub.onmessage = (res) => {
      const data = JSON.parse(res.data)
      console.log(data);
      if (data.started) {
        this.setState({teams: data.teams, players: data.players, bid: data.bid})
      } else {
        this.setState({teams: [], players: [], bid: {}})
      }

    };
    // new draft created
    this.sub.addEventListener('new', (ev) => {
      console.log(ev);
    });
    // a player has been won
    this.sub.addEventListener('playerWon', (ev) => {

    });
    // a new player is up for bid
    this.sub.addEventListener('nextBid', (ev) => {

    });
    // waiting for a confirmation before proceeding
    this.sub.addEventListener('waitingConfirmation', (ev) => {

    });
    // a new bid has come in
    this.sub.addEventListener('bid', (ev) => {

    });
    // end of draft
    this.sub.addEventListener('end' , (ev) => {

    });
    // pause the draft
    this.sub.addEventListener('pause', (ev) => {

    });
    // resume the draft
    this.sub.addEventListener('resume', (ev) => {

    });
  }

  render() {
    return (
      <GridContainer className="container" container spacing={8}>
        <AllTeamsContainer className="allTeams" item xs={12} lg={2}>

          <h1>All Teams</h1>
          <TeamList teams={this.state.teams} currentPick={this.state.currentPick} />
          <Grid item>
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
          </MidGrid>
        </Grid>
        <Grid className="yourTeam" item xs={12} lg={3} style={{ height: '100%' }}>
          <MyTeam />
          this is where it shows your team. your pointes, your player, etc
        </Grid>
        <button onClick={(ev) => postData({
          event: 'create',
          players: [],
          captains: [],
          admins: []
        })} > click it</button>
      </GridContainer>
    )
  }
}

export default withUserContext(Draft)
