/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Novel',
    'Sci-Fi',
    'Programming',
  ];
  const options = categories.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <div className="w-3/4 mt-6 m-auto bg-gray-200 py-3">
      <h2 className="">ADD NEW BOOK</h2>
      <form className="" method="POST">
        <div className="w-[700px] m-auto mt-3">
          <label
            htmlFor="Book-title"
            className="block text-sm font-medium text-gray-700"
          >
            <div className="text-left">Book title</div>
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 border-2 block m-auto w-[700px] py-2 pl-4 outline-none shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="Book-title"
              name="Book-title"
              type="text"
            />
          </label>
        </div>
        <div className="w-[700px] m-auto mt-3">
          <label
            htmlFor="categories"
            className="block text-sm font-medium text-gray-700"
          >
            <div className="text-left">Categories</div>
            <select
              className="w-[700px] py-2 rounded-md outline-none"
              id="categories"
              name="categories"
            >
              {options}
            </select>
          </label>
        </div>
        <div className="mt-3">
          <input
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
            value="ADD BOOK"
          />
        </div>
      </form>
    </div>
  );
};

export default BooksForm;
