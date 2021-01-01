import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addToOrderClicked: false
    };
  }

  addToCart = productId => {
    this.setState({ addToOrderClicked: true });

    const commandObject = {
      command: 'increase',
      id: productId
    };
    this.props.updateCart(commandObject);
  };

  render() {
    const arr = this.props.productId.history.location.pathname.split('/');
    const productId = arr[arr.length - 1];
    return (
      <div>
        <img
          style={{ maxHeight: 300 }}
          alt='blah'
          src={this.props.products[productId].src}
          key={productId}
        />
        <p>
          {this.props.products[productId].name} $
          {this.props.products[productId].price}
        </p>
        <button onClick={() => this.addToCart(productId)}>Add to Cart</button>
        {}
        {this.state.addToOrderClicked && (
          <Link to='/cart'>
            <button onClick={() => {}}>Complete Order</button>
          </Link>
        )}
        <Link to='/catalog'>
          <button onClick={() => {}}>Go Back</button>
        </Link>
      </div>
    );
  }
}

export default Product;
