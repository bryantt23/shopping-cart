import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Header from './components/Header';
import Product from './components/Product';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: { 1: 2 }
    };
  }

  updateCart = commandObject => {
    const { command, amount, id } = commandObject;
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
      const updatedCart = this.state.cart[id];
      updatedCart[id] = updatedCart[id] - amount;
      this.setState({ cart: updatedCart });
    }
  };

  render() {
    const products = [
      { id: 0, name: 'Protein powder', price: 30.0 },
      { id: 1, name: 'Greens', price: 15.0 },
      { id: 2, name: 'Healthy fats', price: 10.0 }
    ];
    const cart = this.state.cart;

    return (
      <Router>
        <div>
          <Header />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {/* <Route path='/about'>
            <About />
          </Route>*/}
            <Route path='/catalog'>
              <Catalog products={products} />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            {/* https://stackoverflow.com/questions/52555147/pass-url-parameters-and-props-to-routes-rendered-component */}
            <Route
              path='/products'
              render={productId => (
                <Product
                  productId={productId}
                  cart={cart}
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
