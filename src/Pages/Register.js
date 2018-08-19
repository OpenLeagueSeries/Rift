import React, { Component } from 'react'

import { NameField, nameValidator } from './Data/NameField'
import { IgnField, ignValidator } from './Data/IgnField'
import { EmailField, emailValidator } from './Data/EmailField'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import lolPittLogo from '../../src/assets/newestPittLogo.png'
import ResetIcon from '@material-ui/icons/Clear'
import SendIcon from '@material-ui/icons/Send'

import './DesktopRegister.css'

class Register extends Component {
  state = {
    name: '',
    NameHelperText: 'Your first and last name here',
    ign: '',
    IGNHelperText: 'Your IGN is at least 3 characters',
    email: '',
    EmailHelperText: 'Preferred Email',
    inputNameError: false,
    inputIgnError: false,
    inputEmailError: false
  }

  constructor(props) {
    super(props)
    this.nameValidator = nameValidator.bind(this)
    this.ignValidator = ignValidator.bind(this)
    this.emailValidator = emailValidator.bind(this)
  }

  handleField = inputType => event => {
    switch (inputType) {
      case 'name':
        this.nameValidator(event)
        break
      case 'ign':
        this.ignValidator(event)
        break
      case 'email':
        this.emailValidator(event)
        break
      default:
        return null
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
  }

  handleReset = () => {
    this.setState(state => ({
      name: '',
      NameHelperText: 'Your first and last name here',
      ign: '',
      IGNHelperText: 'Your IGN is at least 3 characters',
      email: '',
      EmailHelperText: 'Preferred Email',
      inputNameError: false,
      inputIgnError: false,
      inputEmailError: false
    }))
  }

  sendRegister = () => {
    this.req = new Request('/register', {name: this.state.name, ign: this.state.ign, email: this.state.email}, (res) => {
      console.log('User information was sent!');
    })
  }

  render() {
    const disableButton = this.state.name === '' || this.state.ign === '' || this.state.email === '' || this.state.inputNameError || this.state.inputIgnError || this.state.inputEmailError

    return (
      <div className='desktopDisplay'>
        <div className='logoArea'>
          <img src={lolPittLogo} alt='lol@Pitt Logo' />
        </div>
        <div className='signUpForm'>
          <NameField
            handleChange={this.handleField('name')}
            name={this.state.name}
            helperText={this.state.NameHelperText}
            inputNameError={this.state.inputNameError}
            nextStep={this.handleSubmit}
          />
          <IgnField
            handleChange={this.handleField('ign')}
            ign={this.state.ign}
            helperText={this.state.IGNHelperText}
            inputIgnError={this.state.inputIgnError}
            nextStep={this.handleSubmit}
          />
          <EmailField
            handleChange={this.handleField('email')}
            email={this.state.email}
            helperText={this.state.EmailHelperText}
            inputEmailError={this.state.inputEmailError}
            nextStep={this.handleSubmit}
          />
        </div>
        <Paper square elevation={0} className='CompletionDisplay'>
          <div>
            <div className='textInfo'>Successfully completed -</div>
            <div className='textInfo'>Click to send your confirmation email!</div>
            <Button
              onClick={this.handleReset}
              color='secondary'
            >
              <span className='buttonLabel'>Reset</span>
              <ResetIcon className='resetIcon' />
            </Button>
            <Button
              className='sendEmail'
              onClick={this.sendRegister}
              color='primary'
              variant='extendedFab'
              disabled={disableButton}
            >
              <span className='buttonLabel'>Send Email</span>
              <SendIcon className='sendIcon' />
            </Button>
          </div>
        </Paper>
      </div>
    )
  }
}

export default Register
