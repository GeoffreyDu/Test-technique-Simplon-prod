import React from 'react';

const Contact = (props) => {
  return(
    <li className="cadre">
      <input value={props.name}/>
      <input value={props.firstname}/>
      <input value={props.mail}/>
      <input value={props.tel}/>
      <input value={props.fonction}/>
      <div>
        <button>Modifier</button>
        <button onClick={props.removeContact}>Supprimer</button>
      </div>
    </li>
  )
};

export default Contact;
