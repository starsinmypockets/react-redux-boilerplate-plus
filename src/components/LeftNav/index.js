import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import {withStyles} from '@material-ui/core/styles';
import Styles from './styles';

const LeftNav = props => {
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: props.classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={props.classes.toolbar} />
      <Divider />
      <p>Foo</p>
      <Divider />
      <p>Foo</p>
    </Drawer>
  );
};

export default withStyles(Styles)(LeftNav);
