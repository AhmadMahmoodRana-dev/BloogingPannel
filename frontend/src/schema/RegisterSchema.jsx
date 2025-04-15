import * as Yup from "yup";


const RegisterSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  export default RegisterSchema;