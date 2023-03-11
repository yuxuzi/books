import "../index.css";
import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";

const BookList = () => {
    const { books} = useBooksContext();
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
