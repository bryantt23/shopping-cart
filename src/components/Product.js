import React, { Component } from 'react';

export class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Product
        {this.props.id}
        {JSON.stringify(this.props.products)}
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

export default Product;
