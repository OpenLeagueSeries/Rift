import React from 'react'
import { withTeam } from '../../Contexts/MyTeamContext'
import { DropTarget } from 'react-dnd'
import { Types } from './ItemTypes'

const spec = {
  drop({ moveTo, swap, pos, children }, monitor) {
    const { id } = monitor.getItem()
    if (children) {
      swap(pos, id, children.props.id)
    } else {
      moveTo(pos, id)
    }
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const styleBackground = isOver => {
  if (isOver) return 'rgba(255,255,255, .05'
  else return 'transparent'
}

const List = ({ connectDropTarget, isOver, children, pos, isDragging }) => {
  const isOverStyle = {
    backgroundColor: styleBackground(isOver)
  }
  const lanes = ['TOP', 'JUNGLE', 'MID', 'BOTTOM', 'SUPPORT']

  return connectDropTarget(
    <div style={isOverStyle} className="listItem">
      <div className="item-background">{lanes[pos]}</div>
      {children}
    </div>
  )
}

export default withTeam(DropTarget(Types.PLAYER, spec, collect)(List))
