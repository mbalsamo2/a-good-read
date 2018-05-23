import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/index'
import logo from './logo.svg';
import './App.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
    <Provider>
      <div className="App">
        Hold my place.
      </div>
    </Provider>
    );
  }
}

export default App;
