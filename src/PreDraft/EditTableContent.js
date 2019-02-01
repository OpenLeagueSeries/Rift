import React, { Component } from 'react'

import { Subscription } from '../streamLib/stream'
import { PlayerInitials } from './Data/PlayerInitials'
import EditPlayerRole from './Data/EditPlayerRole'

import TextField from '@material-ui/core/TextField'

import CaptainIcon from 'mdi-material-ui/Crown'

class EditTableContent extends Component {
  constructor (props) {
    super(props)
    this.state = {data: []}
    this.subscription = {}
  }

  componentDidMount() {
    this.subscription = new Subscription(`/details/${this.props.user}`,
    (info) => {
      this.setState({
        data: info
      })
      this.subscription.end()
    })
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }

  handleEdit = (target) => (ev) => {
    const update = {}
    console.log(ev)
    console.log(target)
    update[target] = ev.target.value
    this.setState({
      data: { ...this.state.data, ...update}}, () => {
      this.req = this.subscription.request({...this.state.data})
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
        <td><TextField value={this.state.data.notes} onChange={this.handleEdit('notes')}></TextField></td>
        <td><TextField value={this.state.data.captainBool} onChange={this.handleEdit('captainBool')}></TextField></td>
        {this.props.me.role === 'Admin'
          ? <td><CaptainIcon /></td>
          : <React.Fragment />
        }
      </tr>
    )
  }
}

export default EditTableContent
