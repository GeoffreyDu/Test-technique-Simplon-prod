import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Accueil</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/add">Créer contact</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="contacts">Contacts</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">Disabled</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}

export default Navbar;
