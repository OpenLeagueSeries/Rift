import React from 'react'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import Tooltip from '@material-ui/core/Tooltip'

import RedoIcon from 'mdi-material-ui/RedoVariant'
import ResetIcon from '@material-ui/icons/Clear'
import SendIcon from '@material-ui/icons/Send'

export const CompletionDisplay = (props) => {
  return (
    <div className='CompletionDisplay'>
      <Paper square elevation={0}>
        <div className='buttonContainer'>
          <Button
            onClick={props.handleReset}
            color='secondary'>
            <span className='buttonLabel'>Reset</span>
            <ResetIcon className='resetIcon' />
          </Button>
          <div className='submitButton'>
            { props.disableButton ?
              <Tooltip title='Form is still incomplete!' open={props.open} onOpen={props.handleIncomplete} onClose={props.handleContinue} leaveDelay={500}>
                <div>
                  <Button
                    className='sendEmail'
                    onClick={props.sendRegister}
                    color='primary'
                    variant='extendedFab'
                    disabled={props.disableButton}>
                    <span className='buttonLabel'>Send Email</span>
                    <SendIcon className='sendIcon' />
                  </Button>
                </div>
              </Tooltip> :
              <Button
                className='sendEmail'
                onClick={props.handleSubmit}
                color='primary'
                variant='extendedFab'
                disabled={props.disableButton}>
                <span className='buttonLabel'>Send Email</span>
                <SendIcon className='sendIcon' />
              </Button>
            }
            {props.submitted && <CircularProgress className='loading'/>}
          </div>
        </div>
      </Paper>
    </div>
  )
}
