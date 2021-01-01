import React, { Component } from 'react';
import ProductPreview from './ProductPreview';

export class Cart extends Component {
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

  renderProductsInCart() {
    const { cart, products } = this.props;

    let arr = [];
    for (const [productId, count] of Object.entries(cart)) {
      console.log(`${productId}: ${count}`);
      const product = products[productId];
      arr.push(
        <div id={productId}>
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
        {JSON.stringify(this.props)}
        Cart!!!!
        {productsInCart}
      </div>
    );
  }
}

export default Cart;
