import React, { Component } from 'react'
import { Subscription } from '../streamLib/stream.js'
import { withUserContext } from '../Contexts/UserContext'
import MediaQuery from 'react-responsive'
import MyTeam from './MyTeam/MyTeam'
import PlayerList from './PlayerList/PlayerList'
import TeamList from './TeamList/TeamList'
import CurrentBid from './PlayerList/CurrentBid'
import eloDiamond from '../assets/tier-icons/diamond_iii.png'
import aatrox from '../assets/champ-icons/Aatrox.png'

class Draft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: [],
      players: [
        {
          ign: 'PwnNarbs',
          notes: 'I like to play Mid Lane',
          eloSoloShield: eloDiamond,
          eloFlexShield: eloDiamond,
          eloSolo: 'D3 56 LP',
          eloFlex: 'D3 21 LP',
          champions: [
            {icon: aatrox, name: 'Malzahar',winrate: .5, kda: '4/2/3'},
            {icon: aatrox, name: 'Sion', winrate: .7, kda: '6/3/8'},
            {icon: aatrox, name: 'Aatrox',winrate: .3, kda: '4/2/0'}
          ]
        },
        {
          ign: 'zStinkLoser',
          eloSoloShield: '',
          eloFlexShield: '',
          eloSolo: 'S3 25 LP',
          eloFlex: 'S2 45 LP',
          champions: []
        }
      ],
      myTeam: null
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

  componentWillUnmount() {
    this.subscription && this.subscription.end()
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
    )
  }
}

export default withUserContext(Draft)
