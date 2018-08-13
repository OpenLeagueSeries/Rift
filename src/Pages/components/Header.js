import React, { Component, Fragment } from 'react';

import './assets/styles/Header.css';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div class="header-gradient-bg" />
        <div class="header-slant-bg" />
        <header>
          <div className="header-wrap">
            <div className="left-side">
              <h1>Play OLS!</h1>
              <h3>Be a part of Pittsburgh's Open League Series and compete!</h3>
              <button>What is OLS?</button>
            </div>
            <div className="right-side">
              <div className="right-image" />
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
