import "../index.css";
import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";
const BookEdit = ({book,onSubmit}) => {
    const [title, setTitle] = useState(book.title);
    const {editBook} = useBooksContext();


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        editBook(book.id, title);
    };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label htmlFor="">Title</label>
      <input className="input" onChange={e=>setTitle(e.target.value)} />
      <button className="button is-primary">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
