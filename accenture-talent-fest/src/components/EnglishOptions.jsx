import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EnglishOptions extends Component {
  render() {
    return (
      <section>
        <h2>Opciones para obtener tu certificado de idiomas</h2>

        <div>
          <Link to='/calendar'>
            <button>Examen acreditación por la coordinación del programa de idiomas</button>
          </Link>
          <button>Examen acreditación por la Escuela Nacional de Lenguas, Linguística y Traducción</button>
          <button id='question'>?</button>
        </div>
      </section>
    );
  }
}

export default EnglishOptions;
