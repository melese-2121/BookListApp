import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((response) => {
        console.log(book);
        setBook(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/" className="btn btn-secondary m-3">
        <FiArrowLeft style={{ width: "40px", height: "20px" }} />
      </Link>
      <h1 style={{ marginTop: "0px", marginLeft: "20px" }}>Show Book</h1>

      <div
        style={{
          border: "2px solid cyan",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "20px",
          width: "400px",
          maxWidth: "100%",
          minHeight: "350px",
          margin: "20px 20px",
          padding: "20px",
        }}
      >
        <p style={{ fontWeight: "bold" }}>
          <span style={{ color: "lightslategray", marginRight: "10px" }}>
            Id
          </span>
          {book._id}
        </p>
        <p style={{ fontWeight: "bold" }}>
          <span style={{ color: "lightslategray", marginRight: "10px" }}>
            Title
          </span>
          {book.title}
        </p>
        <p style={{ fontWeight: "bold" }}>
          <span style={{ color: "lightslategray", marginRight: "10px" }}>
            Author
          </span>
          {book.author}
        </p>
        <p style={{ fontWeight: "bold" }}>
          <span style={{ color: "lightslategray", marginRight: "10px" }}>
            Published Year
          </span>
          {book.publishedYear}
        </p>
        <p style={{ fontWeight: "bold" }}>
          <span style={{ color: "lightslategray", marginRight: "10px" }}>
            Create Time
          </span>
          {book.created_at}
        </p>
        <p style={{ fontWeight: "bold" }}>
          <span style={{ color: "lightslategray", marginRight: "10px" }}>
            Last Update Time
          </span>
          {book.updated_at}
        </p>
      </div>
      {/* <Link to={`/edit/${book._id}`}>Edit</Link>
      <button
        onClick={() => {
          axios
            .delete(`/api/books/${book._id}`)
            .then(() => (window.location.href = "/"))
            .catch((error) => console.error(error));
        }}
      >
        Delete
      </button> */}
    </div>
  );
}

export default BookDetail;
