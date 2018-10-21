import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderIcon from '@material-ui/icons/Folder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

export const MainListItems = props => (
  <div>
    <ListItem
      button
      onClick={() => {
        props.toggleMenuState('models');
      }}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="MODELS" />
      {props.modelsMenuOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={props.modelsMenuOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={''}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText inset primary="Starred" />
        </ListItem>
      </List>
    </Collapse>

    <ListItem
      button
      onClick={() => {
        props.toggleMenuState('files');
      }}>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="FILES" />
      {props.filesMenuOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={props.filesMenuOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={''}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText inset primary="Starred" />
        </ListItem>
      </List>
    </Collapse>

    <ListItem
      button
      onClick={() => {
        props.toggleMenuState('data');
      }}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="DATA" />
      {props.dataMenuOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={props.dataMenuOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={''}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText inset primary="Starred" />
        </ListItem>
      </List>
    </Collapse>

    <ListItem
      button
      onClick={() => {
        props.toggleMenuState('integrations');
      }}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="INTEGRATIONS" />
      {props.integrationsMenuOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={props.integrationsMenuOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={''}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText inset primary="Starred" />
        </ListItem>
      </List>
    </Collapse>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
