import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import  NavBar  from './components/NavBar.js';
import { Home } from './components/Home.js';
import BooksPage from './containers/BooksPage.js';
import BookPage from './containers/BookPage.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBooks } from './actions/bookActions.js';

class App extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }


  render() {
    return (
      <Router>
        <div className="App">
        <NavBar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={BooksPage} />
        <Route exact path="/books/:id" component={BookPage} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBooks: fetchBooks
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
