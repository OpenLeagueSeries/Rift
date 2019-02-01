import React, { Component } from 'react'

import DoneIcon from '@material-ui/icons/Done'
import ErrorIcon from 'mdi-material-ui/Exclamation'
import BlankIcon from 'mdi-material-ui/Help'

export const IconifyField = (WrappedComponent, Icon) => {
  return class extends Component {

    render() {
      return (
        <div className='inputContainer'>
          <div className='inputIcon'>
            <div className='iconType'><Icon /></div>
            { this.props.helperText === 'Looks good!' ? <div className='inputStatus'><DoneIcon className='indicatorIcon'/></div>
            : this.props.inputError ? <div className='inputStatus'><ErrorIcon className='indicatorIcon'/></div>
            : <div className='inputStatus'><BlankIcon className='indicatorIcon'/></div> }
          </div>
          <div className='inputField'>
            <WrappedComponent {...this.props}/>
          </div>
        </div>
      )
    }


  }
}
