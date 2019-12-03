import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class StudentForm extends Component {
  render() {
    return (
      <Fragment>
        <h2>Verifica tu información</h2>

        <form action=''>
          <label htmlFor=''>
            <p>Nombre</p>
          </label>
          <input type='text' value='Carolina Ramírez Jiménez' readonly />
          <label htmlFor=''>
            <p>Fecha de Nacimiento</p>
          </label>
          <input type='text' value='10 marzo 1999' readonly />
          <label htmlFor=''>
            <p>Carrera</p>
          </label>
          <input type='text' value='Comunicación' readonly />
          <label htmlFor=''>
            <p>Status</p>
          </label>
          <input type='text' value='Estudiante' readonly />
          <label htmlFor=''>
            <p>Semestre</p>
          </label>
          <input type='text' value='Octavo' readonly />
          <label htmlFor=''>
            <p>Año de Ingreso</p>
          </label>
          <input type='text' value='2015' readonly />
          <Link to='/basic-requirements'>
            <button>Confirmar</button>
          </Link>
          <p>
            ¿Tu información no corresponde? <br /> Comunícate al 57 45 36 32
          </p>
        </form>
      </Fragment>
    );
  }
}

export default StudentForm;
