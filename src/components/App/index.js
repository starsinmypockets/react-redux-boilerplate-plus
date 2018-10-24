import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Switch, Link} from 'react-router-dom';
import {UIAction, FetchAPIContentAction} from '../../actions';
import './App.css';
import Data from '../Data';
import Files from '../Files';
import Models from '../Models';
import Home from '../Home';
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
import {MainListItems} from './listItems';
import styles from './styles';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  updateUIAction: (part, state) => dispatch(UIAction(part, state)),
  fetchItemAction: opts => dispatch(FetchAPIContentAction(opts)),
});

class App extends Component {
  toggleMenuState = menu => {
    const open = !this.props.UI.leftNav[menu];
    this.props.updateUIAction(['leftNav', menu], !this.props.UI.leftNav[menu]);
    if (open) {
      this.props.updateUIAction(['leftNav', 'open'], true);
    }
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
              <Link to="/" style={{color:'white'}}>
                Dashboard
              </Link>
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
                  updateUIAction(['leftNav', 'models'], false);
                  updateUIAction(['leftNav', 'files'], false);
                  updateUIAction(['leftNav', 'data'], false);
                }}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <MainListItems
                items={['models', 'files', 'data']}
                UIState={this.props.UI}
                content={this.props.Content}
                fetchItem={this.props.fetchItemAction}
                toggleMenuState={this.toggleMenuState}
              />
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/models" component={Models} />
              <Route
                path="/models/:id?"
                render={props => (
                  <Models {...props} models={this.props.Content.models} />
                )}
              />
              <Route
                path="/files/:id?"
                render={props => (
                  <Files {...props} files={this.props.Content.files} />
                )}
              />
              <Route
                path="/data/:id?"
                render={props => (
                  <Data {...props} data={this.props.Content.data} />
                )}
              />
              <Route
                component={props => {
                  return <p>Not Found</p>;
                }}
              />
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withStyles(styles)(App)),
);
