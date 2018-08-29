import React from 'react';
import '../CSS/Contact.css'

//on a ici le modèle d'un contact;. On récupère les différentes valeurs et on les met dans des div pour les afficher
// on récupère la fonction removeContact pour effacer dans le button au niveau du onClick
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
