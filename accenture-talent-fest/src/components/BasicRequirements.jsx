import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BasicRequirements extends Component {
  render() {
    return (
      <section>
        <h2>Elige el registro que necesitas cubrir</h2>

        <form action='#'>
          <p>
            <label>
              <input type='checkbox' checked='checked' disabled='disabled' />
              <span>
                100% de créditos del plan de estudios y el número total de
                asignaturas.
              </span>
            </label>
          </p>
          <p>
            <label>
              <input type='checkbox' checked='checked' disabled='disabled' />
              <span>
                Acreditado servicio social. Carta Única de Liberación.
              </span>
            </label>
          </p>
          <Link to='/english-option'>
            <button
              class='btn waves-effect waves-light'
              type='submit'
              name='action'>
              Acreditación segundo idioma
              <i class='material-icons right'>send</i>
            </button>
          </Link>
        </form>
      </section>
    );
  }
}

export default BasicRequirements;
