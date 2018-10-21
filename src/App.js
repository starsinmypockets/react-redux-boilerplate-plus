import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SimpleAction, FooAction} from './actions';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import LeftNav from './components/LeftNav'

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(SimpleAction()),
  fooAction: () => dispatch(FooAction()),
});

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  simpleAction(e) {
    this.props.simpleAction();
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <pre>{JSON.stringify(this.props)}</pre>
        <AppBar>
          <h1 className="App-title">Parcelizer</h1>
        </AppBar>
        <LeftNav />
        <Button onClick={this.simpleAction.bind(this)}>
          Test redux action
        </Button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
