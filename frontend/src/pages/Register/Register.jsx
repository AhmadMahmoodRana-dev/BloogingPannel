import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import darkTheme from "../../colors/theme";
import RegisterSchema from "../../schema/RegisterSchema";

const Register = () => {
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
  };

  return (
    <div
      style={{
        backgroundColor: darkTheme.colors.background,
        minHeight: "90.6vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={(values,{resetForm}) => {
          console.log(values);
          resetForm()
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

            <button
            className="border"
              type="submit"
              style={{
                backgroundColor: darkTheme.colors.background,
                color: darkTheme.colors.textPrimary,
                padding: "12px 24px",
                borderRadius: "4px",
                borderColor: darkTheme.colors.border,
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
              <a href="/login" style={{ color: darkTheme.colors.textPrimary }}>
                Login
              </a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
