import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username too short!")
    .max(50, "Username too long!")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

export default LoginSchema;
