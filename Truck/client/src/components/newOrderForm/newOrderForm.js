import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import './newOrderForm.css';


class NewOrderForm extends Component {
  render() {
    return (
      <div className="orderForm">
      <h1>Add New Order</h1>
      <form name="newOrderForm">
          <FormControl fullWidth >
          <TextField id="order-id" label="Order Id" margin="normal" name="order-id"/>
          </FormControl>

          <TextField id="creaser-name" label="Creaser Name" margin="normal" name="creaser-name"/>&nbsp;&nbsp;&nbsp;<TextField id="fuel-vendor" label="Fuel Vendor" margin="normal" name="fuel-vendor"/>&nbsp;&nbsp;&nbsp;

          <TextField id="rate" label="Rate" margin="normal" name="rate"/>&nbsp;&nbsp;&nbsp;<TextField id="start-kms" label="Start Kms" margin="normal" name="start-kms"/>&nbsp;&nbsp;&nbsp;
          <TextField id="end-km" label="End Km" margin="normal" name="end-km"/>&nbsp;&nbsp;&nbsp;<TextField id="weight" label="Weight" margin="normal" name="weight"/>&nbsp;&nbsp;&nbsp;

          <TextField id="trip-kms" label="Trip Kms" margin="normal" name="trip-kms"/>&nbsp;&nbsp;&nbsp;

          <TextField id="trip-hrs" label="Trip Hrs" margin="normal" name="trip-hrs"/>&nbsp;&nbsp;&nbsp;<TextField id="fuel-lts" label="Fuel lts" margin="normal" name="fuel-lts"/>&nbsp;&nbsp;&nbsp;
          <TextField id="fuel-rate" label="Fuel Rate" margin="normal" name="fuel-rate"/>&nbsp;&nbsp;&nbsp;<TextField id="revenue" label="Revenue" margin="normal" name="revenue"/>

          <div className='submitButton'>
          <Button variant="contained" color="secondary" className='submitButton' value="send-new-form">
            Submit
          </Button>
          </div>
      </form>
      </div>
    );
  }
}

export default NewOrderForm;
