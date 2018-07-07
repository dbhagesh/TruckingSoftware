import React, { Component }from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import './appbar.css';


class SimpleAppBar extends Component {
  render() {
  return (
    <div>
      <AppBar position="static" className="navbar" color={this.props.color}>
        <Toolbar>
          <h1>Truck Soft</h1>
        </Toolbar>
      </AppBar>
    </div>
  );}
}


export default SimpleAppBar;
