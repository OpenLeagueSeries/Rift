import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Subscription } from '../streamLib/stream.js'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#cdb87c",
    color: "black",
  },
  body: {
    fontSize: 50,
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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


class RegisteredTable extends Component {
  constructor (props) {
    super(props)
    this.state = {userName: "", userIGN: "", userEmail: ""}
    }

  componentDidMount() {
    this.subscription = new Subscription('/users',
    (info) => {
      this.setState({userName: info.name, userIGN: " ", userEmail: info.email})
    })
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }



  render () {
    return (
      <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Name</CustomTableCell>
                  <CustomTableCell numeric>IGN</CustomTableCell>
                  <CustomTableCell numeric>Email Address </CustomTableCell>
                  <CustomTableCell numeric>TBD(Prefered Roll) </CustomTableCell>
                  <CustomTableCell numeric>TBD(Self Description) </CustomTableCell>
                  <CustomTableCell numeric>TBD </CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                    <TableRow>
                      <CustomTableCell numeric>{this.state.userName}</CustomTableCell>
                      <CustomTableCell numeric>{this.state.userIGN}</CustomTableCell>
                      <CustomTableCell numeric>{this.state.userEmail}</CustomTableCell>
                      <CustomTableCell numeric>{""}</CustomTableCell>
                      <CustomTableCell numeric>{""}</CustomTableCell>
                      <CustomTableCell numeric>{""}</CustomTableCell>
                    </TableRow>
              </TableBody>
            </Table>
          </Paper>
    )
  }



}


RegisteredTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisteredTable);
