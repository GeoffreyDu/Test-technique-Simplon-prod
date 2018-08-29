import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "../CSS/Navbar.css"


class Navbar extends Component {

  render() {
    return (
        <nav className="navbar">
          <ul className="listenavbar">
            <li className="itembarre">
              <img src='/images/simplon2.png' alt='logo'></img>
            </li>
            <li className="itembarre">
              <Link className="mot" to="/">Accueil</Link>
            </li>
            <li className="itembarre">
              <Link className="mot" to="contacts">Les contacts</Link>
            </li>
          </ul>
      </nav>
    );
  }

}

export default Navbar;
