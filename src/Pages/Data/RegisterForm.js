import React, { Component } from 'react'

class RegisterForm extends Component {
  state = {
    name: '',
    ign: '',
    league: '',
    division: '',
    email: '',
  }
}
export function registerContent (step) {
  switch (step) {
    case 0:
      return <TextField label='Name IRL' placeholder='Michael Santana' helperText='Your first and last name here' margin='normal' />
    case 1:
      return <TextField label='Summoner Name' placeholder='Imaqtpie' helperText='IGN' margin='normal'/>
    case 2:
      return (
        <form>
          <TextField label='League' margin='normal' />
        </form>
      )
    case 3:
      return (
        <form>
          <div>This email will be used to confirm your registration!</div>
          <TextField label='Email Address' placeholder='Imaqtpielol@gmail.com' helperText='Preferred Email' margin='normal' />
        </form>
      )
    default:
      return 'Something went wrong with your registration D:'
  }
}
