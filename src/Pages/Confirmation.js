import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

import Paper from '@material-ui/core/Paper'

import Yeahyeah from '../../src/assets/yeah-yeah.gif'
import Cookie from '../../src/assets/cookie.png'

import './confirm.css'

class Home extends Component {
  render () {
    return (
      <div className='confirmationDisplay'>
        <MediaQuery minDeviceWidth={1224}>
          <div className='desktopConfirm'>
            <Paper className='confirmMessage' elevation={0}>
              <div>
                <h1>Congratulations!</h1>
                <h3>Your email was succesfully confirmed!</h3>
                <h4>Click the cookie to see who's all registered!</h4>
              </div>
              <div className='NGE'>
                <div className='shinji'><img src={Yeahyeah} alt='yeah: {yeah}' /></div>
                <Link to='/players' className='cookie'><img src={Cookie} alt='OMMNOMNOMNOMNOMNOMNOM' /></Link>
              </div>
              <div className='caption'>
                <p>A cookie with your information was placed locally in your browser!</p>
                <p>Please feel free to reuse the email link</p>
                <p>OR</p>
                <p>Re-register with the same email address to log in from other browsers!</p>
              </div>
            </Paper>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={1224}>
          <div className='mobileConfirm'>
            <Paper className='confirmMessage' elevation={1}>
              <div>
                <h1>Congratulations!</h1>
                <h3>Your email was succesfully confirmed!</h3>
                <h4>Click the cookie to see who's all registered!</h4>
              </div>
              <div className='NGE'>
                <div className='shinji'><img src={Yeahyeah} alt='yeah: {yeah}' /></div>
                <Link to='/players' className='cookie'><img src={Cookie} alt='OMMNOMNOMNOMNOMNOMNOM' /></Link>
              </div>
              <div className='caption'>
                <p>A cookie with your information was placed locally in your browser!</p>
                <p>Please feel free to reuse the email link</p>
                <p>OR</p>
                <p>Re-register with the same email address to log in from other browsers!</p>
              </div>
            </Paper>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Home
