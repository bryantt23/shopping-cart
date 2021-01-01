import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <nav>
        <p>Items in shopping cart: {this.props.itemsInCart}</p>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          <li>
            <Link to='/catalog'>Catalog</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
