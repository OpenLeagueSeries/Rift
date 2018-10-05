import React, { Component } from 'react'

import { NameField, nameValidator } from '../InputForms/NameField'
import { IgnField, ignValidator } from '../InputForms/IgnField'
import { EmailField, emailValidator } from '../InputForms/EmailField'
import RegisterLogic from '../RegisterLogic'
import { CompletionDisplay } from './CompletionDisplay'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Snackbar from '@material-ui/core/Snackbar'
import CircularProgress from '@material-ui/core/CircularProgress'

import lolPittLogo from '../../../src/assets/newestPittLogo.png'
import RedoIcon from 'mdi-material-ui/RedoVariant'
import ResetIcon from '@material-ui/icons/Clear'
import SendIcon from '@material-ui/icons/Send'
import NameIcon from '@material-ui/icons/AccountCircle'
import IgnIcon from 'mdi-material-ui/GamepadVariant'
import EmailIcon from 'mdi-material-ui/Email'

import './MobileRegister.css'

class MobileRegister extends Component {
  state = {
    activeStep: 0,
    ...RegisterLogic.state
  }

  constructor(props) {
    super(props)
    this.nameValidator = nameValidator.bind(this)
    this.ignValidator = ignValidator.bind(this)
    this.emailValidator = emailValidator.bind(this)
  }

  handleField = RegisterLogic.handleField(this)
  handleSubmit = RegisterLogic.handleSubmit(this)
  handleClose = RegisterLogic.handleClose(this)
  sendRegister = RegisterLogic.sendRegister(this)
  handleIncomplete = RegisterLogic.handleIncomplete(this)
  handleContinue = RegisterLogic.handleContinue(this)

  handleNext = (ev) => {
    ev.preventDefault()
    if (this.state.activeStep === 0 && this.state.NameHelperText === 'Looks good!') {
      this.setState(state => ({
        activeStep: 1
      }))
    } else if (this.state.activeStep === 1 && this.state.IGNHelperText === 'Looks good!') {
      this.setState(state => ({
        activeStep: 2
      }))
    } else if (this.state.activeStep === 2 && this.state.EmailHelperText === 'Looks good!') {
      this.setState(state => ({
        activeStep: 3
      }))
    }
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }))
  }

  handleReview = () => {
    this.setState(state => ({
      activeStep: 0
    }))
  }

  handleReset = () => {
    this.setState(state => ({
      activeStep: 0,
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
      message: ''
    }))
  }

  render() {
    const steps = [
      'Tell us your name!',
      'What is your summoner name?',
      'What is your email address?'
    ]
    const { activeStep } = this.state

    return (
      <div className='registerDisplay'>
        <div className='main'>
          <img src={lolPittLogo} alt='lol@Pitt Logo' />
        </div>
        <div className='registrationSteps'>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((label, index) => {
              let inner = {}
              let userInfo = {}
              switch (index) {
                case 0:
                  inner = (
                    <NameField
                      handleChange={this.handleField('name')}
                      name={this.state.name}
                      helperText={this.state.NameHelperText}
                      inputNameError={this.state.inputNameError}
                      nextStep={this.handleNext}
                      nextForm={this.state.nextForm}
                    />
                  )
                  userInfo.optional = <div className='userInfo'><NameIcon className='fieldIcon' />{this.state.name}</div>
                  break;
                case 1:
                  inner = (
                    <IgnField
                      handleChange={this.handleField('ign')}
                      ign={this.state.ign}
                      helperText={this.state.IGNHelperText}
                      inputIgnError={this.state.inputIgnError}
                      nextStep={this.handleNext}
                      prevStep={this.handleBack}
                      nextForm={this.state.nextForm}
                    />
                  )
                  userInfo.optional = <div className='userInfo'><IgnIcon className='fieldIcon' />{this.state.ign}</div>
                  break;
                case 2:
                  inner = (
                    <EmailField
                      handleChange={this.handleField('email')}
                      email={this.state.email}
                      helperText={this.state.EmailHelperText}
                      inputEmailError={this.state.inputEmailError}
                      nextStep={this.handleNext}
                      prevStep={this.handleBack}
                      nextForm={this.state.nextForm}
                    />
                  )
                  userInfo.optional = <div className='userInfo'><EmailIcon className='fieldIcon' />{this.state.email}</div>
                  break;
                default:
                  return 'Something went wrong with your registration D:'
              }
              return (
                <Step key={label}>
                  <StepLabel {...userInfo}>{label}</StepLabel>
                  <StepContent>
                    {inner}
                  </StepContent>
                </Step>
              )
            })}
          </Stepper>
        </div>
        {activeStep === steps.length && (
          <CompletionDisplay
            handleReview={this.handleReview}
            handleReset={this.handleReset}
            open={this.state.open}
            sendRegister={this.sendRegister}
          />
        )}
          <Snackbar
            message={<div>{this.state.message}<br />{this.state.message === 'This email has already been registered!' ? 'We sent you another email!' : ''}</div>}
            open={this.state.open}
            onClose={this.handleClose}
            autoHideDuration={3500}
          />
      </div>
    )
  }
}

export default MobileRegister
