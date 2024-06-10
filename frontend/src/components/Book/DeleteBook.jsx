import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { FiTrash, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function DeleteBook() {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/books/${id}`)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Link to="/" className="btn btn-secondary">
            <FiArrowLeft style={{ width: "50px", height: "30px" }} />
          </Link>
        </div>
      </div>
      <div className="row ">
        <h2
          style={{
            marginTop: "50px",
            textAlign: "start",
            marginBottom: "50px",
          }}
        >
          Delete Book
        </h2>
        <div
          className="col"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="card"
            style={{
              padding: "20px",
            }}
          >
            <div className="card-body">
              {book && (
                <>
                  <p
                    style={{
                      color: "GrayText",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Are you sure you want to delete "{book.title}"?
                  </p>
                  <button
                    onClick={handleDelete}
                    className="btn btn-danger"
                    style={{ borderRadius: "2px" }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook;
