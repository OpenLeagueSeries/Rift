import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { unregister } from './registerServiceWorker'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import theme from './assets/muiTheme'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import UserProvider from './Contexts/UserContext'
const jss = create(jssPreset())
const generateClassName = createGenerateClassName()

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline>
            <App />
          </CssBaseline>
        </MuiThemeProvider>
      </JssProvider>
    </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
)
unregister()
