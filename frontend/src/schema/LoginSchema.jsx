import * as Yup from "yup";


const LoginSchema = Yup.object({
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  export default LoginSchema;