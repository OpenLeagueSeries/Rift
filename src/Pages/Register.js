import React, { Component } from 'react'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import validator from 'validator'

import lolPittLogo from '../../src/assets/banner.png'
import BackIcon from '@material-ui/icons/ExpandLess'
import NextIcon from '@material-ui/icons/ExpandMore'
import RedoIcon from 'mdi-material-ui/RedoVariant'
import SendIcon from '@material-ui/icons/Send'
import FadeIn from 'react-fade-in'

import './Pages.css'

const defaultHelperText = [
  'Your first and last name here',
  'Your IGN is at least 3 characters',
  'Preferred Email',
  'Looks good!'
]

class Register extends Component {
  state = {
    activeStep: 0,
    name: '',
    ign: '',
    email: '',
    NamehelperText: defaultHelperText[0],
    IGNhelperText: defaultHelperText[1],
    EmailhelperText: defaultHelperText[2]
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

  handleChange = inputType => event => {
    this.setState({
      [inputType]: event.target.value
    }, () => {
      const NameSpace = this.state.name.split(' ')
      const NameRegEx = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

      if (this.state.name === '' || NameSpace[1] === '' || NameSpace.length - 1 === 0) {
        this.setState(state =>
          ({ NamehelperText: defaultHelperText[0] }))
      }
      if (!validator.matches(this.state.name, NameRegEx) && this.state.name !== '') {
        this.setState(state =>
          ({ NamehelperText: 'Name contains invalid character(s)' }))
      }
      if (this.state.name !== '' && NameSpace.length - 1 > 0 && NameSpace[1] !== '' && validator.matches(this.state.name, NameRegEx)) {
        const NameParts = this.state.name.split('-').map((NameToken) => NameToken.charAt(0).toUpperCase() + NameToken.slice(1)).join('-').split(' ').map((NameToken) => NameToken.charAt(0).toUpperCase() + NameToken.slice(1))
        this.setState(state =>
          ({ NamehelperText: defaultHelperText[3], name: NameParts.join(' ') }))
      }

      if (this.state.ign === '' || this.state.ign.length < 3) {
        this.setState(state =>
          ({ IGNhelperText: defaultHelperText[1] }))
      }
      if (this.state.ign.length > 16) {
        this.setState(state =>
          ({ IGNhelperText: 'Your IGN is longer than 16 characters' }))
      }
      if (!validator.matches(this.state.ign, /^[a-z0-9 ]+$/i) && this.state.ign !== '') {
        this.setState(state =>
          ({ IGNhelperText: 'Your IGN contains invalid character(s)' }))
      }
      if (this.state.ign.length >= 3 && this.state.ign.length <= 16 && validator.matches(this.state.ign, /^[a-z0-9 ]+$/i)) {
        this.setState(state =>
          ({ IGNhelperText: defaultHelperText[3] }))
      }

      if (this.state.email === '') {
        this.setState(state =>
          ({ EmailhelperText: defaultHelperText[2] }))
      }
      if (!validator.isEmail(this.state.email) && this.state.email !== '') {
        this.setState(state =>
          ({ EmailhelperText: 'Not a valid Email format' }))
      }
      if (this.state.email !== '' && validator.isEmail(this.state.email)) {
        this.setState(state =>
          ({ EmailhelperText: defaultHelperText[3] }))
      }
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
    const NameSpace = this.state.name.split(' ')
    const NameRegEx = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

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
                        <Typography>
                          <form onSubmit={this.handleSubmit}>
                            <TextField
                              className='nameForm'
                              label='Name IRL'
                              placeholder='Michael Santana'
                              helperText={this.state.NamehelperText}
                              value={this.state.name}
                              onChange={this.handleChange('name')}
                              fullWidth
                            />
                          </form>
                        </Typography>
                        <div className='actionsContainer'>
                          <Button className='disappear' disabled>
                            <BackIcon />
                            <span className='buttonLabel'>Back</span>
                          </Button>
                          <Button
                            variant='contained'
                            color='primary'
                            onClick={this.handleNext}
                            disabled={
                              this.state.name === '' ||
                              NameSpace.length - 1 === 0 ||
                              NameSpace[1] === '' ||
                              !validator.matches(this.state.name, NameRegEx)
                            }
                          >
                            <span className='buttonLabel'>
                              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </span>
                            <NextIcon />
                          </Button>
                        </div>
                      </StepContent>
                    </Step>
                  )
                case 1:
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <Typography>
                          <form onSubmit={this.handleSubmit}>
                            <TextField
                              label='Summoner Name'
                              placeholder='Imaqtpie'
                              helperText={this.state.IGNhelperText}
                              value={this.state.ign}
                              onChange={this.handleChange('ign')}
                              fullWidth
                            />
                          </form>
                        </Typography>
                        <div className='actionsContainer'>
                          <Button color='secondary' onClick={this.handleBack}>
                            <BackIcon />
                            <span className='buttonLabel'>Back</span>
                          </Button>
                          <Button
                            variant='contained'
                            color='primary'
                            onClick={this.handleNext}
                            disabled={
                              this.state.ign === '' ||
                              this.state.ign.length < 3 ||
                              this.state.ign.length > 16 ||
                              !validator.matches(this.state.ign, /^[a-z0-9 ]+$/i)
                            }
                          >
                            <span className='buttonLabel'>
                              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </span>
                            <NextIcon />
                          </Button>
                        </div>
                      </StepContent>
                    </Step>
                  )
                case 2:
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <Typography>
                          <form onSubmit={this.handleSubmit}>
                            <div className='emailInfo'>
                              This email will be used to confirm your
                              registration!
                            </div>
                            <TextField
                              label='Email Address'
                              placeholder='Imaqtpielol@gmail.com'
                              helperText={this.state.EmailhelperText}
                              value={this.state.email}
                              onChange={this.handleChange('email')}
                              fullWidth
                            />
                          </form>
                        </Typography>
                        <div className='actionsContainer'>
                          <Button color='secondary' onClick={this.handleBack}>
                            <BackIcon />
                            <span className='buttonLabel'>Back</span>
                          </Button>
                          <Button
                            variant='contained'
                            color='primary'
                            onClick={this.handleNext}
                            disabled={
                              this.state.email === '' ||
                              !validator.isEmail(this.state.email)
                            }
                          >
                            <span className='buttonLabel'>
                              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </span>
                            <NextIcon />
                          </Button>
                        </div>
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
