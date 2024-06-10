import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import BookList from "../components/Book/BookList";
import axios from "axios";
import BookCard from "../components/Book/BookCard";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://booklistapp-rxx8.onrender.com/api/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, []);
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState("table");

  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if (!username || !password) {
      navigate("/signin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/signin");
  };

  return (
    <div>
      <button
        onClick={() => handleLogout(history)}
        className="btn btn-sm"
        style={{
          width: "100px",
          border: "1px solid red",
          marginLeft: "15px ",
          marginTop: "10px",
          marginBottom: "0px",
          backgroundColor: "white",
          transition: "background-color 1s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "red")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "white")}
      >
        <FiLogOut style={{ width: "50px", height: "20px" }} />
      </button>

      <div className="d-flex justify-content-center mb-3 mt-2">
        <button
          onClick={() => setViewMode("table")}
          className="btn btn-primary me-2 "
          style={{ width: "100px" }}
        >
          Table
        </button>
        <button
          onClick={() => setViewMode("card")}
          className="btn btn-primary"
          style={{ width: "100px" }}
        >
          Card
        </button>
      </div>
      {viewMode === "table" ? (
        <BookList />
      ) : (
        <div
          className="row"
          style={{ marginTop: "50px", paddingInline: "20px" }}
        >
          {books.map((book) => (
            <div key={book._id} className="col-lg-3 col-md-6 col-sm-9 mb-4">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
