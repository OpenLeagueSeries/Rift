import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Draft from './Draft/Draft';
import RegisteredPlayers from './PreDraft/RegisteredPlayers';
import DesktopRegister from './Registration/DesktopRegister/DesktopRegister';
import MobileRegister from './Registration/MobileRegister/MobileRegister';
import Confirmation from './Registration/Confirmation/Confirmation';

export default function App() {
  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/register" />} />
      <Route path="/confirmed" component={Confirmation} />
      <Route path="/players" component={RegisteredPlayers} />
      <Route path="/draft" component={Draft} />
      {/* WEB */}
      <MediaQuery minDeviceWidth={1224}>
        {/* <Nav /> */}
        {/* <Route path='/draft' component={Draft} /> */}
        <Route path="/register" component={DesktopRegister} />
      </MediaQuery>

      {/* MOBILE */}
      <MediaQuery maxDeviceWidth={1224}>
        {/* <MobileNav /> */}
        <Route path="/register" component={MobileRegister} />
      </MediaQuery>
    </div>
  );
}
