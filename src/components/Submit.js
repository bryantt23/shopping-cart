import React, { Component } from 'react';
import ProductPreview from './ProductPreview';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Submit extends Component {
  renderProductsInCart() {
    const { cart, products } = this.props;

    let arr = [];
    for (const [productId, count] of Object.entries(cart)) {
      console.log(`${productId}: ${count}`);
      const product = products[productId];
      arr.push(
        <div key={productId} id={productId}>
          <ProductPreview product={product} />x <span>{count}</span>
        </div>
      );
    }

    return arr;
  }

  //get total cost from state

  render() {
    const productsInCart = this.renderProductsInCart();

    return (
      <div>
        <h1>Your order has been placed</h1>
        <h3>
          {this.props.itemsInCart}{' '}
          {this.props.itemsInCart === 1 ? ' item' : ' items'} for a Total Cost
          of ${this.props.totalCost}
        </h3>
        {productsInCart}
      </div>
    );
  }
}

export default Submit;
