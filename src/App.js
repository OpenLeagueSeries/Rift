import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Archive from './Pages/Archive'
import User from './Pages/User'
import Draft from './Draft/Draft'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Home} />
          <Route path='/archive' component={Archive} />
          <Route path='/user' component={User} />
          <Route path='/draft' component={Draft} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
