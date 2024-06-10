import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publishedYear, setPublishedYear] = useState(""); // Add state for published year
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/books", {
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
      <Link to="/" className="btn btn-secondary m-3">
        <FiArrowLeft style={{ width: "40px", height: "20px" }} />
      </Link>

      <h2 style={{ margin: "20px", textAlign: "left", marginTop: "0px" }}>
        Create Book
      </h2>
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

export default CreateBook;
