import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Header from './components/Header';
import Product from './components/Product';
import { Component } from 'react';
import image0 from './images/protein-powder.jpg';
import image1 from './images/greens.jpg';
import image2 from './images/healthy-fats.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: { 1: 1, 2: 2 },
      itemsInCart: 0
    };
  }

  updateCart = commandObject => {
    const amount = 1;
    const { command, id } = commandObject;
    if (command === 'remove') {
      const updatedCart = this.state.cart;
      delete updatedCart.id;
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
      (acc, cur) => acc + cur
    );
    this.setState({ itemsInCart: count });
  };

  render() {
    const products = [
      { id: 0, name: 'Protein powder', price: 30.0, src: image0 },
      { id: 1, name: 'Greens', price: 15.0, src: image1 },
      { id: 2, name: 'Healthy fats', price: 10.0, src: image2 }
    ];
    const { itemsInCart, cart } = this.state;

    return (
      <Router>
        <div>
          <Header cart={cart} itemsInCart={itemsInCart} />
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
