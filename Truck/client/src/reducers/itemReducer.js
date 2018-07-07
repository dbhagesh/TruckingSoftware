import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING} from '../actions/types';
/*
   {vehNum:1, driverName:'Driver Name1', driverNum:'Driver Number1', orders:[{orderId: 1}, {orderId: 2}, {orderId: 3}]},
        {vehNum:2, driverName:'Driver Name2', driverNum:'Driver Number2', orders:[{orderId: 4}, {orderId: 5}, {orderId: 6}]},
        {vehNum:3, driverName:'Driver Name3', driverNum:'Driver Number3', orders:[{orderId: 6}, {orderId: 7}, {orderId: 8}]},
{vehiclenumber:34, drivername:'Driver Name65', driverphonenumber:556, orders:[{orderId: 1}, {orderId: 2}, {orderId: 3}]}

        */

const initialState = {
    items: [],
    loading: false
};

export default function(state = initialState, action) {
  
    switch(action.type){
      case GET_ITEMS:  
        return {
          ...state,
          items: action.payload,
          loading: false
        };
        
      case DELETE_ITEM:
        return {
          ...state,
          items: state.items.filter(item => item.id!== action.payload)
        };
  
      case ADD_ITEM:
        return {
          ...state,
          items: [action.payload, ...state.items]
        };
        
      case ITEMS_LOADING:
        return {
          ...state,
          loading: true
        };
  
      default:
        return state;
  
  
      
    }
  
  
  }