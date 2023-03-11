
import '../index.css'
import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";
import BookEdit from './BookEdit'


const BookShow = ({book}) => {
    const [showEdit, setShowEdit] = useState(false)
    const {deleteBook, editBook} = useBooksContext()

    const handleSubmit = (id, title) => { setShowEdit(false); editBook(id, title) ;};

  return (
    <div className='book-show'>
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
        <div><h3>{showEdit? <BookEdit book={book} onSubmit={handleSubmit}/>:book.title}</h3></div>

    <div className="actions">
        <button className="edit" onClick={()=>setShowEdit(!showEdit)}>Edit</button>
        <button className="delete" onClick={()=>deleteBook(book.id)}>Delete</button>
    </div>
    
    </div>
  )
}


export default BookShow