import { combineReducers } from 'redux';
import  books  from './books.js';
import comments from './comments.js';
export const rootReducer = combineReducers({
  books: books,
  comments: comments
})
