import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contacts">Les contacts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Disabled</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}

export default Navbar;
