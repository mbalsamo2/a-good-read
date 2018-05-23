import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        Hold my place.
      </div>
    </Provider>
    );
  }
}

export default App;
