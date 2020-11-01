import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        required
        type="text"
        placeholder="Book Title"
        value={title}
      />
      <input
        onChange={(e) => setAuthor(e.target.value)}
        required
        type="text"
        placeholder="Author"
        value={author}
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default BookForm;
