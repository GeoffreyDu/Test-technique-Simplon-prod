import React, { Component } from 'react';
import Contact from './Contact'
import AddContacts from './AddContacts'
import '../CSS/ContactList.css'

//il y a deux contacts tests pour faire un exemple
class ContactList extends Component {
  state= {
    research: "",
    contacts:[
      {
        name: "kujo",
        firstname: "jotaro",
        mail: "kujotaro@mail.com",
        tel:"0101010101",
        fonction: "hero"
      },
      {
        name: "star",
        firstname: "joseph",
        mail: "jojo@mail.com",
        tel:"0203030302",
        fonction: "second"
      }
    ]
  }
//permet de capter les changements dans les inputs
  changer = (e) =>{
      this.setState({
        [e.target.name] : e.target.value
      })
  }
//efface en reprenant le state sauf l'élément que l'on veut supprimer
  removeContact = index =>
  this.setState({
    contacts: [
      ...this.state.contacts.slice(0, index),
      ...this.state.contacts.slice(index+1)
    ]
  })

//récupère les valeurs des inputs et les ajoute dans le state (le preventdefault évite que la page se réactualise)
  AddingContact = (e) =>{
    e.preventDefault()
    console.log(this.state);
    this.setState({
      contacts:[
        {
          name: this.state.name,
          firstname: this.state.firstname,
          mail: this.state.mail,
          tel:this.state.tel,
          fonction: this.state.fonction
        },
        ...this.state.contacts
      ]
    })
  }

  render() {
    //permet de filtrer les contacts via la barre de recherche
    let filteredContacts = this.state.contacts.filter((contact)=>{
        return contact.name.toLowerCase().indexOf(this.state.research) !== -1
    })
    //on transmet des valeurs et des fonctions vers le composant AddContacts et Contact(que l'on map pour créer les nouveaux contacts)
    return (
      <div className='fond'>
        <h1>Rechercher un contact</h1>
        <input className="recherche" type="text" name="research" onChange={this.changer} placeholder="Recherche" value={this.state.research}/>
        <h1 className='h1titre'>Ajouter un contact</h1>
      <div className="dispo">
        <div>{<AddContacts change={(e)=>this.changer(e)} newContact={(e)=>this.AddingContact(e)} canSubmit={()=>this.canBeSubmitted()}/>}</div>
        <div>
          {filteredContacts.map((people, i) => <Contact
          key={i}
          name={people.name}
          firstname={people.firstname}
          mail={people.mail}
          tel={people.tel}
          fonction={people.fonction}
          handleContact={()=>this.removeContact(i)} />)}
        </div>
      </div>
    </div>
    );
  }

}

export default ContactList;
