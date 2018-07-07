import React, { Component } from 'react';
import ButtonAppBar from '../appbar/appbar';
import FloatingActionButtons from '../fabButtons/fabButton';

import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';
import PropTypes from 'prop-types';
import { matchPath } from 'react-router-dom';

class Order extends Component{
  //var veh = data.find(v => v.vehNum === Number(match.params.vehNum));

  componentDidMount() {
    this.props.getItems;
  }

  render(){
    const {items} = this.props.item;
    var veh = items.find(v => v.vehiclenumber === Number(this.props.vehiclenumber));
    return (<div>
    <ButtonAppBar color="secondary"/>
    <h1>Orders</h1>
    <h2>{veh.drivername}</h2>
    <h2>{veh.driverphonenumber}</h2>
    <FloatingActionButtons color='secondary'/>
  </div>);
  }
}

Order.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
})


export default connect(mapStateToProps, {getItems})(Order);
