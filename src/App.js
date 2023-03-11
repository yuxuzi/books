
import './index.css'
import axios from 'axios'
import { useState, useEffect } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"

const App = () => {
  const [books, setBooks] = useState([])
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }
  useEffect(() => {
    console.log('useEffect')
    fetchBooks();
  }, [])


  const createBook = async (title) => {
    //setBooks([...books, {id:Math.round(Math.random()*999), title}])
    const response = await axios.post('http://localhost:3001/books', {title})
    setBooks([...books, response.data])

  }
  const deleteBook = async (id) =>{ 
    await axios.delete(`http://localhost:3001/books/${book.id}`)
    setBooks(books.filter((book) => book.id!== id))
  }
  const editBook = async (id, title) => {
   const response= await axios.put(`http://localhost:3001/books/${id}`, {title:title})

    setBooks( books.map((book) => book.id === id? {...book, ...response.data} : book ))
   }

  return (
    <div className ="app">
      <h1>Reading List</h1>
      <BookList books={books} 
      onDelete={deleteBook} 
      onEdit={editBook}
      />
      <BookCreate onCreate={createBook} />
   
    </div>)

}

export default App  