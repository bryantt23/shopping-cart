import React, { Component } from 'react';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToOrderClicked: false
    };
  }
  render() {
    const arr = this.props.productId.history.location.pathname.split('/');
    const productId = arr[arr.length - 1];
    return (
      <div>
        Product productId={productId}
        {/* {this.props} */}
        {/* {JSON.stringify(this.props.products)} */}
        <br></br>
        <p>hiii</p>
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

export default Product;
