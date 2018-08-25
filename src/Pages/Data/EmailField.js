import React from 'react'
import MediaQuery from 'react-responsive'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import validator from 'validator'

import BackIcon from '@material-ui/icons/ExpandLess'
import NextIcon from '@material-ui/icons/ExpandMore'

import '../MobileRegister.css'

export function emailValidator (event) {
  const defaultHelperText = [
    'Preferred Email',
    'Looks good!'
  ]
  this.setState({
    email: event.target.value
  }, () => {
    if (this.state.email === '') {
      this.setState(state =>
        ({ EmailHelperText: defaultHelperText[0], inputEmailError: false, nextForm: false }))
    }
    if (!validator.isEmail(this.state.email) && this.state.email !== '') {
      this.setState(state =>
        ({ EmailHelperText: 'Not a valid Email format', inputEmailError: false, nextForm: false }))
    }
    if (this.state.email !== '' && validator.isEmail(this.state.email)) {
      this.setState(state =>
        ({ EmailHelperText: defaultHelperText[1], inputEmailError: false, nextForm: true, reviewForm: true }))
    }
  })
}

export const EmailField = (props) => {
  const disableButton = props.email === '' || !validator.isEmail(props.email)

  return (
    <div>
      <form onSubmit={props.nextStep}>
        <MediaQuery minDeviceWidth={1224}>
          <TextField
            error={props.inputEmailError}
            className='emailForm'
            label='Email Address'
            placeholder='Imaqtpielol@gmail.com'
            helperText={props.helperText}
            value={props.email}
            onChange={props.handleChange}
            fullWidth
          />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <div className='textInfo'>
            This email will be used to confirm your
            registration!
          </div>
          <TextField
            autoFocus
            className='emailForm'
            label='Email Address'
            placeholder='Imaqtpielol@gmail.com'
            helperText={props.helperText}
            value={props.email}
            onChange={props.handleChange}
            fullWidth
          />
        </MediaQuery>
      </form>
      <MediaQuery maxDeviceWidth={1224}>
        <div className='actionsContainer'>
          <Button color='secondary' onClick={props.prevStep} disabled={props.inputEmailError}>
            <BackIcon />
            <span className='buttonLabel'>Back</span>
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={props.nextStep}
            disabled={disableButton}
          >
            <span className='buttonLabel'>Finish</span>
            <NextIcon />
          </Button>
        </div>
      </MediaQuery>
    </div>
  )
}
