import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import darkTheme from "../../colors/theme";
import RegisterSchema from "../../schema/RegisterSchema";
import useAuthStore from "../../store/useAuthStore";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Register = () => {
  const { register } = useAuthStore();

  const inputStyle = {
    backgroundColor: darkTheme.colors.cardBackground,
    border: `1px solid ${darkTheme.colors.border}`,
    borderRadius: "4px",
    padding: "12px 16px",
    color: darkTheme.colors.textPrimary,
    fontSize: darkTheme.typography.fontSize,
    fontFamily: darkTheme.typography.fontFamily,
    width: "100%",
    marginBottom: "4px",
  };

  const labelStyle = {
    color: darkTheme.colors.textSecondary,
    marginBottom: "8px",
    display: "block",
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "admin",
  };

  return (
    <>
    <Navbar/>
    <div
      style={{
        backgroundColor: darkTheme.colors.background,
        minHeight: "91vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={(values, { resetForm }) => {
          register(values);
          resetForm();
          toast.success("Account created successfully!");
        }}
      >
        {() => (
          <Form
            style={{
              backgroundColor: darkTheme.colors.cardBackground,
              padding: "32px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <h2
              style={{
                color: darkTheme.colors.textPrimary,
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              Create Account
            </h2>

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Full Name</label>
              <Field name="name" type="text" style={inputStyle} />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: darkTheme.colors.error }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Email</label>
              <Field name="email" type="email" style={inputStyle} />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: darkTheme.colors.error }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Password</label>
              <Field name="password" type="password" style={inputStyle} />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: darkTheme.colors.error }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Phone Number</label>
              <Field name="phone" type="tel" style={inputStyle} />
              <ErrorMessage
                name="phone"
                component="div"
                style={{ color: darkTheme.colors.error }}
              />
            </div>
            <Field name="role" type="hidden" />

            <button
              type="submit"
              style={{
                backgroundColor: darkTheme.colors.background,
                color: darkTheme.colors.textPrimary,
                padding: "12px 24px",
                borderRadius: "4px",
                border: `1px solid ${darkTheme.colors.border}`,
                width: "100%",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Register
            </button>

            <p
              style={{
                color: darkTheme.colors.textSecondary,
                textAlign: "center",
                marginTop: "16px",
              }}
            >
              Already have an account?{" "}
              <Link to="/login" style={{ color: darkTheme.colors.textPrimary }}>
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>

      {/* Toast container to display the toast messages */}
      <ToastContainer 
        position="top-right" 
        autoClose={5000}
        hideProgressBar 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </div>
    </>
  );
};

export default Register;
