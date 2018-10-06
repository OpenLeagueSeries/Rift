import React from 'react'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'

import RedoIcon from 'mdi-material-ui/RedoVariant'
import ResetIcon from '@material-ui/icons/Clear'
import SendIcon from '@material-ui/icons/Send'

export const CompletionDisplay = (props) => {
  return (
    <div className='CompletionDisplay'>
      <Paper square elevation={0}>
        <div className='infoBox'>
          <div className='textInfo'>Successfully completed -</div>
          <div className='textInfo2'>Click to send your confirmation email!</div>
        </div>
        <div className='completeButtons'>
          <Button
            onClick={props.handleReview}
            color='secondary'>
            <RedoIcon className='redoIcon' />
            <span className='buttonLabel'>Edit Information</span>
          </Button>
          <Button
            onClick={props.handleReset}
            color='secondary'>
            <span className='buttonLabel'>Reset</span>
            <ResetIcon className='resetIcon' />
          </Button>
        </div>
        <div className='sendButton'>
          <Button
            className='sendEmail'
            disabled={props.open}
            onClick={props.sendRegister}
            color='primary'
            variant='extendedFab'>
            <span className='buttonLabel'>Send Email</span>
            <SendIcon className='sendIcon' />
          </Button>
          {props.open && <CircularProgress className='loading'/>}
        </div>
      </Paper>
    </div>
  )
}
