import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  NavBar  from './components/NavBar.js';
import { Home } from './components/Home.js';
import { BooksList } from './components/BooksList.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={BooksList} />
        </div>
      </Router>
    );
  }
}

export default App;
