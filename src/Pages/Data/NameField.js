import React from 'react'
import MediaQuery from 'react-responsive'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import validator from 'validator'

import BackIcon from '@material-ui/icons/ExpandLess'
import NextIcon from '@material-ui/icons/ExpandMore'

import '../MobileRegister.css'

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
        ({ NameHelperText: defaultHelperText[0], inputNameError: false, nextForm: false }))
    }
    if (!validator.matches(this.state.name, NameRegEx) && this.state.name !== '') {
      this.setState(state =>
        ({ NameHelperText: 'Name contains invalid character(s)', inputNameError: true, nextForm: false }))
    }
    if (validator.matches(this.state.name, /[ ]{2,}/)) {
      this.setState(state =>
        ({ NameHelperText: 'Name contains multiple spaces', inputNameError: true, nextForm: false }))
    }
    if (this.state.name.charAt(0) === ' ') {
      this.setState(state =>
        ({ NameHelperText: 'Name begins with a space', inputNameError: true, nextForm: false }))
    }
    if (this.state.name !== '' && NameSpace.length - 1 > 0 && NameSpace[1] !== '' && validator.matches(this.state.name, NameRegEx) && this.state.name.charAt(0) !== ' ') {
      const NameParts = this.state.name.split("'").map((NameToken) => NameToken.charAt(0).toUpperCase() + NameToken.slice(1)).join("'").split('-').map((NameToken) => NameToken.charAt(0).toUpperCase() + NameToken.slice(1)).join('-').split(' ').map((NameToken) => NameToken.charAt(0).toUpperCase() + NameToken.slice(1)).join(' ')
      if (NameSpace[NameSpace.length-1] === '') {
        this.setState(state =>
          ({ NameHelperText: 'Name ends with space(s)', inputNameError: true, nextForm: false }))
      } else {
        this.setState(state =>
          ({ NameHelperText: defaultHelperText[1], name: NameParts.replace(/  +/g, ' '), inputNameError: false, nextForm: true, reviewForm: true }))
      }
    }
  })
}

export const NameField = (props) => {
  const NameSpace = props.name.split(' ')
  const NameRegEx = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
  const disableButton = props.name === '' || NameSpace[NameSpace.length-1] === '' || NameSpace.length - 1 === 0 || !validator.matches(props.name, NameRegEx) || validator.matches(props.name, /[ ]{2,}/) || props.name.charAt(0) === ' '

  return (
    <div>
      <form onSubmit={props.nextStep}>
        <TextField
          autoFocus
          error={props.inputNameError}
          className='nameForm'
          label='Name IRL'
          placeholder='Michael Santana'
          helperText={props.helperText}
          value={props.name}
          onChange={props.handleChange}
          fullWidth
        />
      </form>
      <MediaQuery maxDeviceWidth={1224}>
        <div className='actionsContainer'>
          <Button className='disappear' disabled>
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
