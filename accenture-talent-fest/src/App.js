import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Components
import Login from './views/LoginView';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path='/' component={Login} />
      </Router>
    );
  }
}

export default App;
