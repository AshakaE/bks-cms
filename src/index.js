import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import booksReducer from './reducers/booksReducer';

const defaultState = {
  books: [
    {
      id: Math.round(Math.random() * 100),
      title: 'Learn Python the hard way',
      author: 'Zed Shaw',
      category: 'Programming',
    },
    {
      id: Math.round(Math.random() * 100),
      title: 'The Lean Startup',
      author: 'Eric Ries',
      category: 'Novel',
    },
  ],
};

const store = createStore(booksReducer, defaultState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
