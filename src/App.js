import React from 'react';
import './App.css';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
import BooksList from './components/BooksList';

// const store = createStore(
//   combineReducers({ bookState: bookReducer }),
// );

const App = () => (
  // <Provider store={store}>
  <div className="App">
    <BooksList />
  </div>
  // </Provider>
);

export default App;
