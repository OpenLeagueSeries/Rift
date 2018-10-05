import React, { Component } from 'react'

import { NameField, nameValidator } from '../InputForms/NameField'
import { IgnField, ignValidator } from '../InputForms/IgnField'
import { EmailField, emailValidator } from '../InputForms/EmailField'
import { Social } from '../../Utility/Social'
import { CompletionDisplay } from './CompletionDisplay'
import { IconifyField } from './IconifyField'
import RegisterLogic from '../RegisterLogic'


import Snackbar from '@material-ui/core/Snackbar'

import lolPittLogo from '../../../src/assets/newestPittLogo.png'
import NameIcon from '@material-ui/icons/AccountCircle'
import IgnIcon from 'mdi-material-ui/GamepadVariant'
import EmailIcon from 'mdi-material-ui/Email'

import './DesktopRegister.css'

const EmailFieldWithIcon = IconifyField(EmailField, EmailIcon)
const NameFieldWithIcon = IconifyField(NameField, NameIcon)
const IgnFieldWithIcon = IconifyField(IgnField, IgnIcon)
class DesktopRegister extends Component {

  state = RegisterLogic.state

  constructor(props) {
    super(props)
    this.nameValidator = nameValidator.bind(this)
    this.ignValidator = ignValidator.bind(this)
    this.emailValidator = emailValidator.bind(this)
    this.nameInputField = React.createRef()
  }

  handleField = RegisterLogic.handleField(this)
  handleSubmit = RegisterLogic.handleSubmit(this)
  handleClose = RegisterLogic.handleClose(this)
  sendRegister = RegisterLogic.sendRegister(this)
  handleIncomplete = RegisterLogic.handleIncomplete(this)
  handleContinue = RegisterLogic.handleContinue(this)

  handleReset = () => {
    this.setState(state => RegisterLogic.state)
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
                <NameFieldWithIcon
                  focusField={this.nameInputField}
                  handleChange={this.handleField('name')}
                  name={this.state.name}
                  helperText={this.state.NameHelperText}
                  inputError={this.state.inputNameError}
                  nextStep={this.handleSubmit}
                />
                <IgnFieldWithIcon
                  handleChange={this.handleField('ign')}
                  ign={this.state.ign}
                  helperText={this.state.IGNHelperText}
                  inputError={this.state.inputIgnError}
                  nextStep={this.handleSubmit}
                />
                <EmailFieldWithIcon
                  handleChange={this.handleField('email')}
                  email={this.state.email}
                  helperText={this.state.EmailHelperText}
                  inputError={this.state.inputEmailError}
                  nextStep={this.handleSubmit}
                />
            <div className='textInfo'>
              This email will be used to confirm your
              registration!
            </div>
          </div>
          <CompletionDisplay
            handleReset={this.handleReset}
            handleIncomplete={this.handleIncomplete}
            handleContinue={this.handleContinue}
            disableButton={disableButton}
            open={this.state.open}
            sendRegister={this.sendRegister}
          />
        </div>
        <Snackbar
          message={<div>{this.state.message}<br />{this.state.message === 'This email has already been registered!' ? 'We sent you another email!' : ''}</div>}
          open={this.state.submitted}
          onClose={this.handleClose}
          autoHideDuration={3500}
        />
      </div>
    )
  }
}

export default DesktopRegister
