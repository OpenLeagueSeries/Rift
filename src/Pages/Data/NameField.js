import React, { Component } from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import validator from 'validator'

import BackIcon from '@material-ui/icons/ExpandLess'
import NextIcon from '@material-ui/icons/ExpandMore'

import '../Pages.css'

const defaultHelperText = [
  'Your first and last name here',
  'Looks good!'
]

class NameField extends Component {
  state = {
    name: '',
    NamehelperText: defaultHelperText[0],
    inputError: false
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    }, () => {
      const NameSpace = this.state.name.split(' ')
      const NameRegEx = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

      if (this.state.name === '' || NameSpace[1] === '' || NameSpace.length - 1 === 0) {
        this.setState(state =>
          ({ NamehelperText: defaultHelperText[0], inputError: false }))
      }
      if (!validator.matches(this.state.name, NameRegEx) && this.state.name !== '') {
        this.setState(state =>
          ({ NamehelperText: 'Name contains invalid character(s)', inputError: true }))
      }
      if (this.state.name !== '' && NameSpace.length - 1 > 0 && NameSpace[1] !== '' && validator.matches(this.state.name, NameRegEx)) {
        const NameParts = this.state.name.split('-').map((NameToken) => NameToken.charAt(0).toUpperCase() + NameToken.slice(1)).join('-').split(' ').map((NameToken) => NameToken.charAt(0).toUpperCase() + NameToken.slice(1)).join(' ')
        this.setState(state =>
          ({ NamehelperText: defaultHelperText[1], name: NameParts, inputError: false }))
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    const NameSpace = this.state.name.split(' ')
    const NameRegEx = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

    return (
      <div>
        <Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              error={this.state.inputError}
              className='nameForm'
              label='Name IRL'
              placeholder='Michael Santana'
              helperText={this.state.NamehelperText}
              value={this.state.name}
              onChange={this.handleChange}
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
            onClick={this.props.handleName(this.state.name)}
            disabled={
              this.state.name === '' ||
              NameSpace.length - 1 === 0 ||
              NameSpace[1] === '' ||
              !validator.matches(this.state.name, NameRegEx)
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

export default NameField
