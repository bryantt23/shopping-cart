import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <nav>
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
          <li style={{ float: 'right', paddingLeft: 5 }}>
            <p class='header-text'>Total cost: ${this.props.totalCost}</p>
          </li>
          <li style={{ float: 'right' }}>
            <p class='header-text'>Cart Count: {this.props.itemsInCart}</p>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
