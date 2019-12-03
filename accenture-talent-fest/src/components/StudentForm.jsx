import React, { Component } from 'react';

class StudentForm extends Component {
  render() {
    return (
      <form action="">
        <label htmlFor="">
          <p>Número de Cuenta</p>
        </label>
        <input type="text" value="3489153896" readonly/>
        <label htmlFor="">
          <p>Nombre</p>
        </label>
        <input type="text" value="Carolina Ramírez Jiménez" readonly/>
        <label htmlFor="">
          <p>Fecha de Nacimiento</p>
        </label>
        <input type="text" value="10 marzo 1999" readonly/>
        <label htmlFor="">
          <p>Carrera</p>
        </label>
        <input type="text" value="Comunicación" readonly/>
        <label htmlFor="">
          <p>Status</p>
        </label>
        <input type="text" value="Estudiante" readonly/>
        <label htmlFor="">
          <p>Semestre</p>
        </label>
        <input type="text" value="Octavo" readonly/>
        <label htmlFor="">
          <p>Año de Ingreso</p>
        </label>
        <input type="text" value="2015" readonly/>
        <p>Recuerda revisar tus datos personales. <br/> Comunícate al 57 45 36 32</p>

      </form>
    );
  }
}

export default StudentForm;
