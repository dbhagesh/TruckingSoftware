import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { NavLink } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
    marginLeft: 5,
    marginTop: 100,
    textAlign: "left",
  },
  link: {
    textDecoration: 'none',
  }
};

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (

        <div className={classes.list}>
           <List><NavLink to="/" className={classes.link}><Button>DashBoard</Button></NavLink></List>
           <List><NavLink to="/orders" className={classes.link}><Button>Orders</Button></NavLink></List>
        </div>

    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)} color="inherit">Menu</Button>

        <SwipeableDrawer open={this.state.left} onClose={this.toggleDrawer('left', false)} onOpen={this.toggleDrawer('left', true)}>
          <div tabIndex={0} role="button" onClick={this.toggleDrawer('left', false)} onKeyDown={this.toggleDrawer('left', false)}>
            {sideList}
          </div>
        </SwipeableDrawer>

      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
