import React from 'react';
import '../CSS/Contact.css'

const Contact = (props) => {
  return(
    <li className="cadre">
      <div className="intitule">
      <div><strong>Nom: </strong>{props.name}</div>
      <div><strong>Prénom: </strong>{props.firstname}</div>
      <div><strong>Mail: </strong>{props.mail}</div>
      <div><strong>Téléphone: </strong>{props.tel}</div>
      <div><strong>Fonction: </strong>{props.fonction}</div>
      </div>
      <div className='boutons'>
        <button>Modifier</button>
        <button onClick={props.handleContact}>Effacer</button>
      </div>
    </li>
  )
};

export default Contact;
