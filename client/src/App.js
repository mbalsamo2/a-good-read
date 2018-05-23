import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  NavBar  from './components/NavBar.js'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar/>
          Hold my place.
        </div>
      </Router>
    );
  }
}

export default App;
