import React from 'react';

import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { NavLink, Route, BrowserRouter, Switch } from 'react-router-dom';
import Order from '../order/order';
import './dashCards.css';

/*const styles = theme => ({

});*/

const DashCard = (props) => (
    <div>
        <Card className='card'>
          <CardHeader
            title={props.data.vehiclenumber}
            subheader={props.data.drivername}
          />
          <CardContent >
          <NavLink to={`/order/${props.data.vehiclenumber}`} className='link'><Button variant="contained" color="primary" className='submitButton'>
            More
          </Button></NavLink>
          </CardContent>
        </Card>
      </div>
)

/*DashCard.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

export default DashCard;
