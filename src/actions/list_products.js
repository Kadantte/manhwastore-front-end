import { GET_PRODUCTS } from './types';
import axios from 'axios';

const getProducts = () => {
  return dispatch => {
    axios.get('http://localhost/api/products').then(response => {
      dispatch(listProducts(response.data));
    });
  }
}

function listProducts(products){
  return {
    type: GET_PRODUCTS,
    payload: products
  };
}

export default getProducts;
