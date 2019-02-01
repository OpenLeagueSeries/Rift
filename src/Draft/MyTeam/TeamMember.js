import React from 'react'
import { DragSource } from 'react-dnd'
import { Types } from './ItemTypes'
import ListItem from '@material-ui/core/ListItem'
import { styled } from '@material-ui/styles'

const spec = {
  beginDrag({ id }) {
    return { id }
  }
}

const collect = (connect, monitor) => {
  return {
    dragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const RosterPlayer = styled(ListItem)({
  padding: 0,
  height: '100%',
  justifyContent: 'space-between',
  padding: '8px 24px'
})

const TeamMember = ({ dragSource, isDragging, name, cost, role }) => {
  const dragStyle = {
    opacity: isDragging ? '.2' : '1'
  }
  return dragSource(
    <div style={dragStyle} className="team-member">
      <RosterPlayer button>
        <h3>{name}</h3>
        <h4>Roles: {role}</h4>
        <p>Cost: {cost}</p>
      </RosterPlayer>
    </div>
  )
}

export default DragSource(Types.PLAYER, spec, collect)(TeamMember)
