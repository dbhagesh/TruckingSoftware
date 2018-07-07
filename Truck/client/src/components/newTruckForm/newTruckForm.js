import React, { Component } from 'react';
import './newTruckForm.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { addItem } from '../../actions/itemActions';
import { connect } from 'react-redux';

class NewTruckForm extends Component {
  state = {
    modal: false,
    drivername: '',
    driverphonenumber: '',
    vehiclenumber:''
  }; 
  /*toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }*/
  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      drivername: this.state.drivername,
      vehiclenumber: this.state.vehiclenumber,
      driverphonenumber: this.state.driverphonenumber
    };
    this.props.addItem(newItem);

  };
  
  render() {
    return (
      <div className='truckForm'>
        <h1>Add New Vehicle</h1>
        <form name="newTruckForm" onSubmit={this.onSubmit} method = "post" action="/addname">
            <FormControl fullWidth >
            <TextField id="vehiclenumber" label="Vehicle Number" margin="normal" name="vehiclenumber"/>
            </FormControl>

            <FormControl fullWidth >
            <TextField id="drivername" label="Driver Name" margin="normal" name="drivername"/>
            </FormControl>

            <FormControl fullWidth >
            <TextField id="driverphonenumber" label="Driver's Phone Number" margin="normal" name="driverphonenumber"/>
            </FormControl>

            <div className='submitButton'>
            <Button variant="contained" color="primary" className='submitButton' value="send-new-truck">
              Submit
            </Button>
            </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(NewTruckForm);