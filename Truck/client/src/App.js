import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import { connect } from 'react-redux';
import { getItems } from './actions/itemActions';
import PropTypes from 'prop-types';


import DashBoard from './components/dashboard/dashboard';
import Order from './components/order/order';
import Error from './components/error/error';

class App extends Component {
  /*state = {
    items: [
        {vehNum:1, driverName:'Driver Name1', driverNum:'Driver Number1', orders:[{orderId: 1}, {orderId: 2}, {orderId: 3}]},
        {vehNum:2, driverName:'Driver Name2', driverNum:'Driver Number2', orders:[{orderId: 4}, {orderId: 5}, {orderId: 6}]},
        {vehNum:3, driverName:'Driver Name3', driverNum:'Driver Number3', orders:[{orderId: 6}, {orderId: 7}, {orderId: 8}]},
      ],
  }*/



  render() {

    return (
      <Provider store={store}>
        <div className="App">
            <Switch>
              <Route path="/" render={props => <DashBoard/>} exact/>
              <Route
              path={`/order/:vehiclenumber`}
              render={(props) => <Order vehiclenumber={props.match.params.vehiclenumber}/>}
            />
              <Route component={Error} />
            </Switch>
        </div>
        </Provider>
    );
  }
}



export default App;
