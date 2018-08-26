import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import AddContacts from './components/AddContacts'
import ContactList from './components/ContactList'

class Routes extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" exact component={AddContacts} />
          <Route path="/contacts" exact component={ContactList} />
        </Switch>
      </div>
    );
  }

}

export default Routes ;
