import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Vacancy</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Jobs</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">JOB</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Services</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
            </ul>
          <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
              <Link to="/login" className="nav-link ml-auto">Login</Link>
            </li>
            <li className="navbar-item">
              <Link to="/register" className="nav-link ml-auto" >Sign UP</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}