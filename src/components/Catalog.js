import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import ProductPreview from './ProductPreview';

//TODO if they add then add proceed to checkout button
function Catalog(props) {
  const history = useHistory();
  const products = props.products.map(product => (
    <div
      key={product.id}
      onClick={() => {
        history.push(`/product/${product.id}`);
      }}
    >
      <ProductPreview key={product.id} product={product} />
    </div>
  ));
  return (
    <div>
      Catalog!!!!
      {products}
    </div>
  );
}

export default Catalog;
