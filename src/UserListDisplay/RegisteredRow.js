import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Subscription } from '../streamLib/stream.js'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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

class RegisteredRow extends Component {


  constructor (props) {
    super(props)
    this.state = {data:[]}
  }

  componentDidMount() {
    this.subscription = new Subscription(`/details/${this.props.user}`,
    (info) => {
      console.log(info)
      this.setState({data:info[0]})

    })
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }

  render() {
    return(

        <TableRow>
          <CustomTableCell>{this.state.data.name}</CustomTableCell>
          <CustomTableCell>{""}</CustomTableCell>
          <CustomTableCell >{this.state.data.email}</CustomTableCell>
          <CustomTableCell>{""}</CustomTableCell>
          <CustomTableCell>{""}</CustomTableCell>
          <CustomTableCell>{""}</CustomTableCell>
        </TableRow>
      )
    }
  }


RegisteredRow.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisteredRow);
