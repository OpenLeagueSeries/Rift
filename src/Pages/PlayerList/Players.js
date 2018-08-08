import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Player_list extends Component {
  state = {
    expanded: null,
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel: false
    })
  }

  render () {
    const { classes } = this.props
    const { expanded } = this.state


    const playerList = this.state.players.map((player) => {
      return (
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} key={player.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{player.ign}: {player.roles}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {player.details}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    })
    return (
      <div classname={classes.root}>
        {playerList}
      </div>
    )
  }

}

Player_list.PropTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Player_list)
