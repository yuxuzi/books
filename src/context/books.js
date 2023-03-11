import axios from "axios";
import { createContext, useState, useCallback } from "react";

const BooksContext = createContext();

export const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const fetchBooks = useCallback( async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  },[]);
  const createBook = async (title) => {
    //setBooks([...books, {id:Math.round(Math.random()*999), title}])
    const response = await axios.post("http://localhost:3001/books", { title });
    setBooks([...books, response.data]);
  };
  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };
  const editBook = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: title,
    });

    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, ...response.data } : book
      )
    );
  };

  return (
    <BooksContext.Provider
      value={{ books, deleteBook, editBook, createBook, fetchBooks }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
