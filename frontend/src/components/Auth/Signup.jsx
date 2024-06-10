import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import SignupSchema from "../../validation/signupSchema"; // Import the schema
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "https://booklistapp-rxx8.onrender.com/users/signup",
        values
      );
      console.log("Signup successful:", response.data);
      // Redirect to login or another page if needed
    } catch (error) {
      console.error("There was an error signing up:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="signup-cont">
      <div className="background-image"></div>
      <div className="signup-container">
        <Formik
          initialValues={{
            username: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form id="signup-form">
              <h2>Create Account</h2>
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
              {/* <div className="input-group">
                <Field
                  type="email"
                  className={`input ${
                    errors.email && touched.email ? "is-invalid" : ""
                  }`}
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div> */}
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
              <div className="input-group">
                <Field
                  type="password"
                  className={`input ${
                    errors.confirmPassword && touched.confirmPassword
                      ? "is-invalid"
                      : ""
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Signup"}
              </button>
              <div className="options">
                <a href="#" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
              <Link
                to="/signin"
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
                Have an account?
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
