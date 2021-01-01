import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/catalog'>
          <button onClick={() => {}}>Shop and get healthy</button>
        </Link>
      </div>
    );
  }
}

export default Home;
