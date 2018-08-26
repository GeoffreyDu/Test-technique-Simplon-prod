import React, { Component } from 'react';
import Contact from './Contact'

class ContactList extends Component {
  state= {
    contacts:[
      {
        name: "ded",
        firstname: "joe",
        mail: "mail1@jj.fr",
        tel:"0102030405",
        fonction: "flemmard pro"
      },
      {
        name: "kujo",
        firstname: "jotaro",
        mail: "mail2@gg.fr",
        tel:"0100000000",
        fonction: "hero"
      }
    ]
  }

  onchange = e =>{
      this.setState({
        [e.target.name] : e.target.value
      })
  }

  removeContact = index =>
  this.setState({
    contacts: [
      ...this.state.contacts.slice(0, index),
      ...this.state.contacts.slice(index+1)
    ]
  })

  render() {
    return (
      <div>{this.state.contacts.map((people, i) => <Contact
          key={i}
          name={people.name}
          firstname={people.firstname}
          mail={people.mail}
          tel={people.tel}
          fonction={people.fonction}
          removeContact={()=>this.removeContact(i)} />)}
      </div>
    );
  }

}

export default ContactList;
