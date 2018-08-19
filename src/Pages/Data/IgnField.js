import React from 'react'
import MediaQuery from 'react-responsive'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import validator from 'validator'

import BackIcon from '@material-ui/icons/ExpandLess'
import NextIcon from '@material-ui/icons/ExpandMore'

import '../MobileRegister.css'

export function ignValidator (event) {
  const defaultHelperText = [
    'Your IGN is at least 3 characters',
    'Looks good!'
  ]

  this.setState({
    ign: event.target.value
  }, () => {
    if (this.state.ign === '' || this.state.ign.length < 3) {
      this.setState(state =>
        ({ IGNHelperText: defaultHelperText[0], inputError: false, nextForm: false }))
    }
    if (this.state.ign.length > 16) {
      this.setState(state =>
        ({ IGNHelperText: 'Your IGN is longer than 16 characters', inputError: true, nextForm: false }))
    }
    if (!validator.matches(this.state.ign, /^[a-z0-9 ]+$/i) && this.state.ign !== '') {
      this.setState(state =>
        ({ IGNHelperText: 'Your IGN contains invalid character(s)', inputError: true, nextForm: false }))
    }
    if (this.state.ign.length >= 3 && this.state.ign.length <= 16 && validator.matches(this.state.ign, /^[a-z0-9 ]+$/i)) {
      this.setState(state =>
        ({ IGNHelperText: defaultHelperText[1], inputError: false, nextForm: true, reviewForm: true }))
    }
  })
}

export const IgnField = (props) => {
  const disableButton = props.ign === '' || props.ign.length < 3 || props.ign.length > 16 || !validator.matches(props.ign, /^[a-z0-9 ]+$/i)

  return (
    <div>
      <form onSubmit={props.nextStep}>
        <TextField
          autoFocus
          error={props.inputError}
          label='Summoner Name'
          placeholder='Imaqtpie'
          helperText={props.helperText}
          value={props.ign}
          onChange={props.handleChange}
          fullWidth
        />
      </form>
      <MediaQuery maxDeviceWidth={1224}>
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
            <span className='buttonLabel'>Next</span>
            <NextIcon />
          </Button>
        </div>
      </MediaQuery>
    </div>
  )
}
