import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom'
import {UIAction, FetchAPIContentAction} from '../../actions';
import logo from './logo.svg';
import './App.css';
import Data from '../Data';
import Files from '../Files';
import Models from '../Models';
import Integrations from '../Integrations';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {MainListItems, secondaryListItems} from './listItems';
import styles from './styles';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  updateUIAction: (part, state) => dispatch(UIAction(part, state)),
  fetchItemAction: opts => dispatch(FetchAPIContentAction(opts)),
});

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this);
  }

  toggleMenuState = menu => {
    this.props.updateUIAction(['leftNav', menu], !this.props.UI.leftNav[menu]);
  };

  render() {
    const {leftNav} = this.props.UI;
    const {classes, updateUIAction} = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(
              classes.appBar,
              leftNav.open && classes.appBarShift,
            )}>
            <Toolbar disableGutters={!leftNav.open} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={() => {
                  updateUIAction(['leftNav', 'open'], true);
                }}
                className={classNames(
                  classes.menuButton,
                  leftNav.open && classes.menuButtonHidden,
                )}>
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}>
                Dashboard
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !leftNav.open && classes.drawerPaperClose,
              ),
            }}
            open={leftNav.open}>
            <div className={classes.toolbarIcon}>
              <IconButton
                onClick={() => {
                  updateUIAction(['leftNav', 'open'], false);
                }}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <MainListItems
                items={['models', 'files', 'data', 'integrations']}
                UIState={this.props.UI}
                content={this.props.Content}
                fetchItem={this.props.fetchItemAction}
                toggleMenuState={this.toggleMenuState}
              />
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Route exact path="/models" component={Models} />
            <Route exact path="/files" component={Files} />
            <Route exact path="/data" component={Data} />
            <Route exact path="/integrations" component={Integrations} />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

const Foo = () => {
  return <p>FOO</p>
}

const Bar = () => {
  return <p>BAR</p>
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(App));
