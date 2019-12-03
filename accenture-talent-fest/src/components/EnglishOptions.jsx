import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class EnglishOptions extends Component {
  render() {
    return (
      <Fragment>
        <h2>Opciones para obtener tu certificado de idiomas</h2>

        <div>
          <Link to='/calendar'>
            <button>Examen C.U.</button>
          </Link>
          <button>Externo</button>
          <button id='question'>?</button>
        </div>
      </Fragment>
    );
  }
}

export default EnglishOptions;
