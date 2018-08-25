import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import MediaQuery from 'react-responsive';

// import Nav from './Pages/Interface/Nav'
// import MobileNav from './Pages/Interface/MobileNav'
import Home from './Pages/Home';
import Archive from './Pages/Archive';
import User from './Pages/User';
import Draft from './Draft/Draft';
import Register from './Pages/Register';
import RegisterSteps from './Pages/RegisterSteps';
import RegisteredUsers from './Pages/RegisteredUsers';

import './App.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#cdb87c' },
    secondary: { main: '#c89b3c' }
  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        background: 'linear-gradient(#17252E, #0E171E)',
        width: '100%',
        borderTop: '1px solid #a47c41'
      }
    },
    MuiBottomNavigationAction: {
      root: {
        '&$selected': { color: '#c89b3c' },
        paddingTop: '10px'
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
            <Route exact path="/" render={() => <Redirect to="/register" />} />
            <MediaQuery minDeviceWidth={1224}>
              {/* <Nav /> */}
              <Route path="/home" component={Home} />
              <Route path="/archive" component={Archive} />
              <Route path="/user" component={User} />
              <Route path="/draft" component={Draft} />
              <Route path="/register" component={Register} />
              <Route path="/registeredUsers" component={RegisteredUsers} />
            </MediaQuery>

            {/* MOBILE */}
            <MediaQuery maxDeviceWidth={1224}>
              {/* <MobileNav /> */}
              <Route path="/register" component={RegisterSteps} />
            </MediaQuery>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
