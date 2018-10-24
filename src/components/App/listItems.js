import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderIcon from '@material-ui/icons/Folder';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const ContentListItem = props => {
  console.log("io", props)
  return (
    <ListItem>
      <Link
        to={`/${props.item}/${props.id}`}
        hash={`/${props.item}/${props.id}`} 
      >
        {props.name}
      </Link>
    </ListItem>
  );
};

const MainListItem = props => {
  const children = props.content.map(row => (
    <ContentListItem {...row} fetchItem={props.fetchItem} item={props.item}/>
  ));
  return (
    <div key={props.key}>
      <ListItem
        button
        onClick={() => {
          props.toggleMenuState(props.item);
        }}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.item.toUpperCase()} />
        {props.open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={props.open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </div>
  );
};

const icons = {
  models: <DashboardIcon />,
  data: <BarChartIcon />,
  files: <FolderIcon />,
  integrations: <LayersIcon />,
};

export const MainListItems = props => {
  console.log('PP', props);
  return props.items.map(item => {
    return (
      <MainListItem
        item={item}
        key={item}
        content={props.content[item]}
        open={props.UIState.leftNav[item]}
        icon={icons[item]}
        toggleMenuState={props.toggleMenuState}
        fetchItem={props.fetchItem}
      />
    );
  });
};
