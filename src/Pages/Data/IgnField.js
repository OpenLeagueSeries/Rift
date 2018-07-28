import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import validator from 'validator'

import BackIcon from '@material-ui/icons/ExpandLess'
import NextIcon from '@material-ui/icons/ExpandMore'

import '../Pages.css'

const defaultHelperText = [
  'Your IGN is at least 3 characters',
  'Looks good!'
]

class IgnField extends Component {
  state = {
    ign: '',
    IGNhelperText: defaultHelperText[0],
    inputError: false
  }

  handleChange = event => {
    this.setState({
      ign: event.target.value
    }, () => {
      if (this.state.ign === '' || this.state.ign.length < 3) {
        this.setState(state =>
          ({ IGNhelperText: defaultHelperText[1], inputError: false }))
      }
      if (this.state.ign.length > 16) {
        this.setState(state =>
          ({ IGNhelperText: 'Your IGN is longer than 16 characters', inputError: true }))
      }
      if (!validator.matches(this.state.ign, /^[a-z0-9 ]+$/i) && this.state.ign !== '') {
        this.setState(state =>
          ({ IGNhelperText: 'Your IGN contains invalid character(s)', inputError: true }))
      }
      if (this.state.ign.length >= 3 && this.state.ign.length <= 16 && validator.matches(this.state.ign, /^[a-z0-9 ]+$/i)) {
        this.setState(state =>
          ({ IGNhelperText: defaultHelperText[1], inputError: false }))
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              error={this.state.inputError}
              label='Summoner Name'
              placeholder='Imaqtpie'
              helperText={this.state.IGNhelperText}
              value={this.state.ign}
              onChange={this.handleChange}
              fullWidth
            />
          </form>
        </Typography>
        <div className='actionsContainer'>
          <Button color='secondary' onClick={this.props.prevStep}>
            <BackIcon />
            <span className='buttonLabel'>Back</span>
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={this.props.nextStep}
            disabled={
              this.state.ign === '' ||
              this.state.ign.length < 3 ||
              this.state.ign.length > 16 ||
              !validator.matches(this.state.ign, /^[a-z0-9 ]+$/i)
            }
          >
            <span className='buttonLabel'>Next</span>
            <NextIcon />
          </Button>
        </div>
      </div>
    )
  }
}

export default IgnField
