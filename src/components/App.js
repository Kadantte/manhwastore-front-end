import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getProducts from '../actions/list_products.js';
import Product from './Product';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getProducts();
  }

  renderProducts(){
    return this.props.Products.map(product => {
      return <Product key={product.id} {...product} />
    });
  }

  render() {
    return(
      <div style={{textAlign: 'center'}}>
        {this.renderProducts()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Products: state.Products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getProducts: getProducts
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
