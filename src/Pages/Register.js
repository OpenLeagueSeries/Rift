import React, { Component } from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import validator from 'validator';

import lolPittLogo from '../../src/assets/lolpittlogo.png';
import BackIcon from '@material-ui/icons/ExpandLess';
import NextIcon from '@material-ui/icons/ExpandMore';
import RedoIcon from 'mdi-material-ui/RedoVariant';
import SendIcon from '@material-ui/icons/Send';

import './Pages.css';

class Register extends Component {
  state = {
    activeStep: 0,
    name: '',
    ign: '',
    email: ''
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
    if (event.key === 'Enter') {
      console.log('do validate');
    }
  };

  handleReset = () => {
    this.setState(state => ({
      activeStep: 0
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const steps = [
      'Tell us your name!',
      'What is your summoner name?',
      'What is your email address?'
    ];
    const { activeStep } = this.state;

    return (
      <div className="registerDisplay">
        <div className="main">
          <img src={lolPittLogo} alt="lol@Pitt Logo" />
        </div>
        <div className="registrationSteps">
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
              switch (index) {
                case 0:
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <Typography>
                          <form onSubmit={this.handleSubmit}>
                            <TextField
                              label="Name IRL"
                              placeholder="Michael Santana"
                              helperText="Your first and last name here"
                              value={this.state.name}
                              onChange={this.handleChange('name')}
                            />
                          </form>
                        </Typography>
                        <div className="actionsContainer">
                          <Button className="disappear" disabled>
                            <BackIcon /> Back
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            disabled={
                              this.state.name === '' ||
                              !validator.contains(this.state.name)
                            }
                          >
                            {activeStep === steps.length - 1
                              ? 'Finish'
                              : 'Next'}{' '}
                            <NextIcon />
                          </Button>
                        </div>
                      </StepContent>
                    </Step>
                  );
                case 1:
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <Typography>
                          <form onSubmit={this.handleSubmit}>
                            <TextField
                              label="Summoner Name"
                              placeholder="Imaqtpie"
                              helperText="IGN"
                              value={this.state.ign}
                              onChange={this.handleChange('ign')}
                            />
                          </form>
                        </Typography>
                        <div className="actionsContainer">
                          <Button color="secondary" onClick={this.handleBack}>
                            <BackIcon /> Back
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            disabled={
                              this.state.ign === '' ||
                              !validator.isAlphanumeric(this.state.ign)
                            }
                          >
                            {activeStep === steps.length - 1
                              ? 'Finish'
                              : 'Next'}{' '}
                            <NextIcon />
                          </Button>
                        </div>
                      </StepContent>
                    </Step>
                  );
                case 2:
                  return (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <Typography>
                          <form onSubmit={this.handleSubmit}>
                            <div>
                              This email will be used to confirm your
                              registration!
                            </div>
                            <TextField
                              label="Email Address"
                              placeholder="Imaqtpielol@gmail.com"
                              helperText="Preferred Email"
                              value={this.state.email}
                              onChange={this.handleChange('email')}
                            />
                          </form>
                        </Typography>
                        <div className="actionsContainer">
                          <Button color="secondary" onClick={this.handleBack}>
                            <BackIcon /> Back
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            disabled={
                              this.state.email === '' ||
                              !validator.isEmail(this.state.email)
                            }
                          >
                            {activeStep === steps.length - 1
                              ? 'Finish'
                              : 'Next'}{' '}
                            <NextIcon />
                          </Button>
                        </div>
                      </StepContent>
                    </Step>
                  );
                default:
                  return 'Something went wrong with your registration D:';
              }
            })}
          </Stepper>
        </div>
        {activeStep === steps.length && (
          <Paper square elevation={0} className="CompletionDisplay">
            <div>
              <Typography>
                Successfully completed - Click to send your confirmation email!
              </Typography>
              <Button
                className="reviewInfo"
                onClick={this.handleReset}
                color="secondary"
              >
                <RedoIcon className="redoIcon" /> Review Information
              </Button>
              <Button
                className="sendEmail"
                onClick={this.handleReset}
                color="primary"
                variant="extendedFab"
              >
                Send Email <SendIcon className="sendIcon" />
              </Button>
            </div>
          </Paper>
        )}
      </div>
    );
  }
}

export default Register;
