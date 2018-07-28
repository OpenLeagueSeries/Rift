import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import validator from 'validator'

import BackIcon from '@material-ui/icons/ExpandLess'
import NextIcon from '@material-ui/icons/ExpandMore'

import '../Pages.css'

const defaultHelperText = [
  'Preferred Email',
  'Looks good!'
]

class EmailField extends Component {
  state = {
    email: '',
    EmailhelperText: defaultHelperText[0]
  }

  handleChange = event => {
    this.setState({
      email: event.target.value
    }, () => {
      if (this.state.email === '') {
        this.setState(state =>
          ({ EmailhelperText: defaultHelperText[0] }))
      }
      if (!validator.isEmail(this.state.email) && this.state.email !== '') {
        this.setState(state =>
          ({ EmailhelperText: 'Not a valid Email format' }))
      }
      if (this.state.email !== '' && validator.isEmail(this.state.email)) {
        this.setState(state =>
          ({ EmailhelperText: defaultHelperText[1] }))
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
            <div className='emailInfo'>
              This email will be used to confirm your
              registration!
            </div>
            <TextField
              error={this.state.inputError}
              label='Email Address'
              placeholder='Imaqtpielol@gmail.com'
              helperText={this.state.EmailhelperText}
              value={this.state.email}
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
              this.state.email === '' ||
              !validator.isEmail(this.state.email)
            }
          >
            <span className='buttonLabel'>Finish</span>
            <NextIcon />
          </Button>
        </div>
      </div>
    )
  }
}

export default EmailField
