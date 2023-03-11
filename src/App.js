
import './index.css'
import {  useEffect } from "react"
import BookCreate from "../src/components/BookCreate"
import BookList from "../src/components/BookList"
import useBooksContext from "../src/hooks/use-books-context";
const App = () => {

  const {fetchBooks} = useBooksContext();

 
  useEffect(() => {   
    fetchBooks();
  }, [fetchBooks])



  return (
    <div className ="app">
      <h1>Reading List</h1>
      <BookList/>
      <BookCreate />   
    </div>)

}

export default App 