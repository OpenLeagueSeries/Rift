import React, { Component } from 'react'

import { PlayerInitials } from './Data/PlayerInitials'
import EditPlayerRole from './Data/EditPlayerRole'

import TextField from '@material-ui/core/TextField'

import Checkbox from '@material-ui/core/Checkbox'

class EditTableContent extends Component {
  constructor (props) {
    super(props)
    this.state = {data: {name: '', ign: '', selectedRoles: [], notes: '', captainNote: '', captainBool: false}}
    this.sub = {}
  }

  componentDidMount() {
    this.sub = new EventSource(`https://localhost:4200/details/${this.props.user}`)
    this.sub.onmessage = (info) => {
      this.setState({
        data: JSON.parse(info.data)[0]
      })
      this.sub.close()
    }
  }

  componentWillUnmount() {
    this.sub && this.sub.close()
  }

  handleEdit = (target) => (ev) => {
    const update = {}
    update[target] = ev.target.value || ev.target.checked
    this.setState({
      data: { ...this.state.data, ...update}}, () => {
      this.req = fetch(`https://localhost:4200/edit/${this.props.user}`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ ...this.state.data, ...update})
      })
    })
  }

  handleRemove = () => {
    this.req = fetch(`https://localhost:4200/remove/${this.props.user}`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json'}
    })
  }

  render() {
    console.log(this.state.data.selectedRoles)
    return (
      <tr>
        <td><PlayerInitials name={this.state.data.name}/></td>
        <td>{this.state.data.name}</td>
        <td>{this.state.data.ign}</td>
        <td><EditPlayerRole handleRole={this.handleEdit} selectedRoles={this.state.data.selectedRoles || []}/></td>
        <td><TextField value={this.state.data.notes || ''} onChange={this.handleEdit('notes')}></TextField></td>
        <td><TextField value={this.state.data.captainNote || ''} onChange={this.handleEdit('captainNote')}></TextField></td>
        {this.props.me.role === 'admin'
          ? <td><Checkbox checked={this.state.data.captainBool || false} onChange={this.handleEdit('captainBool')}> </Checkbox></td>
          : <React.Fragment />
        }
        <td onClick={this.handleRemove}>X</td>
      </tr>
    )
  }
}

export default EditTableContent
