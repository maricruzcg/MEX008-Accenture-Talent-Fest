import React, { Component, Fragment } from 'react';
import StudentForm from '../components/StudentForm';
import Navbar from '../components/Navbar';

class StudentFormView extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <StudentForm />
      </Fragment>
    );
  }
}

export default StudentFormView;
