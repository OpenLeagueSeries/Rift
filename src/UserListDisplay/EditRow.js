import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Subscription, Request } from '../streamLib/stream.js'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TextField from '@material-ui/core/TextField'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#cdb87c",
    color: "black",
  },
  body: {
    fontSize: 20,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
      backgroundColor: "#cdb87c",
  },
});

class EditRow extends Component {


  constructor (props) {
    super(props)
    this.state = {data:[]}
    this.subscription = {}
  }

  componentDidMount() {
    this.subscription = new Subscription(`/details/${this.props.user}`,
    (info) => {
      console.log(info);
      this.setState({data:info});
    })
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }

  onEdit = (target) => (ev) => {
    const update = {};
    update[target] = ev.target.value;
    console.log(update);
    console.log(this.state);
    this.setState({data: { ...this.state.data, ...update}}, () => {
      console.log(this.state);
      this.req = this.subscription.request({...this.state.data});
    })
  }

  render() {
    return(

        <TableRow>
            <CustomTableCell><TextField value={this.state.data.name} onChange={this.onEdit('name')}></TextField></CustomTableCell>
            <CustomTableCell><TextField value={this.state.data.ign} onChange={this.onEdit('ign')}></TextField></CustomTableCell>
            <CustomTableCell>{this.state.data.email}</CustomTableCell>
            <CustomTableCell><TextField value={this.state.data.roles} onChange={this.onEdit('roles')}></TextField></CustomTableCell>
            <CustomTableCell><TextField value={this.state.data.notes} onChange={this.onEdit('notes')}></TextField></CustomTableCell>
            <CustomTableCell><TextField value={this.state.data.captainBool} onChange={this.onEdit('captainBool')}></TextField></CustomTableCell>
            {this.props.me.role === "Admin"? <CustomTableCell>Captain?</CustomTableCell>:<React.Fragment></React.Fragment>}
        </TableRow>
      )
    }
  }


EditRow.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditRow);
