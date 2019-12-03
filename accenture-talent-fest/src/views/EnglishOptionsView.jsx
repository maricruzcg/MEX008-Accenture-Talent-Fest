import React, { Component, Fragment } from 'react';
import Navbar from '../components/Navbar';
import EnglishOptions from '../components/EnglishOptions';

class EnglishOptionsView extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <EnglishOptions />
      </Fragment>
    );
  }
}

export default EnglishOptionsView;
