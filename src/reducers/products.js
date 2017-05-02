import { GET_PRODUCTS, TEST } from '../actions/types';

export default function (state=[], action) {
  switch(action.type){
    case GET_PRODUCTS:
      return action.payload;
    case TEST:
      return state;
    default:
      return state;
  }
}
