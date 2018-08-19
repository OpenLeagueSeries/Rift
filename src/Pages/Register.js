import React, { Component } from 'react'

import { NameField, nameValidator } from './Data/NameField'
import { IgnField, ignValidator } from './Data/IgnField'
import { EmailField, emailValidator } from './Data/EmailField'

import lolPittLogo from '../../src/assets/newestPittLogo.png'

import './DesktopRegister.css'

class Register extends Component {
  state = {
    name: '',
    NameHelperText: 'Your first and last name here',
    ign: '',
    IGNHelperText: 'Your IGN is at least 3 characters',
    email: '',
    EmailHelperText: 'Preferred Email',
    inputError: false
  }

  constructor(props) {
    super(props)
    this.nameValidator = nameValidator.bind(this)
    this.ignValidator = ignValidator.bind(this)
    this.emailValidator = emailValidator.bind(this)
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

  render() {
    return (
      <div className='desktopDisplay'>
        <div className='logoArea'>
          <img src={lolPittLogo} alt='lol@Pitt Logo' />
        </div>
        <div className='signUpForm'>
          <NameField
            handleChange={this.handleField('name')}
            name={this.state.name}
            helperText={this.state.NameHelperText}
            inputError={this.state.inputError}
          />
          <IgnField
            handleChange={this.handleField('ign')}
            ign={this.state.ign}
            helperText={this.state.IGNHelperText}
            inputError={this.state.inputError}
          />
          <EmailField
            handleChange={this.handleField('email')}
            email={this.state.email}
            helperText={this.state.EmailHelperText}
            inputError={this.state.inputError}
          />
        </div>
      </div>
    )
  }
}

export default Register
