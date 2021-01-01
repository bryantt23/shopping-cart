import React, { Component } from 'react';
import ProductPreview from './ProductPreview';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Cart extends Component {
  constructor(props) {
    super(props);
  }

  increaseInCart = productId => {
    const commandObject = {
      command: 'increase',
      id: productId
    };
    this.props.updateCart(commandObject);
  };

  decreaseFromCart = productId => {
    const commandObject = {
      command: 'decrease',
      id: productId
    };
    this.props.updateCart(commandObject);
  };

  removeFromCart = productId => {
    const commandObject = {
      command: 'remove',
      id: productId
    };
    this.props.updateCart(commandObject);
  };

  renderProductsInCart() {
    const { cart, products } = this.props;

    let arr = [];
    for (const [productId, count] of Object.entries(cart)) {
      console.log(`${productId}: ${count}`);
      const product = products[productId];
      arr.push(
        <div key={productId} id={productId}>
          <ProductPreview product={product} />
          <div>
            <button
              disabled={count === 1}
              onClick={() => this.decreaseFromCart(productId)}
            >
              -
            </button>
            <span>{count}</span>{' '}
            <button onClick={() => this.increaseInCart(productId)}>+</button>
            <button onClick={() => this.removeFromCart(productId)}>
              Remove from cart
            </button>
          </div>
        </div>
      );
    }

    return arr;
    //render only ids in cart using product preview
    //under product preview show how many of that product in cart
    //

    //maybe add another component to show count & up & down button & delete button
  }

  //get total cost from state

  render() {
    const productsInCart = this.renderProductsInCart();

    return (
      <div>
        <h1>Your cart</h1>
        {productsInCart.length > 0 ? (
          <div>
            <Link to='/submit'>
              <button onClick={() => {}}>Submit Order</button>
            </Link>
            {productsInCart}
          </div>
        ) : (
          <h3>Your cart is empty</h3>
        )}
      </div>
    );
  }
}

export default Cart;
