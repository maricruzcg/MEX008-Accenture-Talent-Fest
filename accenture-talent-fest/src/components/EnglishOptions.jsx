import React, { Component, Fragment } from 'react';

class EnglishOptions extends Component {
  render() {
    return (
      <Fragment>
        <h2>Opciones para obtener tu certificado de idiomas</h2>

        <div>
          <button>Examen C.U.</button>
          <button>Externo</button>
          <button id='question'>?</button>
        </div>
      </Fragment>
    );
  }
}

export default EnglishOptions;
