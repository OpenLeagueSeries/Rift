import React, { Component } from 'react';

import './assets/styles/Officers.css';

class Officers extends Component {
  render() {
    return (
      <section>
        <h1>LoL@Pitt Officers</h1>
        <div className="officer-wrap">
          <div class="officer" />
          <div class="officer" />
          <div class="officer" />
          <div class="officer" />
          <div class="officer" />
        </div>
      </section>
    );
  }
}

export default Officers;
