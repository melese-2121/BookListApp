// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import "./App.css";
import HomePage from "./pages/HomePage";
import CreateBook from "./components/Book/CreateBook";
import EditBook from "./components/Book/EditBook";
import BookDetail from "./components/Book/BookDetail";
import DeleteBook from "./components/Book/DeleteBook";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Private Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
