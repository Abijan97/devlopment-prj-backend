import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">CS Car Sales</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Orders</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create new Order</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Add Customer</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}