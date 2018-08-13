import React, { Component } from 'react';
import Esports from './assets/img/esports.png';

import './assets/styles/Main.css';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="main-left">
          <h1>LoL@Pitt Open League Series</h1>
          <p>
            Ols is a tournament we run every semester for new students and old
            students alike. Sign-ups will be pinned to the group near the
            beginning of every semester. Great to meet new people in the club.
            Don't be afraid to join
          </p>
          <button>Join Today!</button>
        </div>
        <div className="main-right">
          <img src={Esports} alt="" />
        </div>
      </main>
    );
  }
}

export default Main;
