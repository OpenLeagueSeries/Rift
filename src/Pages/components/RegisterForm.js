import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import './assets/styles/RegistrationForm.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'white',
    width: '50vw'
  },
  root: {
    background: 'transparent',
    display: 'block'
  },
  input: {
    color: '#000',
    padding: '8px 20px 8px 20px',
    width: '100%',
    underline: {
      borderBottom: '1px solid black'
    }
  },
  form: {
    textAlign: 'center',
    width: '50%'
  },
  button: {
    marginBottom: 20
  }
};

class RegisterForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="register-wrap">
        <div className={classes.container}>
          <h1>Register Today</h1>
          <form className={classes.form}>
            <Fragment>
              <TextField
                defaultValue="IRL Name"
                className={classes.root}
                InputProps={{
                  className: classes.input
                }}
              />
              <TextField
                defaultValue="In Game Name"
                className={classes.root}
                InputProps={{
                  className: classes.input
                }}
              />
              <TextField
                defaultValue="Email"
                className={classes.root}
                InputProps={{
                  className: classes.input
                }}
              />
              <button className={classes.button}>Register</button>
            </Fragment>
          </form>
        </div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterForm);
