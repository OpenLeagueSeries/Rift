import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import Nav from './Pages/Interface/Nav';
import MobileNav from './Pages/Interface/MobileNav';
import Home from './Pages/Home';
import Archive from './Pages/Archive';
import User from './Pages/User';
import Draft from './Draft/Draft';
import Register from './Pages/Register';

import './App.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#07a7af' },
    secondary: { main: '#c89b3c' }
  },
  overrides: {
    MuiBottomNavigation: {
      root: { backgroundColor: 'transparent' }
    },
    MuiBottomNavigationAction: {
      root: {
        '&$selected': { color: '#cdb87c' },
        backgroundColor: 'transparent'
      }
    },
    MuiPaper: {
      root: { backgroundColor: 'transparent' }
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div>
            {/* WEB */}
            <MediaQuery minDeviceWidth={1224}>
              <Nav />
            </MediaQuery>
            <Route path="/home" component={Home} />
            <Route path="/archive" component={Archive} />
            <Route path="/user" component={User} />
            <Route path="/draft" component={Draft} />
            <Route path="/register" component={Register} />
            <Route exact path="/" render={() => <Redirect to="/register" />} />

            {/* MOBILE */}
            <MediaQuery maxDeviceWidth={1224}>
              <MobileNav />
            </MediaQuery>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
