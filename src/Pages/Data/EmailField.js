import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import validator from 'validator'

import BackIcon from '@material-ui/icons/ExpandLess'
import NextIcon from '@material-ui/icons/ExpandMore'

import '../Pages.css'

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
        ({ EmailHelperText: defaultHelperText[0], inputError: false, nextForm: false }))
    }
    if (!validator.isEmail(this.state.email) && this.state.email !== '') {
      this.setState(state =>
        ({ EmailHelperText: 'Not a valid Email format', inputError: true, nextForm: false }))
    }
    if (this.state.email !== '' && validator.isEmail(this.state.email)) {
      this.setState(state =>
        ({ EmailHelperText: defaultHelperText[1], inputError: false, nextForm: true, reviewForm: true }))
    }
  })
}

export const EmailField = (props) => {
  const disableButton = props.email === '' || !validator.isEmail(props.email)

  return (
    <div>
      <form onSubmit={props.nextStep}>
        <div className='textInfo'>
          This email will be used to confirm your
          registration!
        </div>
        <TextField
          autoFocus
          label='Email Address'
          placeholder='Imaqtpielol@gmail.com'
          helperText={props.helperText}
          value={props.email}
          onChange={props.handleChange}
          fullWidth
        />
      </form>
      <div className='actionsContainer'>
        <Button color='secondary' onClick={props.prevStep} disabled={props.inputError}>
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
    </div>
  )
}
