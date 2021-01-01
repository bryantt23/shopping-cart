import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Header from './components/Header';
import Product from './components/Product';
import Submit from './components/Submit';
import { Component } from 'react';
import image0 from './images/protein-powder.jpg';
import image1 from './images/greens.jpg';
import image2 from './images/healthy-fats.jpg';

const products = [
  { id: 0, name: 'Protein powder', price: 30.0, src: image0 },
  { id: 1, name: 'Greens', price: 15.0, src: image1 },
  { id: 2, name: 'Healthy fats', price: 10.0, src: image2 }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: { 0: 1, 1: 2, 2: 4 },
      itemsInCart: 0,
      totalCost: 0
    };
  }

  updateCart = commandObject => {
    const amount = 1;
    const { command, id } = commandObject;
    if (command === 'remove') {
      let updatedCart = this.state.cart;
      delete updatedCart[id];
      this.setState({ cart: updatedCart });
    } else if (command === 'increase') {
      let updatedCart = this.state.cart;
      if (!this.state.cart[id]) {
        updatedCart[id] = 0;
      }
      updatedCart[id] = updatedCart[id] + amount;
      this.setState({ cart: updatedCart });
    } else if (command === 'decrease') {
      let updatedCart = this.state.cart;
      updatedCart[id] = updatedCart[id] - amount;
      this.setState({ cart: updatedCart });
    }
    const count = Object.values(this.state.cart).reduce(
      (acc, cur) => acc + cur,
      0
    );

    let totalCost = 0;
    for (let prop in this.state.cart) {
      let key = prop,
        ct = this.state.cart[prop];
      totalCost += products[key].price * ct;
    }

    this.setState({ itemsInCart: count, totalCost: totalCost });
  };

  render() {
    const { itemsInCart, cart, totalCost } = this.state;

    return (
      <Router>
        <div>
          <Header cart={cart} itemsInCart={itemsInCart} totalCost={totalCost} />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/catalog'>
              <Catalog products={products} />
            </Route>
            <Route path='/cart'>
              <Cart
                cart={cart}
                products={products}
                updateCart={this.updateCart}
              />
            </Route>
            <Route path='/submit'>
              <Submit
                cart={cart}
                products={products}
                itemsInCart={itemsInCart}
                totalCost={totalCost}
              />
            </Route>
            {/* https://stackoverflow.com/questions/52555147/pass-url-parameters-and-props-to-routes-rendered-component */}
            <Route
              path='/product'
              render={productId => (
                <Product
                  productId={productId}
                  cart={cart}
                  products={products}
                  updateCart={this.updateCart}
                />
              )}
            />
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
