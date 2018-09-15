import React, { Component } from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'

const PlayerRoles = [ 'Top', 'Jungle' , 'Mid' , 'Support', 'Bot' ]

class EditPlayerRole extends Component {
  render() {
    return (
      <Select
        multiple
        value={this.props.selectedRoles}
        onChange={this.props.handleRole('selectedRoles')}
        input={<Input />}
        renderValue={picked => (
          <div>
            {picked.map(value => (
              <Chip key={value} label={value} />
            ))}
          </div>
        )}>
        {PlayerRoles.map(selectedRoles => (
          <MenuItem key={selectedRoles} value={selectedRoles}>
            <Checkbox checked={this.props.selectedRoles.indexOf(selectedRoles) > -1} />
            <ListItemText primary={selectedRoles} />
          </MenuItem>
        ))}
      </Select>
    )
  }
}

export default EditPlayerRole
