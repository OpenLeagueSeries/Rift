import React, { Component } from 'react';
import { Subscription } from '../streamLib/stream.js';
import { withUserContext } from '../Contexts/UserContext';
import MediaQuery from 'react-responsive';
import MyTeam from './MyTeam/MyTeam';
import PlayerList from './PlayerList/PlayerList';
import TeamList from './TeamList/TeamList';
import CurrentBid from './PlayerList/CurrentBid';

class Draft extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [], players: [], myTeam: null };
  }

  componentDidMount() {
    this.subscription = new Subscription('/draft', data => {
      this.setState({
        myTeam: data.teams.find(team => {
          return team.roster.find(p => p._key === this.props.user._key);
        }),
        teams: data.teams,
        players: data.players
      });
    });
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end();
  }

  render() {
    return (
      <div style={{ color: 'white' }}>
        {this.state.myTeam ? <MyTeam user={this.props.user} team={this.state.myTeam} /> : ''}
        <MediaQuery minDeviceWidth={1224}>
          <TeamList user={this.props.user} teams={this.state.teams} />
        </MediaQuery>
        <CurrentBid user={this.props.user} />
        <PlayerList user={this.props.user} players={this.state.players} />
      </div>
    );
  }
}

export default withUserContext(Draft);
