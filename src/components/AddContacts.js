import React from 'react';
import '../CSS/AddContacts.css'

const AddContacts = (props) =>{
    return (
      <div>
          <form>
          <div className="form-group">
            <label htmlFor="InputName">Nom</label>
            <input name="name" onChange={props.change} type="textarea" className="form-control" id="InputName" aria-describedby="emailHelp" placeholder="Entrez le nom" value={props.name}/>
            </div>
          <div className="form-group">
            <label htmlFor="InputFirstname">Prénom</label>
            <input name="firstname" onChange={props.change} type="text" className="form-control" id="InputFirstname" placeholder="Entrez le prénom" value={props.firstname}/>
          </div>
          <div className="form-group">
            <label htmlFor="InputMail">Mail</label>
            <input name="mail" onChange={props.change} type="mail" className="form-control" id="InputMail" placeholder="Entrez le mail" value={props.mail}/>
          </div>
          <div className="form-group">
            <label htmlFor="InputTel">Téléphone</label>
            <input name="tel" onChange={props.change} type="text" className="form-control" id="InputTel" placeholder="Entrez le téléphone" maxLength={10} value={props.tel}/>
          </div>
          <div className="form-group">
            <label htmlFor="InputFonction">Fonction</label>
            <input name="fonction" onChange={props.change} type="text" className="form-control" id="InputFonction" placeholder="Entrez la fonction" value={props.fonction}/>
          </div>
          <button type="submit" className="boutons" onClick={props.newContact}>Submit</button>
          </form>
      </div>
    );
}

export default AddContacts;
