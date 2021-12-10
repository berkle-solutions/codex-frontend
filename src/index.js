import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import "react-toastify/dist/ReactToastify.css";

import { Router } from "./router";
import { MainContext } from "./store/MainContext";

import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <MainContext>
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
    <Router />
  </MainContext>,
  document.getElementById("root")
);
