import React, { Component, createContext } from 'react'
import { Subscription } from '../streamLib/stream'

const { Consumer, Provider } = createContext()

export default class TeamContext extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'My TeamName',
      pointsLeft: 0,
      pointsOriginal: 150,
      players: [
        {
          id: '1',
          name: 'dude',
          cost: '23',
          roles: 'jg',
          pos: 3
        },
        {
          id: '2',
          name: 'dude two',
          cost: '23',
          roles: 'jg',
          pos: 0
        }
      ]
    }
  }

  findMissing = arr => {
    const set = new Set(arr)
    let i = 0
    while (set.has(i)) {
      i++
    }
    return i
  }

  addPlayer = (id, name, cost, roles) => {
    const playerPos = [0, 2, 3, 4]
    this.state.players.map(player => {
      playerPos.push(player.position)
    })

    playerPos.sort((a, b) => a - b)

    const missingPosition = this.findMissing(playerPos)

    const newPlayer = {
      id,
      name,
      cost,
      roles,
      pos: missingPosition
    }

    const stateCopy = [...this.state.players]
    stateCopy.push(newPlayer)
    this.setState({
      players: stateCopy
    })
  }

  moveTo = (pos, id) => {
    this.setState(prevState => ({
      players: prevState.players.map(player => {
        if (player.id === id) {
          return { ...player, pos }
        } else {
          return player
        }
      })
    }))
  }

  //this code is bad and stupid. I don't know if I'm tired or burnt out for the day but if anyone sees a better solution please let me know
  swap = (pos, id, swapId) => {
    const newArray = [...this.state.players]
    let tempPos = 0
    newArray.map(player => {
      if (id === player.id) {
        tempPos = player.pos
      }
    })
    this.setState(
      prevState => ({
        players: prevState.players.map(player => {
          if (player.id === id) {
            return { ...player, pos }
          } else {
            return player
          }
        })
      }),
      () => {
        const newArray = [...this.state.players]
        newArray.map(player => {
          if (player.id === swapId) {
            player.pos = tempPos
          }
        })
        this.setState({
          players: newArray
        })
      }
    )
  }

  render() {
    const value = { ...this.state, moveTo: this.moveTo, swap: this.swap }
    return <Provider value={value}>{this.props.children}</Provider>
  }
}

export const withTeam = C => props => <Consumer>{value => <C {...value} {...props} />}</Consumer>
