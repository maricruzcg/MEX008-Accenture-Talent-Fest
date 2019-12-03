import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Components
import Login from './views/LoginView';
import StudentFormView from './views/StudentFormView';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path='/' component={Login} />
        <Route exact path='/confirm-form' component={StudentFormView} />
      </Router>
    );
  }
}

export default App;
