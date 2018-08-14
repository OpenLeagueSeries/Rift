import React, { Component, Fragment } from 'react';

import './assets/styles/RegistrationForm.css';

class RegisterForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="register-wrap">
        <form>
          <h1>Register Today!</h1>
          <input type="text" placeholder="Tell us your name!" />
          <input type="text" placeholder="What is your summoner name?" />
          <input type="email" placeholder="What is your email address?" />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
