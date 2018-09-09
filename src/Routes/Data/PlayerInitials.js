import React from 'react'

import Avatar from '@material-ui/core/Avatar'

export function PlayerInitials (props) {
  if (props.name) {
    const NameParts = props.name.split(' ').map((NameToken) => NameToken.charAt(0).toUpperCase()).join('')
    return (
      <Avatar className='avatarColor'>{NameParts}</Avatar>
    )
  } else {
    return <React.Fragment />
  }
}
