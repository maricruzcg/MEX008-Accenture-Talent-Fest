import React, { Component, Fragment } from 'react';

class BasicRequirements extends Component {
  render() {
    return (
      <Fragment>

      <h1>Elige el registro que necesitas cubrir</h1>

      <form action="#">
    <p>
      <label>
        <input type="checkbox" checked="checked" disabled="disabled"/>
        <span>100% de créditos del plan de estudios y el número total de asignaturas.</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" checked="checked" disabled="disabled"/>
        <span>Acreditado servicio social. Carta Única de Liberación.</span>
      </label>
    </p>
    <button class="btn waves-effect waves-light" type="submit" name="action">Acreditación segundo idioma
    <i class="material-icons right">send</i>
  </button>
   
  </form>
      </Fragment>
    );
  }
}

export default BasicRequirements;
