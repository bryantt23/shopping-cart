import React, { Component } from 'react';

export class ProductPreview extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <img style={{ maxHeight: 300 }} alt='blah' src={product.src} />

        <p>
          {product.name} ${product.price}
        </p>
      </div>
    );
  }
}

export default ProductPreview;
