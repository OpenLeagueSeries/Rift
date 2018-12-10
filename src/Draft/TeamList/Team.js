import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import AddIcon from '@material-ui/icons/Add';

import RosterPlayer from '../RosterPlayer';

const Wrapper = styled.div`
  padding: 0.1em 1em;
  overflow: hidden;
  height: ${props => (props.isOpen ? '350px' : '45px')};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: ${props =>
    props.isCurrent ? 'rgba(255,255,255,.05)' : 'transparent'};
  .info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      currentPlayers: [
        { name: 'player 1', points: 30 },
        { name: 'player 2', points: 30 },
        { name: 'player 3', points: 30 },
        { name: 'player 4', points: 30 },
        { name: 'player 5', points: 30 }
      ]
    };
  }

  handleToggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    //replace with getting players filtered by team name
    const playerElements = this.state.currentPlayers.map((player, i) => (
      <ListItem>
        <ListItemText
          primary={`Player ${i + 1}: ${player.name} - Points: ${player.points}`}
        />
      </ListItem>
    ));
    return (
      <Wrapper
        onClick={this.handleToggleOpen}
        isCurrent={this.props.isCurrent}
        isOpen={this.state.isOpen}
      >
        <div className="info">
          <h3>{this.props.team}</h3>
          <p>5 / 5 players</p>
          <p>0 / 150 pts</p>
          <AddIcon />
        </div>
        <div className="players">
          <List
            subheader={<ListSubheader>Players Drafted</ListSubheader>}
            component="div"
          >
            {playerElements}
          </List>
        </div>
      </Wrapper>
    );
  }
}
