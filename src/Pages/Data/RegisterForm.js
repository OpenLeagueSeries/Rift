import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const rank = [
  { value: 'Bronze', label: 'Bronze' },
  { value: 'Silver', label: 'Silver' },
  { value: 'Gold', label: 'Gold' },
  { value: 'Platinum', label: 'Platinum' },
  { value: 'Diamond', label: 'Diamond' },
  { value: 'Master', label: 'Master' },
  { value: 'Challenger', label: 'Challenger' },
]

class RegisterForm extends Component {
  state = {
    name: '',
    ign: '',
    league: '',
    division: '',
    email: '',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render () {
    switch (this.props.step) {
      case 0:
        return <TextField label='Name IRL' placeholder='Michael Santana' helperText='Your first and last name here' value={ this.state.name } margin='normal' />
      case 1:
        return <TextField label='Summoner Name' placeholder='Imaqtpie' helperText='IGN' value={ this.state.ign } margin='normal'/>
      case 2:
        return (
          <form>
            <TextField select onChange={this.handleChange('rank')} label='Select' placeholder='Diamond' helperText='Rank'>
              {rank.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField select onChange={this.handleChange('rank')} label='Select' placeholder='Diamond' helperText='Rank'>
              {rank.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </form>
        )
      case 3:
        return (
          <form>
            <div>This email will be used to confirm your registration!</div>
            <TextField label='Email Address' placeholder='Imaqtpielol@gmail.com' helperText='Preferred Email' value={ this.state.email } margin='normal' />
          </form>
        )
      default:
        return 'Something went wrong with your registration D:'
    }
  }
}

export default RegisterForm
