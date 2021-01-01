import React, { Component } from 'react';
import ProductPreview from './ProductPreview';

export class Cart extends Component {
  renderProductsInCart() {
    const { cart, products } = this.props;

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
      </div>
    );
  }
}

export default Cart;
