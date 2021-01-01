import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

//TODO if they add then add proceed to checkout button
function Catalog(props) {
  const history = useHistory();
  const products = props.products.map(product => (
    <div
      onClick={() => {
        console.log(product.id);

        history.push(`/product/${product.id}`);
      }}
    >
      <img
        style={{ maxHeight: 300 }}
        alt='blah'
        src={product.src}
        key={product.id}
      />

      <p key={product.id}>
        {product.name} ${product.price}
      </p>
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
