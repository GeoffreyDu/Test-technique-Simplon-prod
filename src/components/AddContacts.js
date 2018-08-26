import React, { Component } from 'react';

class AddContacts extends Component {
  
  render() {
    return (
      <div>
          <h1>Ajouter contact</h1>
          <form>
          <div class="form-group">
            <label for="InputName">Nom</label>
            <input type="text" class="form-control" id="InputName" aria-describedby="emailHelp" placeholder="Entrez le nom"/>
            </div>
          <div class="form-group">
            <label for="InputFirstname">Prénom</label>
            <input type="text" class="form-control" id="InputFirstname" placeholder="Entrez le prénom"/>
          </div>
          <div class="form-group">
            <label for="InputMail">Mail</label>
            <input type="mail" class="form-control" id="InputMail" placeholder="Entrez le mail"/>
          </div>
          <div class="form-group">
            <label for="InputTel">Téléphone</label>
            <input type="number" class="form-control" id="InputTel" placeholder="Entrez le numéro de téléphone"/>
          </div>
          <div class="form-group">
            <label for="InputFonction">Fonction</label>
            <input type="text" class="form-control" id="InputFonction" placeholder="Entrez la fonction"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      </div>
    );
  }

}

export default AddContacts;
