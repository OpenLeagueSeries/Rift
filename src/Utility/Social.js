import React from 'react'

import Tooltip from '@material-ui/core/Tooltip'
import FBIcon from 'mdi-material-ui/FacebookBox'
import DiscIcon from 'mdi-material-ui/Discord'

export const Social = (props) => {
  return (
    <div className='social'>
      <div className='facebook'>
        <Tooltip title='Facebook'>
          <a href='https://www.facebook.com/groups/LoLatPitt/' target='_blank' rel='noopener noreferrer'>
            <FBIcon className='fbIcon'/>
            <div className='FBinfo'>LoL@Pitt</div>
          </a>
        </Tooltip>
      </div>
      <div className='teamspeak'>
        <Tooltip title='TeamSpeak'>
          <a href='https://www.teamspeak.com/en/downloads' target='_blank' rel='noopener noreferrer'>
            <div className='TSlogo'></div>
            <div className='TSinfo'>
              <div>Server: pitt.lol</div>
              <div>Password: pittlol</div>
            </div>
          </a>
        </Tooltip>
      </div>
      <div className='discord'>
        <Tooltip title='Discord'>
          <a href='https://discord.gg/n74BaQq' target='_blank' rel='noopener noreferrer'>
            <div className='DSlogo'><DiscIcon /></div>
            <div className='DSinfo'>discord.gg/n74BaQq</div>
          </a>
        </Tooltip>
      </div>
    </div>
  )
}
