import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

import { Link } from 'react-router-dom';

class Sidebar extends Component {
  componentDidMount() {
    var elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250
    });
  }

  render() {
    return (
      <header>
        <nav>
          <div>
            <ul id='slide-out' className='sidenav'>
              <li id='user'>
                <Link to='/profile'>
                  <figure>
                    <img src='./assets/LOGO-bubbles.svg' alt='Logo' />
                  </figure>
                  <p>Carolina Ramírez J.</p>
                </Link>
              </li>
              <li>
                <div className='divider' />
              </li>
              <li>
                <a href='' className='waves-effect'>
                  <i className='material-icons'>find_in_page</i>{' '}
                  <p>Revisión de documentos</p>
                </a>
              </li>
              <li>
                <a href='' className='waves-effect'>
                  <i className='material-icons'>school</i>{' '}
                  <p>Tus opciones de titulación</p>
                </a>
              </li>
              <li>
                <a href='' className='waves-effect'>
                  <i className='material-icons'>directions_walk</i>{' '}
                  <p>Tu paso a paso</p>
                </a>
              </li>
              <li className='waves-effect'>
                <Link to='/'>
                  <i className='material-icons'>close</i>Cerrar sesión
                </Link>
              </li>
            </ul>
            <a href='#' data-target='slide-out' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Sidebar;
