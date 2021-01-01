import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  const products = [
    { id: 0, name: 'Protein powder', price: 30.0 },
    { id: 1, name: 'Greens', price: 15.0 },
    { id: 2, name: 'Healthy fats', price: 10.0 }
  ];

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
            render={productId => <Product productId={productId} />}
          />
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
