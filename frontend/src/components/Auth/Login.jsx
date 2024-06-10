import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup"; // You can use Yup for schema validation
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-cont">
      <div className="background-image"></div>
      <div className="login-container">
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={async (values, { setSubmitting, setFieldError }) => {
            try {
              const response = await axios.post(
                "http://localhost:5000/api/users/signin",
                values
              );
              if (response.data["message"] === true) {
                console.log(response.data);
                localStorage.setItem("username", values.username); // Save username to local storage
                localStorage.setItem("password", values.password); // Save password to local storage
                navigate("/");
              }
              // Handle success response here, e.g., set token in localStorage
            } catch (error) {
              console.error(error);
              if (error.response) {
                setFieldError("username", error.response.data.message);
              } else {
                setFieldError(
                  "username",
                  "An error occurred. Please try again."
                );
              }
            }
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form id="login-form">
              <h2>Account Login</h2>
              <div className="input-group">
                <Field
                  type="text"
                  className={`input ${
                    errors.username && touched.username ? "is-invalid" : ""
                  }`}
                  id="username"
                  name="username"
                  placeholder="Username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="input-group">
                <Field
                  type="password"
                  className={`input ${
                    errors.password && touched.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
              <div className="options">
                <a href="#" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
              <Link
                to="/signup"
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "blue",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  textDecoration: "none",
                }}
              >
                Create Account Now
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
