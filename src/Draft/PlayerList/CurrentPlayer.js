import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

import goldIV from '../../assets/gold_4.png';

const Wrapper = styled.div`
  & h1,
  h2,
  h3,
  h4,
  img,
  p {
    margin: 0;
    padding: 0;
  }
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(40px, auto);
  grid-template-areas:
    'cb    av    name  name  name  op    champ'
    'cb    sh    ign   ign   elo   role  champ'
    'notes notes notes notes notes notes champ';
  border-bottom: 1px solid #fff;
  padding: 1em;
  & .avatar {
    justify-self: center;
    align-self: center;
    grid-area: av;
  }
  & h1 {
    grid-area: name;
    align-self: center;
    margin: 0;
  }
  & a {
    grid-area: op;
    align-self: center;
    color: #fff;
    font-size: 2em;
    text-decoration: none;
    position: relative;
    justify-self: center;
    :after {
      position: absolute;
      top: 105%;
      left: -10px;
      content: '';
      height: 2px;
      width: 90px;
      background-color: white;
    }
  }
  .ign {
    grid-area: ign;
    align-self: center;
    margin: 0;
  }
  .elo {
    grid-area: elo;
    align-self: center;
    justify-self: center;
  }
  .shield {
    grid-area: sh;
    justify-self: center;
    align-self: center;
    height: 80px;
    width: auto;
  }
  .role {
    grid-area: role;
    justify-self: center;
    align-self: center;
  }
  .notes {
    grid-area: notes;
    align-self: center;
  }
  .champSection {
    grid-area: champ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    text-align: right;
  }
  .currentBid {
    grid-area: cb;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2em;
    border: 2px solid white;
    margin: 0 0.5em 1em 0.5em;
  }
`;
const CurrentPlayer = ({ player }) => {
  player = {
    name: 'Anthony Agnone',
    initials: 'AA',
    ign: 'WindowPane',
    notes:
      "Washed up scuffed don't make a captain etc etc etc Washed up scuffed don't make a captain etc etc etc Washed up scuffed don't make a captain etc etc etc. Also as a note to me. I don't like this. This needs a lot of work. But it gets the basic idea done.",
    elo: 1100,
    shield: goldIV,
    role: 'jg / supp'
  };
  return (
    <Wrapper>
      <div className="currentBid">
        <h1>Bid:</h1>
        <h1>14pts</h1>
      </div>
      <Avatar className="avatar">{player.initials}</Avatar>
      <h1>{player.name}</h1>
      <a href={`http://na.op.gg/summoner/userName=${player.ign}`}>op.gg</a>
      <h1 className="ign">{player.ign}</h1>
      <img src={player.shield} alt="" className="shield" />
      <h2 className="elo">{player.elo}</h2>
      <h2 className="role">{player.role}</h2>
      <h4 className="notes">{player.notes}</h4>
      <div className="champSection">
        <champ>
          <p>Ivern</p>
          <p>w/r: 100%</p>
          <p>kda: 10</p>
        </champ>
        <champ>
          <p>Ivern</p>
          <p>w/r: 100%</p>
          <p>kda: 10</p>
        </champ>
        <champ>
          <p>Ivern</p>
          <p>w/r: 100%</p>
          <p>kda: 10</p>
        </champ>
      </div>
    </Wrapper>
  );
};

export default CurrentPlayer;
