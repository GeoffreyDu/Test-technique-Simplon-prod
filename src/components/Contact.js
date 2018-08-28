import React from 'react';
import '../CSS/Contact.css'

const Contact = (props) => {
  return(
    <li className="cadre">
      <div>Nom: {props.name}</div>
      <div>Prénom: {props.firstname}</div>
      <div>Mail: {props.mail}</div>
      <div>Téléphone: {props.tel}</div>
      <div>Fonction: {props.fonction}</div>
      <div>
        <button>Modifier</button>
        <button onClick={props.handleContact}>Supprimer</button>
      </div>
    </li>
  )
};

export default Contact;
