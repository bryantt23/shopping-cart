import React, { Component } from 'react';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToOrderClicked: false
    };
  }

  addToCart = productId => {
    const commandObject = {
      command: 'increase',
      amount: 1,
      id: productId
    };
    this.props.updateCart(commandObject);
  };

  render() {
    const arr = this.props.productId.history.location.pathname.split('/');
    const productId = arr[arr.length - 1];
    return (
      <div>
        Product productId={productId}
        {/* {this.props} */}
        {JSON.stringify(this.props.cart)}
        <br></br>
        <p>hiii</p>
        {JSON.stringify(this.props)}
        <button onClick={() => this.addToCart(productId)}>Add to Cart</button>
        {}
      </div>
    );
  }
}

export default Product;
