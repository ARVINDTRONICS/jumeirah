import React, { Fragment, Component } from "react";
import LoginForm from "../../components/LoginForm";
import { ToastContainer } from "react-toastify";
export const LogIn = (props) => {
  return (
    <div className="container-fluid p-0 ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <div className="login-wrap">
        <div class="radial-gradient-container"></div>
        <div className="linear-gradient"></div>
        <div className="title">
          <div className="logo"></div>
        </div>
        <div className="login-form">
          <LoginForm
            history={props.history}
            location={props.location}
            updateUserByKey={props.updateUserByKey}
          />
        </div>
      </div>
    </div>
  );
};
