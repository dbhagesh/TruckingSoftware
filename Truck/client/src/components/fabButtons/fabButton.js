import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import NewTruckForm from '../newTruckForm/newTruckForm';
import NewOrderForm from '../newOrderForm/newOrderForm';

import Icon from '@material-ui/core/Icon';
import './fabButton.css';
import { NavLink } from 'react-router-dom';



function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    height: 'auto',
    width: 'auto',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    borderRadius: '5px',
  },
});


class FloatingButtons extends Component {

  state = {
      open: false,
    };

    handleOpen = () => {
       this.setState({ open: true });
     };

     handleClose = () => {
       this.setState({ open: false });
     };

 render() {
   const { classes } = this.props;
   return (
      <div className="button">

        <Button variant="fab" color={this.props.color} aria-label="add" onClick={this.handleOpen}>
          +
        </Button>
        <Modal
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
         open={this.state.open}
         onClose={this.handleClose}
      >

      <div style={getModalStyle()} className={classes.paper}>
          {this.props.color === 'secondary'? (<NewOrderForm />) : (<NewTruckForm />)}
      </div>
      </Modal>
       </div>

    );
  }
}

FloatingButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

const FloatingActionButtons = withStyles(styles)(FloatingButtons);

export default FloatingActionButtons;
