import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Subscription } from '../streamLib/stream.js'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

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

function RegisteredRow(props) {
  const { classes } = props;

  return(

    <TableBody>
        <TableRow>
          <CustomTableCell numeric>{props.users.userName}</CustomTableCell>
          <CustomTableCell numeric>{props.users.userEmail}</CustomTableCell>
          <CustomTableCell numeric>{""}</CustomTableCell>
          <CustomTableCell numeric>{""}</CustomTableCell>
          <CustomTableCell numeric>{""}</CustomTableCell>
        </TableRow>
    </TableBody>


    )
  }


RegisteredRow.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisteredRow);
