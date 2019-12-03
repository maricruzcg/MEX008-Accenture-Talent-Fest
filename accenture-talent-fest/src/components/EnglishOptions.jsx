import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EnglishOptions extends Component {
  render() {
    return (
      <section id='english-certificate'>
        <h2>Opciones para obtener tu certificado de idiomas</h2>

        <div>
          <Link to='/calendar'>
            <button className='english-btn btn waves-effect waves-light'>
              Examen acreditación por la coordinación del programa de idiomas
            </button>
          </Link>

          <button className='english-btn btn waves-effect waves-light'>
            Examen acreditación por la Escuela Nacional de Lenguas, Linguística
            y Traducción
          </button>

          <button id='question'>?</button>
        </div>
      </section>
    );
  }
}

export default EnglishOptions;
