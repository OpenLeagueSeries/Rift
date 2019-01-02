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
import TeamProvider from './Contexts/MyTeamContext'

import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const jss = create(jssPreset())
const generateClassName = createGenerateClassName()

ReactDOM.render(
  <DragDropContextProvider backend={HTML5Backend}>
    <UserProvider>
      <TeamProvider>
        <BrowserRouter>
          <JssProvider jss={jss} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme}>
              <CssBaseline>
                <App />
              </CssBaseline>
            </MuiThemeProvider>
          </JssProvider>
        </BrowserRouter>
      </TeamProvider>
    </UserProvider>
  </DragDropContextProvider>,
  document.getElementById('root')
)
unregister()
