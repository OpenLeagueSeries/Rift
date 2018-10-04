import React, { Component } from 'react'

import { Request } from '../streamLib/stream'
import { nameValidator } from './InputForms/NameField'
import { ignValidator } from './InputForms/IgnField'
import { emailValidator } from './InputForms/EmailField'

export const withRegisterLogic = (WrappedComponent) => {
  return class extends Component {
    state = {
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
      submitted: false,
      message: ''
    }

    constructor(props) {
      super(props)
      this.nameValidator = nameValidator.bind(this)
      this.ignValidator = ignValidator.bind(this)
      this.emailValidator = emailValidator.bind(this)
      this.nameInputField = React.createRef()
    }

    handleField = inputType => event => {
      switch (inputType) {
        case 'name':
          this.nameValidator(event)
          break
        case 'ign':
          this.ignValidator(event)
          break
        case 'email':
          this.emailValidator(event)
          break
        default:
          return null
      }
    }

    handleSubmit = (ev) => {
      ev.preventDefault()
      if (this.state.NameHelperText === 'Looks good!' && this.state.IGNHelperText === 'Looks good!' && this.state.EmailHelperText === 'Looks good!' && !this.state.submitted) {
        this.sendRegister()
      } else {
        this.handleIncomplete()
        setTimeout(this.handleContinue, 2500)
      }
    }

    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return
      }
      this.setState(state => ({
        submitted: false
      }))
      setTimeout(this.handleReset(), 2500)
    }

    sendRegister = () => {
      this.req = new Request('/register', {name: this.state.name, ign: this.state.ign, email: this.state.email}, (result) => {
        if (result.success) {
          this.setState(state => ({
            message: 'Check your email for a magic login link!', submitted: true
          }))
        } else {
          if (result.data === 'Email already exists') {
            this.setState(state => ({
              message: 'This email has already been registered!', submitted: true, inputEmailError: true, EmailHelperText: 'This email is already in our system!'
            }))
          }
          if (result.data === 'Server error') {
            this.setState(state => ({
              message: 'Something went wrong with the server D:', submitted: true
            }))
          }
        }
      })
    }

    handleIncomplete = () => {
      if (this.state.NameHelperText !== 'Looks good!' && this.state.inputNameError === false) {
        this.setState(state => ({
          inputNameError: true, open: true, NameHelperText: 'Check your name input!'
        }))
      }
      if (this.state.IGNHelperText !== 'Looks good!' && this.state.inputIgnError === false) {
        this.setState(state => ({
          inputIgnError: true, open: true, IGNHelperText: 'Check your IGN input!'
        }))
      }
      if (this.state.EmailHelperText !== 'Looks good!' && this.state.inputEmailError === false && this.state.message !== 'This email has already been registered!') {
        this.setState(state => ({
          inputEmailError: true, open: true, EmailHelperText: 'Check your email input!'
        }))
      }
    }

    handleContinue = () => {
      if (this.state.NameHelperText !== 'Looks good!' && this.state.inputNameError === true) {
        this.setState(state => ({
          inputNameError: false, open: false, NameHelperText: 'Your first and last name here'
        }))
      }
      if (this.state.IGNHelperText !== 'Looks good!' && this.state.inputIgnError === true) {
        this.setState(state => ({
          inputIgnError: false, open: false, IGNHelperText: 'Your IGN is at least 3 characters'
        }))
      }
      if (this.state.EmailHelperText !== 'Looks good!' && this.state.inputEmailError === true) {
        this.setState(state => ({
          inputEmailError: false, open: false, EmailHelperText: 'Preferred Email'
        }))
      }
    }

  }
}
