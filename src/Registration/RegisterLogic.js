export default {
    state :{
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
    },
    handleField: that => inputType => event => {
      switch (inputType) {
        case 'name':
          that.nameValidator(event)
          break
        case 'ign':
          that.ignValidator(event)
          break
        case 'email':
          that.emailValidator(event)
          break
        default:
          return null
      }
    },
    handleSubmit: that => (ev) => {
      ev.preventDefault()
      if (that.state.NameHelperText === 'Looks good!' && that.state.IGNHelperText === 'Looks good!' && that.state.EmailHelperText === 'Looks good!' && !that.state.submitted) {
        that.sendRegister()
      } else {
        that.handleIncomplete()
        setTimeout(that.handleContinue, 2500)
      }
    },
    handleClose: that => (event, reason) => {
      if (reason === 'clickaway') {
        return
      }
      that.setState(state => ({
        submitted: false
      }))
      setTimeout(that.handleReset(), 2500)
    },
    sendRegister: that => () => {
      that.req = fetch('https://localhost:4200/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({name: that.state.name, ign: that.state.ign, email: that.state.email})
      }).then((result) => {
        if (result.success) {
          that.setState(state => ({
            message: 'Check your email for a magic login link!', submitted: true, open: true
          }))
        } else {
          if (result.data === 'Email already exists') {
            that.setState(state => ({
              message: 'That email has already been registered!', submitted: true, inputEmailError: true, EmailHelperText: 'That email is already in our system!', open: true
            }))
          }
          if (result.data === 'Server error') {
            that.setState(state => ({
              message: 'Something went wrong with the server D:', submitted: true, open: true
            }))
          }
        }
      })
    },
    handleIncomplete: that => () => {
      if (that.state.NameHelperText !== 'Looks good!' && that.state.inputNameError === false) {
        that.setState(state => ({
          inputNameError: true, open: true, NameHelperText: 'Check your name input!'
        }))
      }
      if (that.state.IGNHelperText !== 'Looks good!' && that.state.inputIgnError === false) {
        that.setState(state => ({
          inputIgnError: true, open: true, IGNHelperText: 'Check your IGN input!'
        }))
      }
      if (that.state.EmailHelperText !== 'Looks good!' && that.state.inputEmailError === false && that.state.message !== 'That email has already been registered!') {
        that.setState(state => ({
          inputEmailError: true, open: true, EmailHelperText: 'Check your email input!'
        }))
      }
    },

    handleContinue: that => () => {
      if (that.state.NameHelperText !== 'Looks good!' && that.state.inputNameError === true) {
        that.setState(state => ({
          inputNameError: false, open: false, NameHelperText: 'Your first and last name here'
        }))
      }
      if (that.state.IGNHelperText !== 'Looks good!' && that.state.inputIgnError === true) {
        that.setState(state => ({
          inputIgnError: false, open: false, IGNHelperText: 'Your IGN is at least 3 characters'
        }))
      }
      if (that.state.EmailHelperText !== 'Looks good!' && that.state.inputEmailError === true) {
        that.setState(state => ({
          inputEmailError: false, open: false, EmailHelperText: 'Preferred Email'
        }))
      }
    }

  }
