import axios from 'axios';
import { GET_ITEM, ADD_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING} from './types';


export const getItems =  dispatch => {
   // dispatch(setItemsLoading());
    axios
      .get('/api/items')
      .then(res => dispatch({type: GET_ITEMS,
      payload: res.data}))
};

/*export const getItems = ()=>{
  return{
    type: GET_ITEMS
  }
}
*/
export const deleteItem = id => dispatch => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const addItem = item =>dispatch => {
  axios.post('/api/items',item).then(res => dispatch({
    type: ADD_ITEM,
    payload: res.data
  })
)
};

export const setItemsLoading = ()=> {
  return {
    type: ITEMS_LOADING
  };
};

