import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

// This is how the subscription data should look

const data = [
  {id: 1, name: 'Michael Santana', ign: 'imaqtpie'},
  {id: 2, name: 'Zacqueri Black', ign: 'Aphromoo'},
  {id: 3, name: 'Peng Yiliang', ign: 'Doublelift'},
  {id: 4, name: 'Søren Bjerg', ign: 'Bjergsen'},
  {id: 5, name: 'Trevor Hayes', ign: 'Stixxay'}
]

/* This is demo data.
let id = 0;
function createData(name, ign) {
  id += 1;
  return { id, name, ign };
}

const data = [
  createData('Michael Santana', 'imaqtpie'),
  createData('Zacqueri Black', 'Aphromoo'),
  createData('Peng Yiliang', 'Doublelift'),
  createData('Søren Bjerg', 'Bjergsen'),
  createData('Stixxay', 'Trevor Hayes'),
];
*/

function Register_list(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>ign</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {n.ign}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

Register_list.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Register_list)
