import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginView extends Component {
  render() {
    return (
      <form>
        <label htmlFor=''>
          <p>Ingresa tu matrícula:</p>
          <input type='text' placeholder='Matrícula' required />
        </label>
        <label htmlFor=''>
          <p>Ingresa tu contraseña:</p>
          <input type='password' placeholder='Contraseña' required />
        </label>
        <Link to='/confirm-form'>
          <button>Ingresar</button>
        </Link>
      </form>
    );
  }
}

export default LoginView;
