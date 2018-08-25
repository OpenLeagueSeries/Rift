import React, { Component } from 'react'

import { NameField, nameValidator } from './Data/NameField'
import { IgnField, ignValidator } from './Data/IgnField'
import { EmailField, emailValidator } from './Data/EmailField'
import { Request } from '../streamLib/stream'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'

import lolPittLogo from '../../src/assets/newestPittLogo.png'
import ResetIcon from '@material-ui/icons/Clear'
import SendIcon from '@material-ui/icons/Send'
import NameIcon from '@material-ui/icons/AccountCircle'
import IgnIcon from 'mdi-material-ui/GamepadVariant'
import EmailIcon from 'mdi-material-ui/Email'
import DoneIcon from '@material-ui/icons/Done'
import ErrorIcon from 'mdi-material-ui/Exclamation'
import BlankIcon from 'mdi-material-ui/Help'
import FBIcon from 'mdi-material-ui/FacebookBox'
import DiscIcon from 'mdi-material-ui/Discord'

import './DesktopRegister.css'

class DesktopRegister extends Component {
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
    if (this.state.NameHelperText === 'Looks good!' && this.state.IGNHelperText === 'Looks good!' && this.state.EmailHelperText === 'Looks good!') {
      this.sendRegister()
    } else {
      this.handleIncomplete()
      setTimeout(this.handleContinue, 1000)
    }
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

  handleIncomplete = () => {
    if (this.state.NameHelperText !== 'Looks good!' && this.state.inputNameError === false) {
      this.setState(state => ({
        inputNameError: true
      }))
    }
    if (this.state.IGNHelperText !== 'Looks good!' && this.state.inputIgnError === false) {
      this.setState(state => ({
        inputIgnError: true
      }))
    }
    if (this.state.EmailHelperText !== 'Looks good!' && this.state.inputEmailError === false) {
      this.setState(state => ({
        inputEmailError: true
      }))
    }
  }

  handleContinue = () => {
    if (this.state.NameHelperText !== 'Looks good!' && this.state.inputNameError === true) {
      this.setState(state => ({
        inputNameError: false
      }))
    }
    if (this.state.IGNHelperText !== 'Looks good!' && this.state.inputIgnError === true) {
      this.setState(state => ({
        inputIgnError: false
      }))
    }
    if (this.state.EmailHelperText !== 'Looks good!' && this.state.inputEmailError === true) {
      this.setState(state => ({
        inputEmailError: false
      }))
    }
  }

  render() {
    const disableButton = this.state.name === '' || this.state.ign === '' || this.state.email === '' || this.state.inputNameError || this.state.inputIgnError || this.state.inputEmailError || this.state.NameHelperText !== 'Looks good!' || this.state.IGNHelperText !== 'Looks good!' || this.state.EmailHelperText !== 'Looks good!'

    return (
      <div className='desktopDisplay'>
        <div className='logoArea'>
          <img src={lolPittLogo} alt='lol@Pitt Logo' />
          <div className='caption'>
            Official Activities Fair Registration 2018
          </div>
          <div className='join'>Join us at:</div>
          <div className='social'>
              <div className='facebook'>
                <Tooltip title='Facebook'>
                  <a href='https://www.facebook.com/groups/LoLatPitt/' target='_blank' rel='noopener noreferrer'>
                    <FBIcon className='fbIcon'/>
                    <div className='FBinfo'>LoL@Pitt</div>
                  </a>
                </Tooltip>
              </div>
            <div className='teamspeak'>
              <Tooltip title='TeamSpeak'>
                <a href='https://www.teamspeak.com/en/downloads' target='_blank' rel='noopener noreferrer'>
                  <div className='TSlogo'></div>
                  <div className='TSinfo'>
                    <div>Server: pitt.lol</div>
                    <div>Password: pittlol</div>
                  </div>
                </a>
              </Tooltip>
            </div>
            <div className='discord'>
              <Tooltip title='Discord'>
                <a href='https://discord.gg/yZcPxav' target='_blank' rel='noopener noreferrer'>
                  <div className='DSlogo'><DiscIcon /></div>
                  <div className='DSinfo'>discord.gg/yZcPxav</div>
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className='formSide'>
          <div className='signUpForm'>
            <div className='inputContainer'>
              <div className='inputIcon'>
                <div className='iconType'><NameIcon /></div>
                { this.state.NameHelperText === 'Looks good!' ? <div className='inputStatus'><DoneIcon className='indicatorIcon'/></div>
                : this.state.inputNameError ? <div className='inputStatus'><ErrorIcon className='indicatorIcon'/></div>
                : <div className='inputStatus'><BlankIcon className='indicatorIcon'/></div> }
              </div>
              <div className='inputField'>
                <NameField
                  handleChange={this.handleField('name')}
                  name={this.state.name}
                  helperText={this.state.NameHelperText}
                  inputNameError={this.state.inputNameError}
                  nextStep={this.handleSubmit}
                />
              </div>
            </div>
            <div className='inputContainer'>
              <div className='inputIcon'>
                <div className='iconType'><IgnIcon /></div>
                { this.state.IGNHelperText === 'Looks good!' ? <div className='inputStatus'><DoneIcon className='indicatorIcon'/></div>
                : this.state.inputIgnError ? <div className='inputStatus'><ErrorIcon className='indicatorIcon'/></div>
                : <div className='inputStatus'><BlankIcon className='indicatorIcon'/></div> }
              </div>
              <div className='inputField'>
                <IgnField
                  handleChange={this.handleField('ign')}
                  ign={this.state.ign}
                  helperText={this.state.IGNHelperText}
                  inputIgnError={this.state.inputIgnError}
                  nextStep={this.handleSubmit}
                />
              </div>
            </div>
            <div className='inputContainer'>
              <div className='inputIcon'>
                <div className='iconType'><EmailIcon /></div>
                { this.state.EmailHelperText === 'Looks good!' ? <div className='inputStatus'><DoneIcon className='indicatorIcon'/></div>
                : this.state.inputEmailError ? <div className='inputStatus'><ErrorIcon className='indicatorIcon'/></div>
                : <div className='inputStatus'><BlankIcon className='indicatorIcon'/></div> }
              </div>
              <div className='inputField'>
                <EmailField
                  handleChange={this.handleField('email')}
                  email={this.state.email}
                  helperText={this.state.EmailHelperText}
                  inputEmailError={this.state.inputEmailError}
                  nextStep={this.handleSubmit}
                />
              </div>
            </div>
            <div className='textInfo'>
              This email will be used to confirm your
              registration!
            </div>
          </div>
          <div className='CompletionDisplay'>
            <Paper square elevation={0}>
              <div>
                <Button
                  onClick={this.handleReset}
                  color='secondary'
                  >
                  <span className='buttonLabel'>Reset</span>
                  <ResetIcon className='resetIcon' />
                </Button>
                { disableButton ?
                  <Tooltip title='Form is still incomplete!' onOpen={this.handleIncomplete} onClose={this.handleContinue} leaveDelay={500}>
                    <div>
                      <Button
                        className='sendEmail'
                        onClick={this.sendRegister}
                        color='primary'
                        variant='extendedFab'
                        disabled={disableButton}>
                        <span className='buttonLabel'>Send Email</span>
                        <SendIcon className='sendIcon' />
                      </Button>
                    </div>
                  </Tooltip> :
                  <Button
                    className='sendEmail'
                    onClick={this.sendRegister}
                    color='primary'
                    variant='extendedFab'
                    disabled={disableButton}>
                    <span className='buttonLabel'>Send Email</span>
                    <SendIcon className='sendIcon' />
                  </Button>
                }
              </div>
            </Paper>
          </div>
        </div>
      </div>
    )
  }
}

export default DesktopRegister
