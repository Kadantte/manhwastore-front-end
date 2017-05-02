import React from 'react';

class Product extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
      <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Product;
