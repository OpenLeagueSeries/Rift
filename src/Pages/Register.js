import React, { Component } from 'react'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import RegisterForm from './Data/RegisterForm'

import lolPittLogo from '../../src/assets/banner.png'

import './Pages.css'

class Register extends Component {
  state = {
    activeStep: 0,
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

  handleReset = () => {
    this.setState(state => ({
      activeStep: 0
    }))
  }

  render () {
    const steps = [
      'Tell us your name!',
      'What is your summoner name?',
      'What is your current Elo?',
      'What is your email address?'
    ]
    const { activeStep } = this.state

    return (
      <div>
        <div className='main'>
          <img src={ lolPittLogo } alt='lol@Pitt Logo' />
        </div>
        <div className='registrationSteps'>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>
                      <RegisterForm step={ activeStep } />
                    </Typography>
                    <div className='actionsContainer'>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleNext}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              )
            })}
          </Stepper>
        </div>
        {activeStep === steps.length && (
          <Paper square elevation={0} className='CompletionDisplay'>
            <Typography>Successfully completed - Go check your email!</Typography>
            <Button onClick={this.handleReset}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    )
  }
}

export default Register
