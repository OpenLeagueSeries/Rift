import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import MediaQuery from 'react-responsive'

import Nav from './Routes/Interface/Nav'
// import MobileNav from './Routes/Interface/MobileNav'
// import Draft from './Draft/Draft'
import RegisteredPlayers from './Routes/RegisteredPlayers'
import DesktopRegister from './Routes/DesktopRegister'
import MobileRegister from './Routes/MobileRegister'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import './App.css'

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
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: '#cdb87c',
        padding: '0 24px'
      }
    }
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div>
            <Route exact path='/' render={() => <Redirect to="/register" /> } />
            {/* WEB */}
            <MediaQuery minDeviceWidth={1224}>
              <div className='navigationBar'><Nav /></div>
              {/* <Route path='/draft' component={Draft} /> */}
              <Route path='/players' component={RegisteredPlayers} />
              <Route path='/register' component={DesktopRegister} />
            </MediaQuery>

            {/* MOBILE */}
            <MediaQuery maxDeviceWidth={1224}>
              {/* <MobileNav /> */}
              <Route path='/register' component={MobileRegister} />
            </MediaQuery>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
