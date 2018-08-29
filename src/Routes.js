import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import ContactList from './components/ContactList'

//ici figurent les routes créees via react router dom
class Routes extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contacts" exact component={ContactList} />
        </Switch>
      </div>
    );
  }

}

export default Routes ;
