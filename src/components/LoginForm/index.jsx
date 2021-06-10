import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authService } from "../../services/loginService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required")
});
const LoginForm = ({ history, updateUserByKey }) => {
  async function handleAuthentication(values) {
    await authService(values).then((response) => {
      if (response.status === 200) {
        toast.success("Successfully Logged In", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        localStorage.setItem("userToken", Math.random().toString());
        updateUserByKey({ isLoggedIn: true, email: values.email });
        setTimeout(() => {
          history.push("/home");
        }, 3000);
      } else {
        toast.error("Invalid Log In", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
      }
    });
  }

  return (
    <>
      {/* Same as */}

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          handleAuthentication(values);
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form className="login">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter email"
                className={`form-control ${
                  touched.email && errors.email ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="email"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                className={`form-control ${
                  touched.password && errors.password ? "is-invalid" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="password"
                className="invalid-feedback"
              />
            </div>

            <button
              type="submit"
              className="btn  btn-block"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default LoginForm;
