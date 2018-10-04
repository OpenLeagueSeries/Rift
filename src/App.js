import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import MediaQuery from 'react-responsive'

// import Nav from './Routes/Interface/Nav'
// import MobileNav from './Routes/Interface/MobileNav'
// import Draft from './Draft/Draft'
import { Subscription } from './streamLib/stream'
import RegisteredPlayers from './PreDraft/RegisteredPlayers'
import DesktopRegister from './Registration/DesktopRegister'
import MobileRegister from './Registration/MobileRegister'
import Confirmation from './Registration/Confirmation/Confirmation'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'

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

const generateClassName = createGenerateClassName()
const jss = create(jssPreset())

export const UserContext = React.createContext({_key:''})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {me: {_key: ''}}
  }

  componentDidMount() {
    this.subscription = new Subscription('/me',
    (info) => {
      this.setState({
        me: info
      })
    })
  }

  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <UserContext.Provider value={this.state.me}>
          <BrowserRouter>
            <div>
              <Route exact path='/' render={() => <Redirect to="/register" /> } />
              <Route path='/confirmed' component={Confirmation} />
              <Route path='/players' component={RegisteredPlayers} />
              {/* WEB */}
              <MediaQuery minDeviceWidth={1224}>
                {/* <Nav /> */}
                {/* <Route path='/draft' component={Draft} /> */}
                <Route path='/register' component={DesktopRegister} />
              </MediaQuery>

              {/* MOBILE */}
              <MediaQuery maxDeviceWidth={1224}>
                {/* <MobileNav /> */}
                <Route path='/register' component={MobileRegister} />
              </MediaQuery>
            </div>
          </BrowserRouter>
          </UserContext.Provider>
        </MuiThemeProvider>
      </JssProvider>
    )
  }
}

export default App
