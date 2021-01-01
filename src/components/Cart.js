import React, { Component } from 'react';

export class Cart extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(this.props)}
        Cart!!!!
      </div>
    );
  }
}

export default Cart;
