import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Components
import Login from './views/LoginView';
import StudentFormView from './views/StudentFormView';
import BasicRequirementsView from './views/BasicRequirementsView';
import EnglishOptions from './views/EnglishOptionsView';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path='/' component={Login} />
        <Route path='/confirm-form' component={StudentFormView} />
        <Route path='/basic-requirements' component={BasicRequirementsView} />
        <Route path='/english-option' component={EnglishOptions} />
      </Router>
    );
  }
}

export default App;
