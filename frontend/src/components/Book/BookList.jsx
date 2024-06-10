import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiEye, FiEdit, FiTrash, FiPlus } from "react-icons/fi"; // Import icons
import "./BookList.css";
function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: "20px",
          marginBottom: "20px",
        }}
      >
        <h1>Book List</h1>
        <div
          style={{
            marginTop: "20px",
            padding: "5px",
            border: "2px solid blue",
            borderRadius: "5px",
          }}
        >
          <Link to="/create" style={{ color: "#000", textDecoration: "none" }}>
            <FiPlus style={{ fontSize: "25px", color: "blue" }} />
          </Link>
        </div>
      </div>
      <div className="book-list">
        <div className="book-row header">
          <div className="book-item">No</div>
          <div className="book-item">Title</div>
          <div className="book-item">Author</div>
          <div className="book-item">Publish Year</div>
          <div className="book-item">Operations</div>
        </div>
        {books.map((book, index) => (
          <div key={book._id} className="book-row">
            <div className="book-item">{index + 1}</div>
            <div className="book-item">{book.title}</div>
            <div className="book-item">{book.author}</div>
            <div className="book-item">{book.publishedYear}</div>
            <div className="book-item ">
              <Link
                to={`/book/${book._id}`}
                className="btn btn-sm btn-primary me-2"
              >
                <FiEye size={18} />
              </Link>
              <Link
                to={`/edit/${book._id}`}
                className="btn btn-sm btn-warning me-2"
              >
                <FiEdit />
              </Link>
              <Link
                to={`/delete/${book._id}`}
                className="btn btn-sm btn-danger"
                style={{ maxWidth: "40px" }}
              >
                <FiTrash />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
