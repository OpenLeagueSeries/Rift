import React, { Component } from 'react'

import { NameField, nameValidator } from './InputForms/NameField'
import { IgnField, ignValidator } from './InputForms/IgnField'
import { EmailField, emailValidator } from './InputForms/EmailField'
import { Request } from '../streamLib/stream'
import { Social } from '../Tiddlywinks/Social'
import { withRegisterLogic } from './RegistrationLogic'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import Snackbar from '@material-ui/core/Snackbar'
import CircularProgress from '@material-ui/core/CircularProgress'

import lolPittLogo from '../../src/assets/newestPittLogo.png'
import ResetIcon from '@material-ui/icons/Clear'
import SendIcon from '@material-ui/icons/Send'
import NameIcon from '@material-ui/icons/AccountCircle'
import IgnIcon from 'mdi-material-ui/GamepadVariant'
import EmailIcon from 'mdi-material-ui/Email'
import DoneIcon from '@material-ui/icons/Done'
import ErrorIcon from 'mdi-material-ui/Exclamation'
import BlankIcon from 'mdi-material-ui/Help'

import './DesktopRegister.css'

class DesktopRegister extends Component {
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
      inputEmailError: false,
      open: false,
      submitted: false,
      message: ''
    }))
    this.nameInputField.current.focus()
  }

  render() {
    const disableButton = this.state.name === '' || this.state.ign === '' || this.state.email === '' || this.state.inputNameError || this.state.inputIgnError || this.state.inputEmailError || this.state.NameHelperText !== 'Looks good!' || this.state.IGNHelperText !== 'Looks good!' || this.state.EmailHelperText !== 'Looks good!' || this.state.submitted

    return (
      <div className='desktopDisplay'>
        <div className='logoArea'>
          <img src={lolPittLogo} alt='lol@Pitt Logo' />
          <div className='caption'>
            Official OLS Registration 2018
          </div>
          <div className='join'>Join us at:</div>
            <Social />
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
                  focusField={this.nameInputField}
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
              <div className='buttonContainer'>
                <Button
                  onClick={this.handleReset}
                  color='secondary'>
                  <span className='buttonLabel'>Reset</span>
                  <ResetIcon className='resetIcon' />
                </Button>
                <div className='submitButton'>
                  { disableButton ?
                    <Tooltip title='Form is still incomplete!' open={this.state.open} onOpen={this.handleIncomplete} onClose={this.handleContinue} leaveDelay={500}>
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
                      onClick={this.handleSubmit}
                      color='primary'
                      variant='extendedFab'
                      disabled={disableButton}>
                      <span className='buttonLabel'>Send Email</span>
                      <SendIcon className='sendIcon' />
                    </Button>
                  }
                  {this.state.submitted && <CircularProgress className='loading'/>}
                </div>
              </div>
            </Paper>
          </div>
        </div>
        {this.state.message === 'This email has already been registered!' ?
          <Snackbar
            message={<div>{this.state.message}<br></br>We sent you another email!</div>}
            open={this.state.submitted}
            onClose={this.handleClose}
            autoHideDuration={3500}
          /> :
          <Snackbar
            message={this.state.message}
            open={this.state.submitted}
            onClose={this.handleClose}
            autoHideDuration={2500}
          />
        }
      </div>
    )
  }
}

export default DesktopRegister
