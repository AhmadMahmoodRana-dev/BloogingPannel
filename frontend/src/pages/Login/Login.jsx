import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import darkTheme from "../../colors/theme";
import useAuthStore from "../../store/useAuthStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginSchema from "../../schema/LoginSchema";
import Navbar from "../../components/Navbar";

const Login = () => {
  const { login } = useAuthStore();

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
    email: "",
    password: "",
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
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          login(values)
          resetForm();
          toast.success("Login Successfully!");
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
              Login Account
            </h2>

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
              Login
            </button>

            <p
              style={{
                color: darkTheme.colors.textSecondary,
                textAlign: "center",
                marginTop: "16px",
              }}
            >
              Donot have an account?{" "}
              <a
                href="/register"
                style={{ color: darkTheme.colors.textPrimary }}
              >
                Register
              </a>
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

export default Login;
