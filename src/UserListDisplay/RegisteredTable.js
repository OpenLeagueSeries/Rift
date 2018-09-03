import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Subscription } from '../streamLib/stream.js'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import RegisteredRow from './RegisteredRow'
import EditRow from './EditRow'
import { UserContext } from '../App'


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#cdb87c",
    color: "black",
  },
  body: {
    fontSize: 10,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 10000,
  },
  row: {
      backgroundColor: "#cdb87c",
  },
});


class RegisteredTable extends Component {
  constructor (props) {
    super(props)
    this.state = {data:[]}
    }

  componentDidMount() {
    this.subscription = new Subscription('/users',
    (info) => {this.setState({data:info})
    console.log(info)
    })
  }

  componentWillUnmount() {
    this.subscription && this.subscription.end()
  }



  render () {
    return (
      <div>

      <div style={{color:"#cdb87c", fontSize:"300%"}}>
         <p>Registered Player List</p>
      </div>

      <div style={{color:"#cdb87c"}}>
      <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Name</CustomTableCell>
                  <CustomTableCell>IGN</CustomTableCell>
                  <CustomTableCell>Email Address </CustomTableCell>
                  <CustomTableCell>Roles </CustomTableCell>
                  <CustomTableCell>Notes </CustomTableCell>
                  <CustomTableCell>I can captain </CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              { this.state.data.map((user) => {
                return (
                  <UserContext.Consumer key={user}>
                  { (me) => {
                    console.log(me);
                    return user._key === me._key
                    ? <EditRow key={user} user={user} me={me} />
                    : <RegisteredRow key={user} user={user} me={me}/>
                    }
                  }
                </UserContext.Consumer>)
              }
            ) }
              </TableBody>
            </Table>
        </Paper>
      </div>

      </div>
    )
  }



}


RegisteredTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisteredTable);
