import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BooksContext from './context/books';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BooksContext.Provider>
    <App />
  </BooksContext.Provider>
);


