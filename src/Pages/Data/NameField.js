import React from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import validator from 'validator'

import BackIcon from '@material-ui/icons/ExpandLess'
import NextIcon from '@material-ui/icons/ExpandMore'

import '../Pages.css'


export function nameValidator (event) {
  const defaultHelperText = [
    'Your first and last name here',
    'Looks good!'
  ]
  this.setState({
    name: event.target.value
  }, () => {
    const NameSpace = this.state.name.split(' ')
    const NameRegEx = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

    if (this.state.name === '' || NameSpace[1] === '' || NameSpace.length - 1 === 0) {
      this.setState(state =>
        ({ NameHelperText: defaultHelperText[0], inputError: false }))
    }
    if (!validator.matches(this.state.name, NameRegEx) && this.state.name !== '') {
      this.setState(state =>
        ({ NameHelperText: 'Name contains invalid character(s)', inputError: true }))
    }
    if (this.state.name !== '' && NameSpace.length - 1 > 0 && NameSpace[1] !== '' && validator.matches(this.state.name, NameRegEx)) {
      const NameParts = this.state.name.split('-').map((NameToken) => NameToken.charAt(0).toUpperCase() + NameToken.slice(1)).join('-').split(' ').map((NameToken) => NameToken.charAt(0).toUpperCase() + NameToken.slice(1)).join(' ')
      this.setState(state =>
        ({ NameHelperText: defaultHelperText[1], name: NameParts, inputError: false }))
    }
  })
}

export const NameField = (props) => {
  const NameSpace = props.name.split(' ')
  const NameRegEx = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

  return (
    <div>
      <form onSubmit={props.nextStep}>
        <TextField
          error={props.inputError}
          className='nameForm'
          label='Name IRL'
          placeholder='Michael Santana'
          helperText={props.helperText}
          value={props.name}
          onChange={props.handleChange}
          fullWidth
        />
      </form>
      <div className='actionsContainer'>
        <Button className='disappear' disabled>
          <BackIcon />
          <span className='buttonLabel'>Back</span>
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={props.nextStep}
          disabled={
            props.name === '' ||
            NameSpace.length - 1 === 0 ||
            NameSpace[1] === '' ||
            !validator.matches(props.name, NameRegEx)
          }
        >
          <span className='buttonLabel'>Next</span>
          <NextIcon />
        </Button>
      </div>
    </div>
  )
}
