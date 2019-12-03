import React, { Component, Fragment } from 'react';
import BasicRequirements from '../components/BasicRequirements'
import Navbar from '../components/Navbar';

class BasicRequirementsView extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <BasicRequirements />
      </Fragment>
    );
  }
}

export default BasicRequirementsView;
