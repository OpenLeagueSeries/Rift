import React, { Component } from 'react'

import NameField from './Data/NameField'
import IgnField from './Data/IgnField'
import EmailField from './Data/EmailField'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import validator from 'validator'

import lolPittLogo from '../../src/assets/newestPittLogo.png'
import RedoIcon from 'mdi-material-ui/RedoVariant'
import SendIcon from '@material-ui/icons/Send'
import FadeIn from 'react-fade-in'

import './Pages.css'

class Register extends Component {
  state = {
    activeStep: 0,
    name: '',
    ign: '',
    email: ''
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }))
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }))
  }

  handleField = inputType => event => {
    this.setState({
      [inputType]: event.target.value
    })
  }

  handleReset = () => {
    this.setState(state => ({
      activeStep: 0
    }))
  }

  handleSubmit = event => {
    event.preventDefault()
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
        <FadeIn transitionDuration='500'>
        <div className='main'>
          <img src={lolPittLogo} alt='lol@Pitt Logo' />
        </div>
        </FadeIn>
        <FadeIn transitionDuration='500' delay='1000'>
        <div className='registrationSteps'>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((label, index) => {
              switch (index) {
                case 0:
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <NameField handleName={this.handleField} />
                      </StepContent>
                    </Step>
                  )
                case 1:
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <IgnField nextStep={this.handleNext} prevStep={this.handleBack} />
                      </StepContent>
                    </Step>
                  )
                case 2:
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <EmailField nextStep={this.handleNext} prevStep={this.handleBack} />
                      </StepContent>
                    </Step>
                  )
                default:
                  return 'Something went wrong with your registration D:'
              }
            })}
          </Stepper>
        </div>
      </FadeIn>
        {activeStep === steps.length && (
          <Paper square elevation={0} className='CompletionDisplay'>
            <div>
              <Typography>
                <div className='doneInfo'>Successfully completed -</div>
                <div className='doneInfo'>Click to send your confirmation email!</div>
              </Typography>
              <Button
                className='reviewInfo'
                onClick={this.handleReset}
                color='secondary'
              >
                <RedoIcon className='redoIcon' />
                <span className='buttonLabel'>Review Information</span>
              </Button>
              <Button
                className='sendEmail'
                onClick={this.handleReset}
                color='primary'
                variant='extendedFab'
              >
                <span className='buttonLabel'>Send Email</span>
                <SendIcon className='sendIcon' />
              </Button>
            </div>
          </Paper>
        )}
      </div>
    )
  }
}

export default Register
