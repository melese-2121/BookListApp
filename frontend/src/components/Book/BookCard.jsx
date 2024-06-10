// BookCard.js

import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { FaBookOpen, FaUser } from "react-icons/fa";

import { FaInfoCircle } from "react-icons/fa";
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";
import "./BookCard.css"; // Import CSS
import { useState } from "react";

const BookCard = ({ book }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="book-card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <h6 className="card-title  text-muted d-flex align-items-center">
              <span className="me-2">
                <FiEye />
              </span>
              {book.title}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted d-flex align-items-center">
              <span className="me-2">
                <FiEdit />
              </span>
              {book.author}
            </h6>
          </div>
          <div>
            <p
              className="card-text year "
              style={{
                padding: "2px 10px",
                borderRadius: "5px",
              }}
            >
              {book.publishedYear}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link to={`/book/${book._id}`} className="btn text-primary me-2 ">
            <FaBookOpen size={18} />
          </Link>
          <Link onClick={handleShow} className="btn text-primary me-2 ">
            <FaInfoCircle
              size={18}
              style={{ backgroundColor: "white", color: "green" }}
            />
          </Link>
          <Link
            to={`/edit/${book._id}`}
            className="btn text-warning fw-bold me-2"
          >
            <FiEdit size={18} />
          </Link>
          <Link to={`/delete/${book._id}`} className="btn text-danger fw-bold">
            <FiTrash size={18} />
          </Link>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ minHeight: "500px" }}
        centered
      >
        <Modal.Body>
          <div
            style={{ width: "70px", textAlign: "center", marginBottom: "5px" }}
          >
            <p
              className="card-text  "
              style={{
                padding: "2px 5px",
                borderRadius: "5px",

                backgroundColor: "rgb(247, 146, 146)",
              }}
            >
              {book.publishedYear}
            </p>
          </div>
          <div>
            <h6 className="card-title  text-muted d-flex align-items-center">
              <span className="me-2">
                <FaBookOpen style={{ color: "rgb(247, 146, 146)" }} />
              </span>{" "}
              {book.title}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted d-flex align-items-center">
              <span className="me-2">
                <FaUser style={{ color: "rgb(247, 146, 146)" }} />
              </span>{" "}
              {book.author}
            </h6>

            <p style={{ marginTop: "20px" }}>{book.description}</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookCard;
