import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function EditBook() {
  const { id } = useParams(); // Get the book id from URL
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publishedYear, setPublishedYear] = useState(""); // Add state for published year
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/books/${id}`) // Fetch book details by id
      .then((response) => {
        const book = response.data;
        setTitle(book.title);
        setAuthor(book.author);
        setDescription(book.description);
        setPublishedYear(book.publishedYear.toString());
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/books/${id}`, {
        title,
        author,
        description,
        publishedYear: Number(publishedYear), // Ensure it's a number
      })
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Link
        style={{
          width: "80px",
          height: "35px",
          marginLeft: "15px",
          marginTop: "10px",
        }}
        to="/"
        className="btn btn-secondary"
      >
        <FiArrowLeft />
      </Link>
      <h2 style={{ margin: "20px", textAlign: "left" }}>Edit Book</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "400px",
          marginInline: "auto",
          border: "2px solid cyan",
          padding: "20px 15px",
          borderRadius: "10px",
        }}
      >
        <label
          style={{ marginTop: "10px", color: "GrayText", fontWeight: "bold" }}
        >
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="rounded form-control"
          style={{ height: "40px" }}
        />

        <label
          style={{ marginTop: "10px", color: "GrayText", fontWeight: "bold" }}
        >
          Author
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="rounded form-control"
          style={{ height: "40px" }}
        />

        <label
          style={{ marginTop: "10px", color: "GrayText", fontWeight: "bold" }}
        >
          Published Year
        </label>
        <input
          type="number"
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
          required
          className="rounded form-control"
          style={{ height: "40px" }}
        />

        <label
          style={{ marginTop: "10px", color: "GrayText", fontWeight: "bold" }}
        >
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="rounded form-control"
          style={{ height: "80px" }}
        ></textarea>

        <button
          type="submit"
          style={{
            backgroundColor: "cyan",
            borderRadius: "3px",
            fontWeight: "bold",
          }}
          className="btn mt-3"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditBook;
