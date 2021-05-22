import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className=" flex flex-col m-auto justify-center mt-6 text-center">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
