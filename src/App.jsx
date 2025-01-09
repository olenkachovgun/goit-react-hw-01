
// import React from 'react';
import './App.css';
import BookList from './components/ListBook/ListBook';

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];
 function App () {
  return (
    <div>
      <h2>Hello world</h2>
      <BookList books={favouriteBooks} />
    </div>
  )
}

export default App;
